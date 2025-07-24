import React from 'react';
import './component.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className='nav-items'>
                <li> Dashboard </li>
                <li> Academic Records</li>
                <li> Attendance </li>
                <li> Fee Status </li>
                <li> Assignments</li>
                <li> Logout </li>
            </ul>
        </nav>
    )
}

export default Sidebar;