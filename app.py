# this_file = "venv/bin/activate_this.py"
# exec(open(this_file).read(), {'__file__': this_file})
import mysql.connector
import flask
import sys
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import shutil
from PIL import Image
from dotenv import load_dotenv
import os

load_dotenv()

cur_path = os.path.abspath(".")
sys.path.append(cur_path)

application = Flask(__name__)
CORS(application, supports_credentials=True)

HOST = os.getenv('DATABASE_HOST')
NAME = os.getenv('DATABASE_NAME')
USER = os.getenv('DATABASE_USER')
PASSWORD = os.getenv('DATABASE_PASSWORD')


# Response Header Wrapper function, setting appropriate header permissions

def add_response_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,Cache-Control')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


@application.route('/hello')
#  Test Connection
def say_hello_world():
    return flask.jsonify({'result': "Hello Connected React World!!!"})


@application.route('/')
@application.route('/contact')
@application.route('/apropos')
@application.route('/portfolio/<index>')
@application.route('/admin')
@application.route('/admin/<index>')
def main(index=None):
    return send_file('front/dist/index.html')


@application.route('/assets/<file>')
def send_assert(file=None):
    return send_file(f'front/dist/assets/{file}')


@application.route('/static/<file>')
def send_static(file=None):
    return send_file(f'front/dist/static/{file}')


@application.route('/<folder>/<file>')
def send_image(folder=None, file=None):
    return send_file(f'front/dist/{folder}/{file}')


def format_api_pages(data):
    result = []
    for page in data:
        result.append({
            'index': page[0],
            'title': page[1],
            'article': page[2]
        })
    return result


@application.route('/api/pages', methods=['GET'])
# Return reportage information
def get_pages_information():
    try:
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        sql_requests = "SELECT * FROM pages WHERE (id > 3) ORDER BY sort;"
        cursor.execute(sql_requests)
        result = cursor.fetchall()
        return flask.jsonify(format_api_pages(result))

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


def format_api_images(data):
    result = []
    for image in data:
        result.append({
            'id': image[0]
        })
    return result


@application.route('/api/images', methods=['GET'])
# Return image information
def get_image_information():
    try:
        num = (request.args.get('num'),)
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        # SELECT ALL images in one reportage
        sql_requests = "SELECT id FROM images WHERE page = %s ORDER BY number;"
        cursor.execute(sql_requests, num)
        result = cursor.fetchall()
        return flask.jsonify(format_api_images(result))

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/image/<name>')
def get_image(name=None):
    try:
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
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

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


def reformat_title_simple_code(text):
    return "''".join(text.split("'"))


@application.route('/updateTitle/', methods=['POST', 'GET'])
def update_title():
    try:
        args = request.json
        title = args['title']
        article = args['article']
        reportId = args['reportId']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        sql_request = f"""UPDATE pages SET name = '{reformat_title_simple_code(title)}', presentation = '{reformat_title_simple_code(article)}' WHERE id = {reportId};"""
        cursor.execute(sql_request)
        connection.commit()
        return flask.jsonify({'result': 'success'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


# Upload Image
@application.route('/upload_images/<report_id>', methods=['POST'])
def upload_image(report_id=None):
    try:
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
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
                SQLrequest = f"""
                INSERT INTO images (name, page, number) 
                VALUES ('{filename}', {report_id}, {i + number_max})"""
                cursor.execute(SQLrequest)
                connection.commit()
                i += 1
        return flask.jsonify({'download': 'success'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response
    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/delete_image', methods=['POST', 'GET'])
def delete_image():
    try:
        args = request.json
        image_id = args['image_id']
        article_id = args['report_id']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        sql_request = f"SELECT name FROM images WHERE id = {image_id}"
        cursor.execute(sql_request)
        filename = cursor.fetchall()[0][0]
        sql_request = f"DELETE FROM images WHERE id = {image_id}"
        cursor.execute(sql_request)
        connection.commit()
        os.remove(os.path.join(f'img/{article_id}', filename))
        return flask.jsonify({
            'delete': 'success'
        })
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/delete_report', methods=['POST'])
def delete_report():
    try:
        args = request.json
        report_id = args['report_id']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        sql_request = f"DELETE FROM images WHERE page = {report_id}"
        cursor.execute(sql_request)
        connection.commit()
        sql_request = f"DELETE FROM pages WHERE id = {report_id}"
        cursor.execute(sql_request)
        connection.commit()
        shutil.rmtree(f'img/{report_id}')
        return flask.jsonify({
            'delete': 'success'
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/create_report', methods=['POST'])
def create_report():
    try:
        args = request.json
        title = args['title']
        article = args['article']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
        cursor = connection.cursor()
        sql_request = f"""INSERT INTO pages (name, presentation) VALUES ('{reformat_title_simple_code(title)}', '{reformat_title_simple_code(article)}');"""
        cursor.execute(sql_request)
        connection.commit()
        sql_request = f"SELECT MAX(id) FROM pages;"
        cursor.execute(sql_request)
        report_id = cursor.fetchall()[0][0]
        if not os.path.exists(f'img/{report_id}'):
            os.makedirs(f'img/{report_id}')
        return flask.jsonify({
            'report_id': report_id
        })

    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/reorder', methods=['POST'])
def reorder():
    try:
        args = request.json
        images = args['images']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
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

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/reports_order', methods=['PUT'])
def reports_order():
    try:
        args = request.json
        reports = args['reports']
        connection = mysql.connector.connect(host=HOST, database=NAME, user=USER, password=PASSWORD)
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

    finally:
        # Close connection
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


if __name__ == "__main__":
    application.run(debug=True, host="0.0.0.0", port=5000)
