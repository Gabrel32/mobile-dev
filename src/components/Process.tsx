import React from 'react';

interface Step {
  icon: string; // Or component
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: '💡', title: 'Descubrimiento', description: 'Entendemos tus necesidades y objetivos.' },
  { icon: '✏️', title: 'Diseño', description: 'Creamos prototipos y la experiencia de usuario.' },
  { icon: '💻', title: 'Desarrollo', description: 'Construimos tu app con código limpio y eficiente.' },
  { icon: '🧪', title: 'Pruebas', description: 'Aseguramos la calidad y el rendimiento.' },
  { icon: '🚀', title: 'Lanzamiento', description: 'Publicamos tu app en las tiendas (App Store/Google Play).' },
  { icon: '✨', title: 'Soporte & Mejora', description: 'Te acompañamos después del lanzamiento.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="process">
      <div className="container">
        <h2>Nuestro Proceso de Trabajo</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;