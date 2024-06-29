import os

import flask
from PIL import Image
from flask import request, send_file

from api.DB.get_information import create_connection
from api.Formatter.images_formatter import formatter_images


def find_images():
    try:
        num = (request.args.get('num'),)
        connection = create_connection()
        cursor = connection.cursor()
        sql_requests = """
        SELECT images.id, description 
        FROM images
        LEFT JOIN publication_desc ON publication_desc.publicationId = images.id
        WHERE page = %s 
        ORDER BY number;"""
        cursor.execute(sql_requests, num)
        result = cursor.fetchall()
        return flask.jsonify(formatter_images(result))

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def send_image(name=None):
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = f"SELECT name, page FROM images WHERE id = {name}"
        cursor.execute(sql_request)
        result = cursor.fetchall()
        return send_file(f'img/{result[0][1]}/{result[0][0]}')
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def update_description():
    try:
        args = request.json
        description = args.get('description')
        image_id = args.get('imageId')
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = """
        SELECT *
        FROM publication_desc
        WHERE publicationId = %s
        """
        cursor.execute(sql_request, (image_id,))
        result = cursor.fetchall()
        print(result)

        if len(result) != 0:
            sql_request = """
                UPDATE publication_desc 
                SET description = %s
                WHERE publicationId = %s ;
            """

        else:
            sql_request = """
                INSERT INTO publication_desc (description, publicationId)
                VALUES (%s, %s);
            """

        cursor.execute(sql_request, (description, image_id))
        connection.commit()
        return flask.jsonify({'result': 'success'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def upload_image(report_id=None):
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = f"SELECT MAX(number) FROM images WHERE page = {report_id};"
        cursor.execute(sql_request)
        number_max = cursor.fetchall()[0][0]
        if number_max is None:
            number_max = 0
        image_files = request.files.getlist('images')
        if image_files:
            i = 1
            for image_file in image_files:
                filename = image_file.filename
                image_file = Image.open(image_file)
                max_size = (2000, 2000)
                image_file.thumbnail(max_size, Image.LANCZOS)
                image_file.save(os.path.join('img/' + report_id, filename))
                sql_request = """
                INSERT INTO images (name, page, number) 
                VALUES (%s, %s, %s)"""
                cursor.execute(sql_request, (filename, report_id, i + number_max))
                connection.commit()
                i += 1
        return flask.jsonify({'download': 'success'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def delete_image():
    try:
        args = request.json
        image_id = args.get('image_id')
        article_id = args.get('report_id')
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = f"SELECT name FROM images WHERE id = {image_id}"
        cursor.execute(sql_request)
        filename = cursor.fetchall()[0][0]
        sql_request = f"DELETE FROM images WHERE id = {image_id}"
        cursor.execute(sql_request)
        connection.commit()
        if os.path.exists(os.path.join(f'img/{article_id}', filename)):
            os.remove(os.path.join(f'img/{article_id}', filename))
        return flask.jsonify({
            'delete': 'success'
        })
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def reorder_images():
    try:
        args = request.json
        images = args.get('images')
        connection = create_connection()
        cursor = connection.cursor()
        i = 1
        for image in images:
            sql_request = f"UPDATE images SET number = {i} WHERE id = {image['id']};"
            cursor.execute(sql_request)
            connection.commit()
            i += 1
        return flask.jsonify({
            'reorder': 'success'
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response
