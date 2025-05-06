import React from 'react';

interface Project {
  image: string; // Path to project image
  title: string;
  description: string;
  link?: string; // Optional link to case study
}

const projects: Project[] = [
  { image: '/images/project1.jpg', title: 'App de E-commerce', description: 'Plataforma móvil para compras online.' },
  { image: '/images/project2.jpg', title: 'App de Gestión', description: 'Solución B2B para optimizar procesos internos.' },
  // Add more projects
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Nuestro Portafolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && <a href={project.link}>Ver más</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;