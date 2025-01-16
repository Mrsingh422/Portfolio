// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Create a separate CSS file for Skills styles

const skillLogos = {
  'HTML5': 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  'CSS3': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'React Js': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'MongoDB': 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
  'Express Js': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  'JQuery': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg',
  'Typing-35wpm': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Breathe-gnome-keybinding-properties.svg',
  'MySQL': 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
  'Redux': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
  'MERN': 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg',
  'Figma': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  'Netlify': 'https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg',
  'Bootstrap': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
  'Photoshop': 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',


};

function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React Js', 'Node.js',
    'MongoDB', 'Express Js', 'JQuery', 'Typing-35wpm', 'MySQL', 'Redux', 'MERN', 'Tailwind CSS','Figma','Netlify','Bootstrap','Photoshop'
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skillLogos[skill]} alt={skill} className="skill-logo" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
