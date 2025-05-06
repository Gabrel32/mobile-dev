import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Somos un equipo apasionado por la tecnología móvil, dedicados a crear soluciones innovadoras y de alta calidad que generan valor real para nuestros clientes.</p>
            <p>Con años de experiencia en el sector, combinamos creatividad, diseño centrado en el usuario y las últimas tecnologías para ofrecer resultados excepcionales.</p>
            {/* More about your story, mission, values */}
          </div>
          <div className="about-image">
            {/* Optional: Add an image here */}
            {/* <img src="/images/team.jpg" alt="Nuestro equipo" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;