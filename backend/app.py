# this_file = "venv/bin/activate_this.py"
# exec(open(this_file).read(), {'__file__': this_file})

import mysql.connector
import flask
import os
import sys
from flask import Flask, request, send_file, render_template
from flask_cors import CORS
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
    return send_file("static/"+path+"/"+name)

@application.route('/favicon/<name>')
def favicon(name=None):
    return send_file("favicon/"+name)

@application.route('/<article>/favicon/<name>')
def favicon_in_article(article=None, name=None):
    return send_file("favicon/"+name)

@application.route('/<article>/e/favicon/<name>')
def favicon_in_article_e(article=None, name=None):
    return send_file("favicon/"+name)

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
        connection = mysql.connector.connect(host='zmdenlzpolysim.mysql.db', database='zmdenlzpolysim', user='zmdenlzpolysim', password='Simon256')
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
def createAlbum():
    pass

if __name__ == "__main__":
    application.run(debug=True, host="0.0.0.0", port=5000)