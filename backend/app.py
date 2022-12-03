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

app = Flask(__name__)
CORS(app, supports_credentials=True)

picFolder = os.path.join("./static")
app.config['UPLOAD_FOLDER'] = picFolder

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


@app.route('/')
def main():
    return render_template('build/index.html')

@app.route('/portfolio-photo-angeline-desdevises/static/<path>/<name>')
def static_file(path=None, name=None):
    return send_file("static/"+path+"/"+name)

@app.route('/favicon/<name>')
def favicon(name=None):
    return send_file("favicon/"+name)

@app.route('/<article>/favicon/<name>')
def favicon_in_article(article=None, name=None):
    return send_file("favicon/"+name)

@app.route('/<name>')
def refresh_app(name=None):
    return render_template('build/index.html')

@app.route('/<name>/<num>')
def refresh_app_reportage(name=None, num=None):
    return render_template('build/index.html')

@app.route('/hello')
#  Test Connection
def say_hello_world():
    return flask.jsonify({'result': "Hello Connected React World!!!"})

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        binaryData = file.read()
    return binaryData

def insertBLOB(photo, portfolio, page, number):
    print("Inserting BLOB into python_employee table")
    try:
        connection = mysql.connector.connect(host='portfolio-angeline-desdevises.csxzsuq5gl22.eu-west-3.rds.amazonaws.com',
                                             database='portfolioangeline',
                                             user='polysim',
                                             password='BaStA_2014!IsBaCk')

        cursor = connection.cursor()
        sql_insert_blob_query = """ INSERT INTO images
                          (img, portfolio, page, number) VALUES (%s,%s,%s,%s)"""

        empPicture = convertToBinaryData(photo)

        # Convert data into tuple format
        insert_blob_tuple = (empPicture, portfolio, page, number)
        result = cursor.execute(sql_insert_blob_query, insert_blob_tuple)
        connection.commit()
        print("Image and file inserted successfully as a BLOB into python_employee table", result)

    except mysql.connector.Error as error:
        print("Failed inserting BLOB data into MySQL table {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
            
@app.route('/image', methods=['GET'])
# Return image from Mysql DB
def get_images():
    try:
        num = (request.args.get('num'),)
        connection = mysql.connector.connect(host='portfolio-angeline-desdevises.csxzsuq5gl22.eu-west-3.rds.amazonaws.com',
                                             database='portfolioangeline',
                                             user='polysim',
                                             passwd='BaStA_2014!IsBaCk')
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = """SELECT img FROM images WHERE id = %s;"""
        cursor.execute(sql_requests, num)
        result = cursor.fetchall()
        response = flask.make_response(result[0][0])
        response.headers.set('Content-Type', 'image/jpg')
        return response
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
    
@app.route('/api/pages', methods=['GET'])
# Return reportage information
def get_pages_information():
    try:
        connection = mysql.connector.connect(host='portfolio-angeline-desdevises.csxzsuq5gl22.eu-west-3.rds.amazonaws.com',
                                             database='portfolioangeline',
                                             user='polysim',
                                             passwd='BaStA_2014!IsBaCk')
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = """SELECT * FROM pages WHERE (id != 1 AND id != 2 AND id != 6);"""
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

@app.route('/api/images', methods=['GET'])
# Return image information
def get_image_information():
    try:
        num = (request.args.get('num'),)
        connection = mysql.connector.connect(host='portfolio-angeline-desdevises.csxzsuq5gl22.eu-west-3.rds.amazonaws.com',
                                             database='portfolioangeline',
                                             user='polysim',
                                             passwd='BaStA_2014!IsBaCk')
        cursor = connection.cursor()
        # SELECT ALL images in one reportage 
        sql_requests = """SELECT id, portfolio FROM images WHERE page = %s ORDER BY number;"""
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

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
    # for i in range(1, 4):
    #     if i < 10:
    #         link = "D:\ANGELINE/portfolio2/0" + str(i) +".jpg"
    #     else:
    #         link = "D:/ANGELINE/belleile2/" + str(i) +".jpg"
    #     insertBLOB(link, False, 6, i)