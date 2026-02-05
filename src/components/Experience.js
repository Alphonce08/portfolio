import React from 'react';

const Experience = () => {
    const experiences = [
   {
      period: 'Jan 2024 - Present',
      title: 'CTO & Lead Software Engineer',
      company: 'Pesabook Limited',
            responsibilities: [
                'Performed sprint planning, assigning tasks, reviews and retrospective',
                'Work together with product team to design new features and improvements',
                'Collected user feedback to enhance product functionality and user experience',
                'Configure, monitor, and maintain cloud infrastructure on Digital Ocean',
                'Perform database design, normalization and optimization',
                'Configure and monitor status pages using UptimeRobot and StatusCake'
      ]
    },
    {
      period: 'Nov 2022 - Dec 2024',
      title: 'Lead Software Engineer',
      company: 'Creative Brands Group - Cloudpay Services',
      responsibilities: [
        'Developed and deployed APIs and microservices for products like Cloudpay, Gigpay, and Pesabook',
        'Led a team of 3 engineers, conducting sprint planning and code reviews',
        'Configured and maintained CI/CD pipelines',
        'Optimized and deployed applications on Google Cloud Platform (GCP)',
        'Worked on external client projects, providing development support'
      ]
    },
    {
      period: 'Jan 2020 - Sept 2022',
      title: 'Lead Backend Engineer',
      company: 'Workpay',
      responsibilities: [
        'Led a team of 5 backend developers',
        'Optimized cloud-based applications on AWS, GCP, and Digital Ocean',
        'Performed sprint planning, assigning tasks, reviews and retrospective',
        'Designed and maintained CI/CD pipelines',
        'Wrote test cases for React frontend and backend APIs',
        'Reviewed and refactored code to adhere to best practices'
      ]
    },
    {
      period: 'Feb 2019 - Dec 2019',
      title: 'Software Engineer',
      company: 'TozzaPlus Limited',
      responsibilities: [
        'Led development team in lead developer\'s absence',
        'Developed unit and functional test cases',
        'Configured Dockerized environments for CI/CD pipelines',
        'Worked extensively on Payroll Module and Leave Management'
      ]
    },
    {
      period: 'Nov 2017 - Jan 2019',
      title: 'Software Developer',
      company: 'Afrisoft Africa Limited',
      responsibilities: [
        'Integrated various external APIs including MPESA, banking systems, and bulk SMS',
        'Designed and implemented backend systems and database schemas',
        'Led development of Bluewave Insurance Policy Ordering System'
      ]
    },
    {
      period: 'Sept 2015 - Oct 2017',
      title: 'Fullstack Developer',
      company: 'iGateAfrica Technologies Limited',
      responsibilities: [
        'User requirement specification and analysis',
        'Database design and normalization',
        'Frontend and backend development',
        'Participated in stakeholder meetings and planning'
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