import React from 'react';
import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      period: 'Sept 2011 - May 2015',
      institution: 'Dedan Kimathi University of Science and Technology',
      degree: 'Bachelor of Science in Information Technology',
      details: 'Second Class Honors - Upper Division'
    },
    {
      icon: <FaSchool />,
      period: '2007 - 2010',
      institution: 'Kabungut Boys High School',
      degree: 'Kenya Certificate of Secondary Education (KCSE)',
      details: 'Grade: B+'
    },
    {
      icon: <FaBook />,
      period: '1998 - 2006',
      institution: 'Kapkelei Primary School',
      degree: 'Kenya Certificate of Primary Education (KCPE)',
      details: 'Score: 354 out of 500'
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