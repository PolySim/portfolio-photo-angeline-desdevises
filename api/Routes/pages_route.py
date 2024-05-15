from flask import Blueprint

from api.Controllers.pages_controller import find_pages, update_page, delete_page, create_page, reorder_page

pages_bp = Blueprint('pages', __name__)


@pages_bp.route('/pages', methods=['GET'])
def pages():
    return find_pages()


@pages_bp.route('/pages/create', methods=['POST'])
def create():
    return create_page()


@pages_bp.route('/pages/update', methods=['PUT'])
def update():
    return update_page()


@pages_bp.route('/pages/delete', methods=['DELETE'])
def delete():
    return delete_page()


@pages_bp.route('/pages/reorder', methods=['PUT'])
def reorder():
    return reorder_page()
