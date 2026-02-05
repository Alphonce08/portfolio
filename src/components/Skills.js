import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['PHP (Vanilla, Laravel, CodeIgniter)', 'Python (Django REST)', 'Node.js']
    },
    {
      title: 'Frontend Development',
      skills: ['HTML','CSS','Javascript','React JS', 'Vue.js']
    },
    {
      title: 'API Development & Integration',
      skills: ['RESTful APIs', 'Payment Gateways', 'Accounting Software(Quickbooks,WaveApps)','WhatsApp Business API', 'SMS APIs']
    },
    {
      title: 'Database Management',
      skills: ['MySQL', 'PostgreSQL','MsSQL Server', 'Database Schema Design']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Digital Ocean']
    },
    {
      title: 'Version Control & CI/CD',
      skills: ['Git', 'CI/CD Pipelines', 'Jenkins', 'Dockerfile']
    },
    {
      title: 'Methodologies',
      skills: ['Agile & Scrum', 'Microservices Architecture', 'Event-driven Design','Data-driven Development']
    },
    {
      title: 'Testing',
      skills: ['Unit Testing', 'Functional Testing', 'Test-Driven Development (TDD)']
    }
  ];

  return (
    <section className="section skills">
      <h2 className="section-title">Core Competencies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;