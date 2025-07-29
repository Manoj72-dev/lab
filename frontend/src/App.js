import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import FadeTransition from './components/FaddeTransition.jsx';
function App() {
  const [currentPage, setCurrentPage] = useState("login");
  
  const handleLoginSuccess = () => {
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setCurrentPage("login");
  };

  return (
    <div>
      {currentPage === "login" && (<FadeTransition> <LoginPage onLoginSuccess={handleLoginSuccess} /> </FadeTransition>)}
      {currentPage === "home" && (<FadeTransition> <HomePage onLogout={handleLogout} /> </FadeTransition>)}
    </div>
  );
}

export default App;
