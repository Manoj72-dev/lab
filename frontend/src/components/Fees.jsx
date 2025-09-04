import React, { useState, useEffect } from 'react';

function Fees() {
    const [Fee ,setFee] = useState(null);
    useEffect(()=>{
        const fetchFees = async () =>{
            try{
                const response = await fetch("/api/Fees/",{
                    method : "GET",
                    content : "JSON/application"
                });
                if(!response.ok) throw new Error("Failed to fetch Fees");
                const data = await response.json();
                setFee(data);
            }catch{
                console.error("Error fetching Fees:", error);
            }
        }
        fetchFees();
    }, []);

    if(!Fee){
        return <div className="p-4 text-gray-600">Loading Fees...</div>;
    }

    return (
        <div>
            Fees : {Fee.amount}
        </div>
    );
}

export default Fees;
