import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            {/* Your Logo */}
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
            <p>Email: <a href="mailto:Mobiledev568@gmail.com">Mobiledev568@gmail.com</a></p>
            <p>Alternativo: <a href="mailto:estudiosmobiledev@gmail.com">estudiosmobiledev@gmail.com</a></p>
            <p>Teléfono: <a href="tel:+584241658236">+58 424-1658236</a></p>
            <p>Dirección: Silicon Valley</p>
          </div>
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61575848322137&sk=about" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/mobile_dev110/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://x.com/StudioMobileDev" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter/X</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mobile dev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;