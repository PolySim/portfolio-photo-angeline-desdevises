# this_file = "venv/bin/activate_this.py"
# exec(open(this_file).read(), {'__file__': this_file})
import os
import sys

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

from api.Routes.about_route import about_bp
from api.Routes.helloWorld_route import hello_world_bp
from api.Routes.images_route import images_bp
from api.Routes.pages_route import pages_bp

env_mode = 'dev'
# env_mode = 'prod'
env_file = f'.env.{env_mode}'
load_dotenv(env_file)

application = Flask(__name__)
CORS(application, supports_credentials=True)

HOST = os.getenv('DATABASE_HOST')
NAME = os.getenv('DATABASE_NAME')
USER = os.getenv('DATABASE_USER')
PASSWORD = os.getenv('DATABASE_PASSWORD')


def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)

    app.register_blueprint(hello_world_bp, url_prefix='/helloWorld')
    app.register_blueprint(about_bp, url_prefix='/api')
    app.register_blueprint(pages_bp, url_prefix='/api')
    app.register_blueprint(images_bp, url_prefix='/api')

    def add_response_headers(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,Cache-Control')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,DELETE,OPTIONS')
        return response

    return app


if __name__ == "__main__":
    application = create_app()
    if env_mode == 'local':
        application.run(debug=True, host="0.0.0.0", port=5066)
    else:
        application.run(host="0.0.0.0", port=5066)
