import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity app with real-time updates",
    tags: ["React", "Firebase", "Material-UI"],
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with data visualization",
    tags: ["React", "D3.js", "API Integration"],
    link: "#"
  }
];

const Projects = () => (
  <section id="projects" className="section">
    <h2>Featured Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tag">{tag}</span>
            ))}
          </div>
          <a href={project.link} className="project-link">View Project <ExternalLink size={16} /></a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
