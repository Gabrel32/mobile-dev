// src/App.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Service';
import Portfolio from './components/Porfolio';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header /> {/* Optional: Sticky navigation */}
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials /> {/* Optional */}
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;