import React from 'react';

const Projects = () => {
  const projects = [
  
  
    ];
    
    const personalProjects = [
        {
            name: 'Income & Expense Tracker',
            description: 'An android application to track personal income, expenses & budget with data visualization features.',
            technologies: ['Kotlin',],
            link:'#'
        },
        {
            name: 'Fashion project',
            description: 'An online platform used in marketing industry to sell cloth, electronic and jewellery',
            technologies: ['Python Django', 'REST APIs', 'PostgreSQL', 'Bootstrap',],
            link:'#'
      
         }
    ];

  return (
    <section className="section projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
            </div>
            <div className="project-body">
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
        <h2 className="section-title">Personal Projects</h2>
      <div className="projects-grid">
        {personalProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
            </div>
            <div className="project-body">
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
                <div>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;