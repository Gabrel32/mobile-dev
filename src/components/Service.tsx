import React from 'react';


interface Service {
  icon: string; // Or React.ComponentType for SVG
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: '📱', title: 'Desarrollo iOS Nativo', description: 'Apps robustas y rápidas para iPhone y iPad.' },
  { icon: '🤖', title: 'Desarrollo Android Nativo', description: 'Soluciones optimizadas para todo el ecosistema Android.' },
  { icon: '💻', title: 'Desarrollo Cross-Platform', description: 'Construimos apps para iOS y Android con una sola base de código.' },
  { icon: '🎨', title: 'Diseño UI/UX', description: 'Experiencias de usuario intuitivas y atractivas.' },
  // Add more services
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              {/* Render your icon component or img */}
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;