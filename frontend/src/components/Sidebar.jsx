import React from "react";
import {
  FaTachometerAlt,
  FaUserCircle,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaBook,
  FaSignOutAlt
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./component.css";

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    padding: "1rem",
    textDecoration: "none",
    fontWeight: isActive ? "700" : "500",
    color: "#fff",
    borderRadius: "1rem",
    background: isActive ? "#6a6b6cff" : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <div className="sidebars">
      <ul className="sidebar-list">
        <li>
          <NavLink to="/Profile" style={linkStyle}>
            <FaUserCircle />  Profile 
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" style={linkStyle}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Records" style={linkStyle}>
            <MdSchool /> Academic Records
          </NavLink>
        </li>
        <li>
          <NavLink to="/Attendance" style={linkStyle}>
            <FaCalendarCheck /> Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/fees" style={linkStyle}>
            <FaMoneyBillWave /> Fee Status
          </NavLink>
        </li>
        <li>
          <NavLink to="/Assignment" style={linkStyle}>
            <FaBook /> Assignments
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" style={linkStyle}>
            <FaSignOutAlt /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
