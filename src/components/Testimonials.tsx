import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  { quote: '"[Quote 1]"', name: 'Nombre Cliente 1', title: 'CEO', company: 'Empresa X' },
  { quote: '"[Quote 2]"', name: 'Nombre Cliente 2', title: 'Fundador', company: 'Empresa Y' },
  // Add more testimonials
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <div className="testimonials-list">
          {/* You'd likely use a slider library here or simple grid */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="quote">{testimonial.quote}</p>
              <p className="client-info">- {testimonial.name}, {testimonial.title} at {testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;