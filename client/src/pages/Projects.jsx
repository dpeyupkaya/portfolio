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
          style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{ animationDelay: '4s' }}></div>
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
  
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.githubLink} // GitHub linki burada
                target="_blank" // Yeni sekmede aç
                rel="noopener noreferrer" // Güvenlik için
              >
                <motion.div
                  data-aos="fade-up"
                  data-aos-once="true"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer group max-w-xs" 
                >
                  {/* Ana Resim */}
                  <div className="w-full h-48 sm:h-64"> {/* Resim boyutunu küçült */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
  
                  {/* Hover'da Görünen Detaylar */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-200 text-center text-sm">{project.details}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;