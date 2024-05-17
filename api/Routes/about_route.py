from flask import Blueprint

from api.Controllers.about_controller import get_information, update_biography

about_bp = Blueprint('about', __name__)


@about_bp.route('/about', methods=['GET'])
def about():
    return get_information()


@about_bp.route('/about', methods=['PUT'])
def update_about():
    return update_biography()
