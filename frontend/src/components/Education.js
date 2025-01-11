// src/components/Education.js
import React from 'react';
import './Education.css'; // Create a separate CSS file for Education styles

function Education() {
  const educationList = [
    'Diploma in Computer Application - CV Raman University',
    'B.Tech in Civil - Himachal Pradesh Technical University',
    'Intermediate - HPBOSE Dharamshala',
  ];

  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        <ul>
          {educationList.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
