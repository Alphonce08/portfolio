import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Python (Django REST)', 'Node.js']
    },
    {
      title: 'Frontend Development',
      skills: ['HTML','CSS', 'Python','Javascript','React JS']
    },
    {
      title: 'API Development & Integration',
      skills: ['RESTful APIs', 'Payment Gateways']
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