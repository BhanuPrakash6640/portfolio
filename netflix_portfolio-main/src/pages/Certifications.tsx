import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity, FaReact, FaLinux, FaTerminal, FaGitAlt } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee, SiMysql } from 'react-icons/si';
import { Certification } from '../types';
import { certificationsData } from '../data/certifications';

const iconData: { [key: string]: JSX.Element } = {
  'FaReact': <FaReact />,
  'FaLinux': <FaLinux />,
  'FaTerminal': <FaTerminal />,
  'SiMysql': <SiMysql />,
  'FaGitAlt': <FaGitAlt />,
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>(certificationsData);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
