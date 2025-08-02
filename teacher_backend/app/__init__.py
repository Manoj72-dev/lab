from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app,supports_credentials=True, origins=['http://localhost:3000'])

    from .services.login import auth_bp
    app.register_blueprint(auth_bp, url_prefix = '/api/login')
    return app