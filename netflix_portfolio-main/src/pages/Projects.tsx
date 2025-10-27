import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaExternalLinkAlt } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo, SiJavascript, SiTypescript, SiMysql } from 'react-icons/si';
import { Project } from '../types';
import { getProjects } from '../queries/getProjects';
import { fetchGitHubRepos, ProjectWithLanguages } from '../services/githubService';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "React": <FaReact />,
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  "Java": <FaJava />,
  "Python": <FaPython />,
  "HTML": <SiHtml5 />,
  "HTML5": <SiHtml5 />,
  "CSS": <SiCss3 />,
  "CSS3": <SiCss3 />,
  "MySQL": <SiMysql />,
  "PostgreSQL": <SiPostgresql />,
  "Git": <FaGithub />,
  "GitHub": <FaGithub />,
  "AWS": <FaAws />,
  "Docker": <FaDocker />,
  "Express.js": <FaNodeJs />,
  "jQuery": <SiJquery />,
  "Bootstrap": <SiCss3 />,
  "Material UI": <SiMaterialdesign />,
  "Firebase": <SiFirebase />,
  "Heroku": <GrDeploy />,
  "Netlify": <GrDeploy />,
  "Vue.js": <FaVuejs />,
  "Angular": <FaAngular />,
  "Next.js": <FaReact />,
  "Gatsby": <FaReact />,
  "Redux": <FaReact />,
  "Tailwind CSS": <SiCss3 />,
  "JQuery": <SiJquery />,
};


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectWithLanguages[]>([])
  
  useEffect(() => { 
    async function fetchProjects() {
      const data = await fetchGitHubRepos();
      setProjects(data);
    }
    
    fetchProjects()
  }, [])
  
  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img 
              src={`https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(project.name)}`} 
              alt={project.name} 
              className="project-image" 
            />
            <div className="project-details">
              <h3>{project.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
              <p>{project.description || 'A project showcasing modern web development practices.'}</p>
              <div className="tech-used">
                {Object.keys(project.languages).slice(0, 4).map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button github-button"
                >
                  <FaGithub /> View on GitHub
                </a>
                {project.homepage && (
                  <a 
                    href={project.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-button demo-button"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
