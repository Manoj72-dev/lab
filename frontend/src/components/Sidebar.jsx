import React from "react";
import { NavLink } from "react-router-dom";
import './component.css';
const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "10px 20px",
    textDecoration: "none",
    color: "#333",
    background: isActive ? "#e0e0e0" : "transparent",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div className="sidebar">
      <ul>
        <li>  <NavLink to="/Profile" style={linkStyle}>Profile</NavLink>  </li>
        <li>  <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>  </li>
        <li>  Attendance  </li>
        <li>  <NavLink to="/Fees" style={linkStyle}> Fee Status </NavLink>  </li>
        <li>  Assignments </li>
        <li>  Logout </li>
      </ul>
    </div>
  );
};

export default Sidebar;
