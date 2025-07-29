from flask import Flask, Blueprint , jsonify, request

student_bp = Blueprint('student',__name__)

@student_bp.route('/attendance/<studentid>', methods=['GET','OPTIONS'])
def get_attendance(studentid):
    if request.method == 'OPTIONS':
        return '', 200
    return jsonify({"attendance" : 100})


