import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            {/* Your Logo */}
            <div className="logo">Your Logo</div>
            <p>Empresa de desarrollo móvil dedicada a crear soluciones innovadoras.</p>
          </div>
          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#portfolio">Portafolio</a></li>
              <li><a href="#about">Nosotros</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contacto</h3>
            <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
            <p>Teléfono: <a href="tel:+123456789">+123 456 789</a></p>
            <p>Dirección: Tu Dirección Aquí</p>
          </div>
          <div className="footer-social">
            <h3>Síguenos</h3>
            {/* Add social media icons/links */}
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            {/* Add more social links */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Company Name. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;