import React from 'react';

const Experience = () => {
  const experiences = [
   {
      period: 'Jan 2025 - To-Date',
      title: 'Casual Worker',
      company: 'Central Bank of Kenya',
      responsibilities: [
        'General cleaning',
        'Cash handling support',
        'Team Collaboration',
        'Operational Support',
        'Confidentiality and Integrity',
        'Adherence to Procedures'
      ]
    },

    {
      period: 'Oct 2022 - March 2023',
      title: 'Annotation',
      company: 'Remotask',
      responsibilities: [
        'Task Execution & Performance',
        'Training and Onboarding Responsibilities',
        'Quality Assurance',
        'Legal & Professional Obligations'
      ]
    }
  ];

  return (
    <section className="section experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
