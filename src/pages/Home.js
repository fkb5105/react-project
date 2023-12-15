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
        Welcome to my personal portfolio website! In this website you will be able to visit my Resume and some of my work. You will find my contact information at the top of my Resume. If you have any questions don't hesitate to reach out.
      </p>
    </div>
  );
};

export default Home;
