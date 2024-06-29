from flask import Blueprint

from api.Controllers.file_controller import send_image

file_bp = Blueprint('/', __name__)


@file_bp.route('/<folder>/<file>', methods=['GET'])
def send_image(folder=None, file=None):
    return send_image(folder, file)
