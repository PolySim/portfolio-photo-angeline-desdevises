import os

import mysql.connector


def get_information():
    return {
        "HOST": os.getenv('DATABASE_HOST'),
        "NAME": os.getenv('DATABASE_NAME'),
        "USER": os.getenv('DATABASE_USER'),
        "PASSWORD": os.getenv('DATABASE_PASSWORD'),
    }


def create_connection():
    information = get_information()
    return mysql.connector.connect(host=information['HOST'], database=information['NAME'], user=information['USER'],
                                   password=information['PASSWORD'])
