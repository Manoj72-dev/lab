import React, { useState, useEffect } from 'react';

function Attendance() {
    const [attendance ,setattendance] = useState(null);
    useEffect(()=>{
        const fetchattendance = async () =>{
            try{
                const response = await fetch("/api/attendance/",{
                    method : "GET",
                    content : "JSON/application"
                });
                if(!response.ok) throw new Error("Failed to fetch attendance");
                const data = await response.json();
                setattendance(data);
            }catch{
                console.error("Error fetching attendance:", error);
            }
        }
        fetchattendance();
    }, []);

    if(!attendance){
        return <div className="p-4 text-gray-600">Loading attendance...</div>;
    }

    return (
        <div>
            attendance : {attendance.attendance}
        </div>
    );
}

export default Attendance;
