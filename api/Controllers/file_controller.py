from flask import send_file


def send_html_file():
    return send_file('../../front/dist/index.html')


def send_html_file_index(index=None):
    return send_file('../../front/dist/index.html')


def send_assets_file(filename=None):
    return send_file(f'../../front/dist/assets/{filename}')


def send_static_file(filename=None):
    return send_file(f'../../front/dist/static/{filename}')


def send_image(folder=None, filename=None):
    return send_file(f'../../front/dist/{folder}/{filename}')
