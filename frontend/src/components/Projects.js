import React from 'react';
import './Projects.css'; // Create a separate CSS file for Projects styles

function Projects() {
  const projects = [
    { 
      title: 'Tik-Tak-Toe', 
      description: 'A game for two players, X and O, who take turns marking the spaces in a 3x3 grid.', 
      link: 'https://mrsingh-tik-tak-toe.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ferramentas_de_organiza%C3%A7%C3%A3o_e_produtividade.png',
      language: 'React.js' 
    },
    { 
      title: 'Weather App', 
      description: 'An app to display real-time weather information for your location.', 
      link: 'https://mrsingh-weather.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Weather_forecast_and_warning.jpg',
      language: 'React.js' 
    },
    { 
      title: 'Portfolio', 
      description: 'My personal portfolio showcasing my skills and projects.', 
      link: 'https://mrsingh422.netlify.app/', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png',
      language: 'react.js+node.js' 
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
