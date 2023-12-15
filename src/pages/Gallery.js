// Gallery.js
import React from 'react';
import { galleryData } from '../components/Data';
import '../styles/gallery.css'; 

const Gallery = () => {
  const { projects } = galleryData;

  return (
    <div className="gallery-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={`Project ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
