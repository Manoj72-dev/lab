from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.auth_routes import auth_bp 
    app.register_blueprint(auth_bp, url_prefix ='/api/auth')
    return app