import React, { useState, useEffect } from 'react';

function Assignment() {
    const [assignment ,setassingment] = useState(null);
    useEffect(()=>{
        const fetchassignment = async () =>{
            try{
                const response = await fetch("/api/assignment/",{
                    method : "GET",
                    content : "JSON/application"
                });
                if(!response.ok) throw new Error("Failed to fetch assignment");
                const data = await response.json();
                setassingment(data);
            }catch{
                console.error("Error fetching assignment:", error);
            }
        }
        fetchassignment();
    }, []);

    if(!assignment){
        return <div className="p-4 text-gray-600">Loading assignment...</div>;
    }

    return (
        <div>
            assignment : {assignment.count}
        </div>
    );
}

export default Assignment;
