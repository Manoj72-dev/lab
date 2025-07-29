import {useState, useEffect} from 'react';
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
        <div>
            {attendanceData.attendance}
        </div>
    )
}

export default Attendance;