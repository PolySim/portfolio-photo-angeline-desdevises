import os
import shutil

import flask
from flask import request

from api.DB.get_information import create_connection
from api.Formatter.pages_formatter import pages_formatter


def find_pages():
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_requests = "SELECT * FROM pages WHERE (id > 3 AND display = 1) ORDER BY sort;"
        cursor.execute(sql_requests)
        result = cursor.fetchall()
        if not result or len(result) == 0:
            return []
        return flask.jsonify(pages_formatter(result))

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def find_page(report_id=None):
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_requests = f"SELECT * FROM pages WHERE id = {report_id};"
        cursor.execute(sql_requests)
        result = cursor.fetchall()
        if not result or len(result) == 0:
            return flask.jsonify({})
        return flask.jsonify(pages_formatter(result)[0])

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def create_page():
    try:
        body = request.json
        title = body['title']
        article = body['article']
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = f"""INSERT INTO pages (name, presentation) VALUES (%s, %s);"""
        cursor.execute(sql_request, (title, article))
        connection.commit()
        sql_request = f"SELECT MAX(id) FROM pages;"
        cursor.execute(sql_request)
        report_id = cursor.fetchall()[0][0]
        if not os.path.exists(f'img/{report_id}'):
            os.makedirs(f'img/{report_id}')
        return find_page(report_id)

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def update_page(report_id=None):
    try:
        connection = create_connection()
        cursor = connection.cursor()
        args = request.args
        title = args.get('title')
        article = args.get('article')
        status = args.get('status')

        if title:
            sql_request = "UPDATE pages SET name = %s, presentation = %s WHERE id = %s;"
            cursor.execute(sql_request, (title, article, report_id))
        if status:
            sql_request = "UPDATE pages SET display = %s WHERE id = %s;"
            cursor.execute(sql_request, (status, report_id))

        connection.commit()
        return find_page(report_id)
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def delete_page(report_id=None):
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = f"DELETE FROM images WHERE page = {report_id}"
        cursor.execute(sql_request)
        connection.commit()
        sql_request = f"DELETE FROM pages WHERE id = {report_id}"
        cursor.execute(sql_request)
        connection.commit()
        shutil.rmtree(f'img/{report_id}')
        return report_id

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


def reorder_page():
    try:
        args = request.json
        reports = args['reports']
        connection = create_connection()
        cursor = connection.cursor()
        i = 4
        for report in reports:
            sql_request = f"UPDATE pages SET sort = {i} WHERE id = {report['index']};"
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
