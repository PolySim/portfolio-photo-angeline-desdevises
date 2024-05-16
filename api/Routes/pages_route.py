from flask import Blueprint

from api.Controllers.pages_controller import find_pages, find_page, update_page, delete_page, create_page, reorder_page

pages_bp = Blueprint('pages', __name__)


@pages_bp.route('/pages', methods=['GET'])
def pages():
    return find_pages()


@pages_bp.route('/pages/<report_id>', methods=['GET'])
def page(report_id=None):
    return find_page(report_id)


@pages_bp.route('/pages', methods=['POST'])
def create():
    return create_page()


@pages_bp.route('/pages/<report_id>', methods=['PUT'])
def update(report_id=None):
    return update_page(report_id)


@pages_bp.route('/pages/<report_id>', methods=['DELETE'])
def delete(report_id=None):
    return delete_page(report_id)


@pages_bp.route('/pages/reorder', methods=['PUT'])
def reorder():
    return reorder_page()
