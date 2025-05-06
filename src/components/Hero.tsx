import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Transformamos Ideas en Apps Móviles Excepcionales</h1>
        <p>Somos una empresa líder en desarrollo mobile, creando soluciones nativas y multiplataforma que impulsan tu negocio.</p>
        <div className="hero-buttons">
          <a href="#portfolio" className="cta-button primary">Nuestro Trabajo</a>
          <a href="#contact" className="cta-button secondary">Hablemos de Tu Proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;