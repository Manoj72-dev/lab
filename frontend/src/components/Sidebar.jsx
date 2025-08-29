import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { SlLogout, SlSettings } from "react-icons/sl";
import { BsLayoutSidebar } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { LuNotebookPen } from "react-icons/lu";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <RiDashboardHorizontalLine />, path: "/home" },
    { name: "Profile", icon: <CgProfile />, path: "/home/profile" },
    { name: "Academic Records", icon: <HiOutlineAcademicCap />, path: "/home/records" },
    { name: "Attendance", icon: <GoCalendar />, path: "/home/attendance" },
    { name: "Fee Status", icon: <LiaMoneyCheckAltSolid />, path: "/home/fees" },
    { name: "Assignments", icon: <LuNotebookPen />, path: "/home/assignment" },
  ];

  return (
    <div
      className={`h-screen font-bold bg-gray-700 text-white flex flex-col transition-[width] duration-300 overflow-hidden ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex border-b items-center p-4 gap-3">
        <span
          className={`text-3xl transition-opacity duration-300 overflow-hidden whitespace-nowrap ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          Student ERP
        </span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-xl ml-auto rounded-lg p-2 flex-shrink-0 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-600"
        >
          <BsLayoutSidebar />
        </button>
      </div>

      
      <ul className="mt-4 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              end={item.path === "/home"}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 ml-3 mr-4 rounded-md hover:bg-gray-600 hover:scale-105 transition-colors ${
                  isActive ? "bg-gray-600" : ""
                }`
              }
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <span
                className={`text-lg transition-opacity duration-300 overflow-hidden whitespace-nowrap ${
                  isCollapsed ? "opacity-0" : "opacity-100"
                }`}
              >
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

     
      <div className="mt-auto bg-gray-700 border-t p-2 flex flex-col gap-2">
        <NavLink
          to="/home/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 ml-1 mr-2 rounded-md hover:bg-gray-600 hover:scale-105 transition-colors ${
              isActive ? "bg-gray-600" : ""
            }`
          }
        >
          <span className="text-2xl flex-shrink-0">
            <SlSettings />
          </span>
          <span
            className={`text-lg font-bold transition-opacity duration-300 overflow-hidden whitespace-nowrap ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            Settings
          </span>
        </NavLink>

        <NavLink
          to="/home/logout"
          className="flex items-center gap-3 p-3 ml-1 mr-2 rounded-md hover:bg-gray-600 hover:scale-1 transition-colors"
        >
          <span className="text-2xl flex-shrink-0">
            <SlLogout />
          </span>
          <span
            className={`text-lg font-bold transition-opacity duration-300 overflow-hidden whitespace-nowrap ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            Logout
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
