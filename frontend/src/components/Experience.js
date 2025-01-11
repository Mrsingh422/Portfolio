// src/components/Experience.js
import React from 'react';
import './Experience.css'; // Create a separate CSS file for Experience styles

function Experience() {
  const experiences = [
    {
      title: 'MERN-STACK Internship',
      company: 'Omninos Solutions',
      duration: 'Jul 2024 - Present',
      description: 'Provided web development services, building interactive and user-friendly applications using modern technologies.'
    },
    {
      title: 'React Js Internship',
      company: 'Neo-Crew Technology',
      duration: 'Feb 2024 - May 2024',
      description: 'Completed a React Js internship, developing responsive and efficient web applications.'
    },
    {
      title: 'Computer Operator',
      company: 'AISECT Institute',
      duration: 'Jan 2023 - Jan 2024',
      description: 'Worked as a computer operator, ensuring data entry accuracy and maintaining computer systems.'
    },
   
    
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2>Experiences</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience" key={index}>
              <h3>{exp.title}</h3>
              {exp.company && <p><strong>Company:</strong> {exp.company}</p>}
              <p><strong>Duration:</strong> {exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
