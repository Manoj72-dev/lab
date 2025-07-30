import React,{useState, useEffect} from 'react';

import './attendance.css'
function Attendance(){
    const [attendanceData, setAttendence] = useState([]);
    
    useEffect(()=>{
        const user = sessionStorage.getItem('student');
        const {studentid} = JSON.parse(user);
        const fetchAttendence = async ()=>{
            try{
                const res = await fetch(`http://localhost:5000/api/student/attendance/${studentid}`,{
                    method : 'GET',  
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                setAttendence(data);                
            }catch (err){
                console.error("failed to fetch attendence", err)
            }
        };
         fetchAttendence();
         
    },[])
    
    return(
        <div className='container'>
            <div className='table-container'>
                <table>
                <thead>
                    <tr>
                        <th> Subject Code </th>
                        <th> Subject </th>
                        <th> Faculty </th>
                        <th> Attendence </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(attendanceData).map(([code,info])=>(
                        <tr key={code}>
                            <td> {code} </td>
                            <td> {info.name} </td>
                            <td> {info.faculty} </td>
                            <td> {info.attendance} </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Attendance;