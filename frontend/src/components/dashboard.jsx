import  { useState, useEffect } from 'react'

function Dashboard(){
    const [dashboard , setdashboard] = useState(null);
    useEffect(()=> {
        const fetchdashboard = async () => {
            try{
                const response = await fetch("/api/dashboard/",{
                    method: "GET",
                    headers: { "Content-Type": "application/json"}
                });
                if(!response.ok) throw new Error("Failed to fetch dashboard");
                const data = await response.json();
                setdashboard(data);
            }catch (error){
                console.error("Error fetching dashboard:", error);
            }
        };
        fetchdashboard();
    }, []);

    if(!dashboard){
        return <div className="p-4 text-gray-600">Loading dashboard...</div>;
    }

    return (
        <div>
            Cgpa : {dashboard.cgpa}
        </div>
    );
}

export default Dashboard; 