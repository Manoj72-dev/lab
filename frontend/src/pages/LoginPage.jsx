import React,{useState} from 'react';
import './login.css';
function LoginPage({onLoginSuccess}) {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');   
    const [error, setError] = useState('');
    
    const handleLogin = async(e) =>{
        e.preventDefault()
        try{
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method:'POST',
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify({studentId,password})
            });
            const check = await response.json();
            
            if (response.ok & check.message){
                sessionStorage.setItem("student",JSON.stringify(check)) 
                onLoginSuccess();
            }
            else{
                setPassword('')
                setStudentId('')
                setError("Invalid studentId or Password");
            }
        }catch{
            setPassword('')
            setStudentId('')
            setError("server error")
        }
    }



    return (
        <div className="login-page">
            <header className="login-header">
            </header>
            <div className="login-form-wrapper">
                <div className="login-form">
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <label>
                            Student ID:
                            <input type="number"  value={studentId} onChange={(e)=> {setStudentId(e.target.value); setError('')}} required/>
                        </label>
                        <label>
                            Password:
                            <input type="password" value={password} onChange = {(e)=> setPassword(e.target.value)} required/>
                        </label>
                        {error && <p style={{color:'red' , fontSize:'0.9rem'}}>{error}</p>}
                        <button type="submit" disabled={!studentId || !password}>Login</button>
                    </form>
                </div>
            </div>

            <footer className="login-footer">
                <p>© 2025 My Company</p>
            </footer>
        </div>
    )
}

export default LoginPage;