// Resume.js
import React from 'react';
import '../styles/resume.css';
import { resumeData } from '../components/Data';

const Resume = () => {
  const { education, experience, projects, skills } = resumeData;

  return (
    <div className="resume-container">
      <h1>Felipe Bassi</h1>
      <section className='contact'>
        <h2>Contact Info</h2>
        <div>
          <p><b>Email</b>: 20felipe.bassi@gmail.com</p>
          <p><b>Phone</b>: +1 (814)812-5604</p>
          <p><b>LinkedIn</b>: <a href='www.linkedin.com/in/felipe-bassi' target="_blank" rel="noopener noreferrer">www.linkedin.com/in/felipe-bassi</a></p>
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        {Object.entries(education).map(([category, items]) => (
          <div key={category}>
            <p><b>{category}</b>: {items.join(', ')}</p>
          </div>
        ))}
      </section>

      <section className="experience">
        <h2>Information Systems Development Experience</h2>
        {experience.map((job) => (
          <div key={job.title}>
            <h3>{job.title}</h3>
            <p>{job.date}</p>
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="projects">
        <h2>Relevant Projects</h2>
        {projects.map((project) => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.date}</p>
            <ul>
              {project.responsibilities.map((detail, index) => (
              <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <p><b>{category}</b>: {items.join(', ')}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;