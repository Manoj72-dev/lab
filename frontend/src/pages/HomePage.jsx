import React from 'react'
import './homepage.css';
import { FaUserAlt } from 'react-icons/fa';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard  from '../components/dashboard';
import Notif from '../components/Notif';
import Fees from '../components/Fees';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Attendance from '../components/Attendance';
import Assignment from '../components/Assignment';
import Records from '../components/Records';
import Logout from '../components/logout';
function HomePage({onLogout}) {
    return (
        <div className="homepage">
            <Router>
            <div className='sidebar'>
                <header>Student ERP</header>
                <hr color='gray'/>
                <Sidebar/>
            </div>
            <div className='main-content'>
                <div className='cards'>
                    <div className='header'>
                    
                    </div>
                    <hr />
                    <Routes>
                        <Route path='/dashboard' element={ <Dashboard/>} />
                        <Route path='/Fees' element={ <Fees/> } />
                        <Route path='/Profile' element={<Profile/>} />
                        <Route path='/Attendance' element={<Attendance/>} />
                        <Route path='/Assignment' element={<Assignment/>} />
                        <Route path='/Records' element={<Records/>} />
                        <Route path='/logout' element={<Logout onLogout={onLogout}/>} />
                        <Route path='*' element={<Profile/>} />
                    </Routes>
                    <Notif/>
                </div>
            </div>
            </Router>
        </div>
    )
}

export default HomePage;