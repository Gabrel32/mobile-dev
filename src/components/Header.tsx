import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container"> {/* Use a container for max-width */}
        <div className="logo">
          {/* Replace with your logo SVG or Img */}
          <a href="/">Your Logo Here</a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <a href="#contact" className="cta-button">Contáctanos</a>
      </div>
    </header>
  );
};

export default Header;