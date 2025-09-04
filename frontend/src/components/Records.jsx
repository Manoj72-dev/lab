import React, { useState, useEffect } from 'react';

function Records() {
    const [result ,setresult] = useState(null);
    useEffect(()=>{
        const fetchRecords = async () =>{
            try{
                const response = await fetch("/api/result/",{
                    method : "GET",
                    content : "JSON/application"
                });
                if(!response.ok) throw new Error("Failed to fetch result");
                const data = await response.json();
                setresult(data);
            }catch{
                console.error("Error fetching result:", error);
            }
        }
        fetchRecords();
    }, []);

    if(!result){
        return <div className="p-4 text-gray-600">Loading Records...</div>;
    }

    return (
        <div>
            result : {result.status}
        </div>
    );
}

export default Records;
