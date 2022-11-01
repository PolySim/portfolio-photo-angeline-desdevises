from unittest import result
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
        connection = mysql.connector.connect(host='127.0.0.1',
                                             database='portfolioangeline',
                                             user='root',
                                             password='root')

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
        connection = mysql.connector.connect(host='127.0.0.1',
                                             database='portfolioangeline',
                                             user='root',
                                             passwd='root')
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
    
@app.route('/api/pages', methods=['GET'])
# Return reportage information
def get_pages_information():
    try:
        connection = mysql.connector.connect(host='127.0.0.1',
                                             database='portfolioangeline',
                                             user='root',
                                             passwd='root')
        cursor = connection.cursor()
        # SELECT ALL reportage without portrait and publication
        sql_requests = """SELECT * FROM pages WHERE (id != 1 AND id != 2);"""
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
        connection = mysql.connector.connect(host='127.0.0.1',
                                             database='portfolioangeline',
                                             user='root',
                                             passwd='root')
        cursor = connection.cursor()
        # SELECT ALL images in one reportage 
        sql_requests = """SELECT id, portfolio, number FROM images WHERE page = %s;"""
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
    app.run(debug=True, host="0.0.0.0", port=6789)
    # for i in range(1, 26):
    #     if i < 10:
    #         link = "D:/ANGELINE/Raouche/00" + str(i) +".jpg"
    #     else:
    #         link = "D:/ANGELINE/Raouche/0" + str(i) +".jpg"
    #     insertBLOB(link, False, 3, i)