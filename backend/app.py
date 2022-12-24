# this_file = "venv/bin/activate_this.py"
# exec(open(this_file).read(), {'__file__': this_file})

import mysql.connector
import flask
import os
import sys
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
import shutil
import json

cur_path = os.path.abspath(".")
sys.path.append(cur_path)

application = Flask(__name__)
CORS(application, supports_credentials=True)

picFolder = os.path.join("./static")
application.config['UPLOAD_FOLDER'] = picFolder

# Response Header Wrapper function, setting appropriate header permissions

FRONTEND_URL = "http://localhost:3000"


def add_response_headers(response):
    response.headers.add('Access-Control-Allow-Origin', FRONTEND_URL)
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization,Cache-Control')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


@application.route('/')
def main():
    return render_template('build/index.html')


@application.route('/portfolio-photo-angeline-desdevises/static/<path>/<name>')
def static_file(path=None, name=None):
    return send_file("static/" + path + "/" + name)


@application.route('/favicon/<name>')
def favicon(name=None):
    return send_file("favicon/" + name)


@application.route('/<article>/favicon/<name>')
def favicon_in_article(article=None, name=None):
    return send_file("favicon/" + name)


@application.route('/<article>/e/favicon/<name>')
def favicon_in_article_e(article=None, name=None):
    return send_file("favicon/" + name)


@application.route('/<name>/<num>')
def refresh_app_reportage(name=None, num=None):
    return render_template('build/index.html')


@application.route('/hello')
#  Test Connection
def say_hello_world():
    return flask.jsonify({'result': "Hello Connected React World!!!"})


@application.route('/api/pages', methods=['GET'])
# Return reportage information
def get_pages_information():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = """SELECT * FROM pages WHERE (id > 3);"""
        cursor.execute(sql_requests)
        result = cursor.fetchall()
        return flask.jsonify(result)

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


@application.route('/api/images', methods=['GET'])
# Return image information
def get_image_information():
    try:
        num = (request.args.get('num'),)
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        # SELECT ALL images in one reportage 
        sql_requests = """SELECT id FROM images WHERE page = %s ORDER BY number;"""
        cursor.execute(sql_requests, num)
        result = cursor.fetchall()
        return flask.jsonify(result)

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
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT name, page FROM images WHERE id = %s"
        cursor.execute(request, (name,))
        result = cursor.fetchall()
        return send_file('img/' + str(result[0][1]) + '/' + result[0][0])
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


def add_image(name, page, number):
    try:
        connection = mysql.connector.connect(host='zmdenlzpolysim.mysql.db', database='zmdenlzpolysim',
                                             user='zmdenlzpolysim', password='Simon256')
        cursor = connection.cursor()
        request = "INSERT INTO images (name, page, number) VALUES (%s, %s, %s);"
        result = cursor.execute(request, (name, page, number))
        connection.commit()
        print("Image and file inserted successfully as a BLOB into python_employee table", result)
    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))
    # finally:
    #     if connection.is_connected():
    #         cursor.close()
    #         connection.close()
    #         print("MySQL connection is closed")


# Create Album
@application.route('/admin/CreateAlbum')
def create_album():
    pass


# Send Album and Image information
def sql_result_to_dict_admin_list_image(sql_result):
    result = {}
    for image in sql_result:
        if 'title' in result:
            result['images'].append(image[1])
        else:
            if image[1] is None:
                result = {
                    'title': image[0],
                    'content': image[2],
                    'images': []
                }
            else:
                result = {
                'title': image[0],
                'content': image[2],
                'images': [image[1]]
                }
    return result


@application.route('/admin/listImage/<id>')
def admin_list_image(id=None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT pages.name, images.id, presentation
        FROM pages 
        LEFT JOIN images ON pages.id = images.page
        WHERE pages.id = %s"""
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        return sql_result_to_dict_admin_list_image(result)
    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


# UPDATE or CREATE Album information
@application.route('/admin/updateAlbum/<id>/<create>')
def update_album(id=None, create=None):
    title = request.args.get('title')
    content = request.args.get('content')
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        if create == '0':
            SQLrequest = "INSERT INTO pages VALUES (%s, %s, %s);"
            if content == "":
                cursor.execute(SQLrequest, (id, title, None))
            else:
                cursor.execute(SQLrequest, (id, title, content))
            if not os.path.exists('img/' + id):
                os.makedirs('img/' + id)
        else:
            SQLrequest = "UPDATE pages SET name = %s, presentation = %s WHERE id = %s"
            if content == "":
                cursor.execute(SQLrequest, (title, None, id))
            else:
                cursor.execute(SQLrequest, (title, content, id))
        connection.commit()
        print("Image and file inserted successfully as a BLOB into python_employee table")
        return "Successfully"
    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))


@application.route('/removeImage/<id>')
def remove_image(id= None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "SELECT name, page FROM images WHERE id = %s"
        cursor.execute(request, (id,))
        result = cursor.fetchall()
        try:
            request = "DELETE FROM images WHERE id= %s"
            cursor.execute(request, (id,))
            connection.commit()
            os.remove(os.path.join('img/' + str(result[0][1]), result[0][0]))
            return 'Image supprimée avec succès!'
        except FileNotFoundError:
            return 'Image introuvable.'
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
@application.route('/uploadImage/<id>', methods=['POST'])
def upload_image(id:None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        SQLrequest = """
        SELECT MAX(id), MAX(number)
        FROM images
        WHERE page = %s;
        """
        cursor.execute(SQLrequest, (id,))
        result = cursor.fetchall()[0]
        print(result)
        if result == (None, None):
            (id_max, number_max) = (0, 0)
        else:
            (id_max, number_max) = result
        image_files = request.files.getlist('images')
        if image_files:
            indice = 1
            for image_file in image_files:
                extension = image_file.filename.split('.')[-1]
                image_file.save(os.path.join('img/' + id, str(id_max + indice) + '.' + extension))
                SQLrequest = """
                INSERT INTO images (name, page, number)
                VALUES (%s, %s, %s)
                """
                cursor.execute(SQLrequest, (str(id_max + indice) + '.' + extension, id, number_max + indice))
                connection.commit()
                indice += 1
        return flask.jsonify({'message' : 'Images téléchargées avec succes'})
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


@application.route('/maxIdAlbum')
def max_id_album():
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = """
        SELECT MAX(id)
        FROM pages;"""
        cursor.execute(request)
        result = cursor.fetchall()
        return [result[0][0]]
    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")


@application.route('/deleteAlbum/<id>')
def delete_album(id=None):
    try:
        connection = mysql.connector.connect(host='127.0.0.1', database='angeline', user='root', password='Simon_256')
        cursor = connection.cursor()
        request = "DELETE FROM images WHERE page = %s"
        cursor.execute(request, (id,))
        connection.commit()
        request = "DELETE FROM pages WHERE id= %s"
        cursor.execute(request, (id,))
        connection.commit()
        shutil.rmtree('img/' + id)
        return 'Image supprimée avec succès!'
    except Exception as e:
        print(f"Failed with message: {str(e)}")
        response = flask.make_response(
            "Dataset screen display unsuccessful...", 403)
        return response


if __name__ == "__main__":
    application.run(debug=True, host="0.0.0.0", port=5000)
