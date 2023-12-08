// Home.js
import React from 'react';
import '../styles/Home.css';
import profilePic from "../assets/profilePic.png"

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={profilePic}
        alt="Felipe Bassi"
        className="profile-image"
      />
      <h1 className="profile-name">Felipe Bassi</h1>
      <p className="titles">
        <span>Digital Media, Arts & Technology Student | </span>
        <span>Data Visualization Technician</span>
      </p>
      <p className="profile-description">
        Welcome to my personal portfolio website! Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default Home;
