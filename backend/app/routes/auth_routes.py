from flask import Blueprint, request, jsonify, make_response
from ..services.servies_validation import student_validation
from ..services.service_profile import student_profile
auth_bp = Blueprint('auth',__name__)
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('studentId')
    password = data.get('password')
    
    if student_validation(username,password):
        res = {"message" : True}
        res1 = student_profile(username)
        return jsonify({**res,**res1})
        
    return jsonify({'message': False}), 401


