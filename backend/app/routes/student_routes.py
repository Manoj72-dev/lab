from flask import Flask, Blueprint , jsonify, request
from ..services.service_attendance import get_attendance

student_bp = Blueprint('student',__name__)

@student_bp.route('/attendance/<studentid>', methods=['GET','OPTIONS'])
def fetch_attendance(studentid):
    if request.method == 'OPTIONS':
        return '', 200
    data = get_attendance()
    return jsonify(data)


@student_bp.route('/attendance/<studentid>/<subjectCode>', methods=['GET','OPTIONS'])
def fetch_subjectattendance(studentid,subjectCode):
    if request.method == 'OPTIONS':
        return '', 200
    data = {
  "code": "CS301",
  "name": "Computer Networks",
  "faculty": "Dr. Ramesh",
  "total": 30,
  "attended": 24,
  "attendance": 80,
  "details": [
    {"date": "2025-07-01", "status": "P"},
    {"date": "2025-07-02", "status": "A"},
    {"date": "2025-07-03", "status": "P"}
  ]
}

    return jsonify(data)