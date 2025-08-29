import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Attendance from "../components/Attendance";
import Assignment from "../components/Assignment";
import Fees from "../components/Fees";
import Records from "../components/Records";
import Logout from "../components/Logout";

import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function AnimatedPage({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

function HomePage() {
  const location = useLocation();

  const pageTitles = {
    "/home": "Dashboard",
    "/home/profile": "Profile",
    "/home/attendance": "Attendance",
    "/home/assignment": "Assignments",
    "/home/fees": "Fee Status",
    "/home/records": "Academic Records",
    "/home/logout": "Logout",
  };

  const currentTitle = pageTitles[location.pathname] || "";

  return (
    <div className="flex h-screen">
      <Sidebar />

        <div className="flex-1 flex flex-col pt-3 bg-gray-100 overflow-auto">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 shadow-sm">
    
                <AnimatePresence mode="wait">
                    <AnimatedPage key={`header-${location.pathname}`}>
                        <span className="text-3xl font-bold text-gray-700 truncate">
                            {currentTitle}
                        </span>
                    </AnimatedPage>
                </AnimatePresence>

    
                <div className="flex items-center gap-4">
    
                    <div className="flex items-center gap-2 text-gray-700 font-medium ">
                        <span className="truncate">Manoj Singh Chauhan</span>
                        <CgProfile className="text-3xl flex-shrink-0" />
                    </div>
            
                    <button className="relative p-2 rounded-md hover:bg-gray-200 transition-transform duration-200 hover:scale-105">
                        <IoNotificationsOutline className="text-3xl text-indigo-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
                    </button>
                </div>
            </div>
            
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                    index
                    element={
                        <AnimatedPage key="dashboard" delay={0.05}>
                            <Dashboard />
                        </AnimatedPage>
                    }
                    />
                    <Route
                        path="profile"
                        element={
                        <AnimatedPage key="profile" delay={0.05}>
                            <Profile />
                        </AnimatedPage>
                        }
                    />
                    <Route
                    path="attendance"
                    element={
                        <AnimatedPage key="attendance" delay={0.05}>
                            <Attendance />
                        </AnimatedPage>
                    }
                    />
                    <Route
                    path="assignment"
                    element={
                        <AnimatedPage key="assignment" delay={0.05}>
                        <Assignment />
                        </AnimatedPage>
                    }
                    />
                    <Route
                    path="fees"
                    element={
                        <AnimatedPage key="fees" delay={0.05}>
                        <Fees />
                        </AnimatedPage>
                    }
                    />
                    <Route
                    path="records"
                    element={
                        <AnimatedPage key="records" delay={0.05}>
                        <Records />
                        </AnimatedPage>
                    }
                    />
                    <Route
                    path="logout"
                    element={
                        <AnimatedPage key="logout" delay={0.05}>
                        <Logout />
                        </AnimatedPage>
                    }
                    />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </AnimatePresence>
        </div>
    </div>
  );
}

export default HomePage;
