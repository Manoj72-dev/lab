from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth',__name__)
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('studentId')
    password = data.get('password')
    print(username)
    print(password)
    if username == "220112460" and password == "@Manoj000":
        return jsonify({'message':True}), 200
    return jsonify({'message': False}), 401