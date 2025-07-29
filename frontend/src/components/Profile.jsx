import { useState, useEffect } from "react";

function Profile(){
    const [profile,setprofile] = useState(null)
    useEffect(()=>{
        const userData = sessionStorage.getItem('student');
        if(userData){
            setprofile(JSON.parse(userData));
            
        }

    },[])

    if(!profile){
        return (<div> Loading..... </div>)
    }
    console.log(profile);
    return(
        <div className="profile-container">
            <div className="img-box">
                <img src="" alt=""  />
                <div className="box"> Name: {profile.Name} </div>
                <div className="box"> Student ID: {profile.Studentid} </div>
                <div className="box"> University Roll.no: {profile.uniRollno} </div>
            </div>
            <div className="info-box">
                <div className="box"> Enrollment.no: {profile.Enrollmentno} </div>
                <div className="box"> Father Name: {profile.FatherName} </div>
                <div className="box"> MotherName: {profile.MotherName} </div>
                <div className="box"> D.O.B: {profile.dob} </div>
                <div className="box"> Email: {profile.Email} </div>
                <div className="box"> course: {profile.Course} </div>
                <div className="box"> Branch: {profile.branch} </div>
                <div className="box"> Specialization: {profile.Specialization} </div>
                <div className="box"> Semester: {profile.sem} </div>
                <div className="box"> Section: {profile.Section} </div>
                <div className="box"> Roll.no: {profile.Rollno} </div>

                
            </div>
        </div>
    )
}

export default Profile;