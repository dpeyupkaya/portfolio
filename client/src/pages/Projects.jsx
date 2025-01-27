import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // JSON'dan gelen verileri state'e aktarın
    setProjects(projectsData);

    // AOS'u başlatın
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Arkaplan Efektleri */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" 
             style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" 
             style={{animationDelay: '4s'}}></div>
      </div>

      {/* Proje Kutuları */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projelerim</h1>
          <p className="text-lg text-gray-600 mb-8">İşte son projelerimden bazıları.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <motion.div
      key={project.id}
      data-aos="fade-up"
      whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Proje Resmi */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Proje İsmi (Başta Görünür) */}
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
          <FaCode className="text-gray-600 text-xl" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h2>
      </div>

      {/* Detaylar (Başta Gizli, İmleç Üzerine Gelince Görünür) */}
      <div className="absolute inset-0 bg-white bg-opacity-0 backdrop-filter backdrop-blur-sm transition-all duration-300 group-hover:bg-opacity-90 rounded-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          <p className="text-gray-900 text-lg font-semibold mb-2">Detaylar</p>
          <p className="text-gray-600 text-sm text-center">
            {project.details}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;