import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <h2>¿Listo para Empezar Tu Proyecto?</h2>
        <p>Contáctanos hoy mismo y lleva tu idea al siguiente nivel con una app móvil impactante.</p>
        <a href="#contact" className="cta-button primary">Solicitar Presupuesto</a>
      </div>
    </section>
  );
};

export default CallToAction;