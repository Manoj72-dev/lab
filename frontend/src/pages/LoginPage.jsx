import React,{useState} from 'react';
import './login.css';
function LoginPage() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');   
    const [error, setError] = useState('');
    
    const handleLogin = (e) =>{
        e.preventDefault();
        if(studentId === '220112460' && password === '@Manoj000'){
            alert('Login successful!');
        }
        else {
            setError('Invalid Student ID or Password');
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
                        <button type="submit" >Login</button>
                    </form>
                </div>
            </div>

            <footer className="login-footer">
                <p>© 2023 Your Company</p>
            </footer>
        </div>
    )
}

export default LoginPage;