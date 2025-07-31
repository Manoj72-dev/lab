import React, { useState, useEffect } from 'react';
import './attendance.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Attendance() {
    const [attendanceData, setAttendance] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);

    const user = JSON.parse(sessionStorage.getItem('student'));
    const studentid = user?.studentid;

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/student/attendance/${studentid}`);
                const data = await res.json();
                setAttendance(data);
            } catch (err) {
                console.error("Failed to fetch attendance", err);
            }
        };
        fetchAttendance();
    }, [studentid]);

    const fetchSubjectAttendance = async (code) => {
        setSelectedSubject(null);
        try {
            const res = await fetch(`http://localhost:5000/api/student/attendance/${studentid}/${code}`);
            const data = await res.json();
            setSelectedSubject(data);
        } catch (err) {
            console.error("Failed to fetch subject attendance", err);
        }
    };

    return (
        <div className='container'>
            <div className='table-container'>
                <table className='attendance-table'>
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject</th>
                            <th>Faculty</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(attendanceData).map(([code, info]) => (
                            <tr key={code} onClick={() => fetchSubjectAttendance(code)}>
                                <td>{code}</td>
                                <td>{info.name}</td>
                                <td>{info.faculty}</td>
                                <td>{info.attendance}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="subject-card-container">
                {selectedSubject ? (
                    <SubjectCard subject={selectedSubject} />
                ) : (
                    <p className='subject-placeholder'>Click a subject to view details</p>
                )}
            </div>
        </div>
    );
}

function SubjectCard({ subject }) {
    return (
        <div className='subject-card'>
            <h2>{subject.name}</h2>
            <p><strong>Code:</strong> {subject.code}</p>
            <p><strong>Faculty:</strong> {subject.faculty}</p>
            <p><strong>Total Classes:</strong> {subject.total}</p>
            <p><strong>Attended:</strong> {subject.attended}</p>
            <p><strong>Attendance:</strong> {subject.attendance}%</p>

            {/* Optional: prepare for calendar */}
            {subject.details && (
                <div className='attendance-detail'>
                    <h4>Session Log:</h4>
                    <ul>
                        {subject.details.map((session, index) => (
                            <li key={index}>
                                {session.date} - {session.status === 'P' ? '✔️ Present' : '❌ Absent'}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
function SubjectCalendar({ subject }) {
    const attendanceMap = {};
    subject.details?.forEach(({ date, status }) => {
        attendanceMap[date] = status;
    });

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toISOString().split('T')[0];
            if (attendanceMap[formattedDate] === 'P') return 'present';
            if (attendanceMap[formattedDate] === 'A') return 'absent';
        }
        return null;
    };

    return (
        <div className='calendar-card'>
            <h2>{subject.name} - {subject.attendance}%</h2>
            <Calendar
                tileClassName={tileClassName}
                calendarType='US'
                defaultView='month'
            />
        </div>
    );
}

export default Attendance;
