import React from 'react';
import img from '../assets/logo.png'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">

          <img src={img} className='img-logo' alt=""/>
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