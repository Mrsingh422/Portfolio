import React from 'react';
import './Projects.css'; // Create a separate CSS file for Projects styles

function Projects() {
  const projects = [
    { 
      title: 'Todo-list', 
      description: 'A task management app to keep track of your tasks.', 
      link: 'https://mrsingh422.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ferramentas_de_organiza%C3%A7%C3%A3o_e_produtividade.png',
      language: 'React.js' 
    },
    { 
      title: 'Weather App', 
      description: 'An app to display real-time weather information for your location.', 
      link: 'https://mrsingh422.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Weather_forecast_and_warning.jpg',
      language: 'React.js' 
    },
    { 
      title: 'Portfolio', 
      description: 'My personal portfolio showcasing my skills and projects.', 
      link: 'https://mrsingh422.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png',
      language: 'react+node js' 
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-div">
          {projects.map((project, index) => (
            <div className="project" key={index} style={{ backgroundImage: `url(${project.logo})` }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              <div className="language-tag">{project.language}</div> {/* Language Tag */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
