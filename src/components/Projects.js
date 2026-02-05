import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Cloudpay, Pesabook, Gigpay & Happyfans',
      description: 'Developed Frontend, Backend, RESTful APIs, Documentations and integrated third party payment gateways.',
      technologies: ['PHP/Laravel', 'REST APIs', 'Payment Gateways', 'GCP','Digital Ocean']
    },
    {
      name: 'Workpay HR System',
      description: 'RESTful APIs Development, Documentation, Code Review, DB and Server Maintenance',
      technologies: ['Node.js', 'React', 'AWS', 'MySQL']
    },
    {
      name: 'Bluewave Insurance System',
      description: 'Led development of insurance policy systems with complex backend architectures',
      technologies: ['PHP', 'MySQL', 'Microservices', 'API Integration']
    },
    {
      name: 'KMTC Admission Application & Placement System',
      description: 'Fullstack development of admission and placement system',
      technologies: ['Fullstack', 'Database Design', 'System Architecture']
    },
    {
      name: 'TozzaPlus HRM System',
      description: 'Designed and developed core payroll and attendance modules',
      technologies: ['PHP/CodeIgniter', 'Payroll System', 'Leave Management']
    },
    {
      name: 'UreadyAfrica - Mentorship System',
      description: 'Development of mentorship platform',
      technologies: ['Web Application', 'Mentorship Platform', 'User Management']
    }
    ];
    
    const personalProjects = [
        {
            name: 'Income & Expense Tracker',
            description: 'A web application to track personal income, expenses & budget with data visualization features.',
            technologies: ['Laravel', 'React', 'Node.js', 'Chart.js', 'MySQL'],
            link:'#'
        },
        {
            name: 'Paid Content Distribution Platform',
            description: 'A full-featured content platform with user authentication, content management for creators where each viewer pays to access the content link',
            technologies: ['PHP Laravel', 'REST APIs', 'PostgreSQL', 'Bootstrap', 'Mpesa Integration'],
            link:'#'
        },
        {
            name: 'Bulk SMS & WhatsApp Business API Integration Service',
            description: 'A service to integrate WhatsApp Business API for sending notifications, alerts, and marketing messages to customers.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'WhatsApp Business API'],
            link:'#'
        },
        {
            name:'Event Ticketing Platform',
            description:'A web application for event organizers to create and manage events, sell tickets online, and track attendance.',
            technologies:['Laravel', 'React', 'Stripe API','Daraja API', 'PostgreSQL'],
            link:'#'
        },

        {
            name:'Procurement Tracking System',
            description:'A system to manage and track procurement requests, approvals, and vendor management for organizations.',
            technologies:['Laravel', 'RESTsul Api', 'MySQL', 'Bootstrap'],
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