from flask import Blueprint,jsonify,Flask,request,make_response
import jwt
import datetime

auth_bp = Blueprint('auth',__name__)

@auth_bp.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    userid = data.get('studentId')
    password = data.get("password")

    if userid == 1234 and password == 1234:
        token = jwt.encode(
            {'username': 'username', 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours= 1)},
            algorithm='HS256'
        )
        resp = make_response(jsonify({'msg':True}))
        resp.set_cookie(
            key='token',
            value=token,
            httponly=True,
            secure=False,
            samesite='lax',
            max_age=3600
        )
        return resp

    return jsonify({'message': False})