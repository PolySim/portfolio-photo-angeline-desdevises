from flask import Blueprint

from api.Controllers.file_controller import (
    send_html_file,
    send_html_file_index,
    send_assets_file,
    send_static_file,
    send_image)

file_bp = Blueprint('/', __name__)


@file_bp.route('/', methods=['GET'])
@file_bp.route('/contact', methods=['GET'])
@file_bp.route('/apropos', methods=['GET'])
@file_bp.route('/admin', methods=['GET'])
def html():
    return send_html_file()


@file_bp.route('/portfolio/<index>', methods=['GET'])
@file_bp.route('/admin/<index>', methods=['GET'])
def html_index(index):
    return send_html_file_index(index)


@file_bp.route('/assets/<file>', methods=['GET'])
def send_assert(file=None):
    return send_assets_file(file)


@file_bp.route('/static/<file>', methods=['GET'])
def send_static(file=None):
    return send_static_file(file)


@file_bp.route('/<folder>/<file>', methods=['GET'])
def send_image(folder=None, file=None):
    return send_image(folder, file)
