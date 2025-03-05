from flask import Blueprint

from api.Controllers.images_controller import (
    find_images,
    send_image,
    update_description,
    upload_image,
    delete_image,
    reorder_images, send_image_blur
)

images_bp = Blueprint('images', __name__)


@images_bp.route('/images', methods=['GET'])
def images():
    return find_images()


@images_bp.route('/images/<name>', methods=['GET'])
def image(name):
    return send_image(name)


@images_bp.route('/images/<name>/blur', methods=['GET'])
def image_blur(name):
    return send_image_blur(name)


@images_bp.route('/images/update_description', methods=['PUT', 'POST'])
def description():
    return update_description()


@images_bp.route('/images/upload_image/<report_id>', methods=['POST'])
def upload(report_id):
    return upload_image(report_id)


@images_bp.route('/images/delete_image', methods=['DELETE'])
def delete():
    return delete_image()


@images_bp.route('/images/reorder', methods=['PUT'])
def reorder():
    return reorder_images()
