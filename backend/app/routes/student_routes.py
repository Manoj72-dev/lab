from flask import Flask, Blueprint , jsonify, request
from ..services.service_attendance import get_attendance

student_bp = Blueprint('student',__name__)

@student_bp.route('/attendance/<studentid>', methods=['GET','OPTIONS'])
def fetch_attendance(studentid):
    if request.method == 'OPTIONS':
        return '', 200
    data = get_attendance()
    print(data)
    return jsonify(data)


