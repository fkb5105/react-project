// Navigation.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'; 

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="burger-icon" onClick={toggleMenu}>&#9776;</div>
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/react-project">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/pages/resume">Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="/pages/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
