import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;