from flask import send_file


def send_image(folder=None, filename=None):
    return send_file(f'../../front/dist/{folder}/{filename}')
