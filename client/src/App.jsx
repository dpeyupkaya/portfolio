import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './pages/Projects';

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
      <About />
      <Projects/>
      <Contact />
      <ToastContainer/>
    </div>
  );
};

export default App;