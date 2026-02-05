import React from 'react';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      period: 'Jan 2023 - Dec 2025',
      institution: 'eMobilis Technology Training Institude ',
      degree: 'Diploma in Information Technology',
      details: 'Second Class Honors - Upper Division'
    },
    {
      icon: <FaSchool />,
      period: '2017 - 2002',
      institution: 'Motiret Secondary School',
      degree: 'Kenya Certificate of Secondary Education (KCSE)',
      details: 'Grade: C'
    },
    {
      icon: <FaBook />,
      period: '2007 - 2016',
      institution: 'Chesegem Primary School',
      degree: 'Kenya Certificate of Primary Education (KCPE)',
      details: 'Score: 291 out of 500'
    }
  ];

  return (
    <section className="section education">
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-icon">{edu.icon}</div>
          <div className="education-details">
            <h3>{edu.institution}</h3>
            <p><strong>{edu.degree}</strong></p>
            <p>{edu.period}</p>
            <p>{edu.details}</p>
          </div>
        </div>
      ))}
      <div className="certifications">
        <h3 style={{ marginTop: '2rem', color: '#1e3c72' }}>Certifications & Training</h3>
        <p>• Google Cloud Fundamentals (In Progress)</p>
      </div>
      <div className="interests">
        <h3 style={{ marginTop: '2rem', color: '#1e3c72' }}>Interests</h3>
        <p>Mentorship • Team Player • Cloud Architecture • Scalability Solutions</p>
      </div>
    </section>
  );
};

export default Education;