import flask
from flask import request

from api.DB.get_information import create_connection


def get_information():
    try:
        connection = create_connection()
        cursor = connection.cursor()
        sql_requests = "SELECT information FROM personal_information WHERE id = 1 OR id = 2;"
        cursor.execute(sql_requests)
        result = cursor.fetchall()
        return flask.jsonify({"fr": result[0][0], "en": result[1][0]})
    except Exception as e:
        print(f"Get biography failed with message: {str(e)}")
        response = flask.make_response(
            "Biography screen display unsuccessful...", 403)
        return response


def update_biography():
    try:
        args = request.json
        connection = create_connection()
        cursor = connection.cursor()
        sql_request = "UPDATE personal_information SET information = %s WHERE id = 1;"
        cursor.execute(sql_request, (args['biography_fr'],))
        sql_request = "UPDATE personal_information SET information = %s WHERE id = 2;"
        cursor.execute(sql_request, (args['biography_us'],))
        connection.commit()
        return get_information()
    except Exception as e:
        print(f"Update biography failed with message: {str(e)}")
        response = flask.make_response(
            "Biography update unsuccessful...", 403)
        return response
