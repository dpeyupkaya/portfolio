import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projectsData from '../data/projects.json'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100"
          data-aos-once="true"
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Son Projelerim
          </h2>
          <p className="text-gray-600 text-lg">
            Teknoloji ve inovasyonun sınırlarını zorlayan çalışmalar
          </p>
        </div>

        {/* Proje Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
              data-aos-once="true"
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Resim ve Overlay */}
              <div className="relative h-64">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
              </div>

              {/* İçerik */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Github Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-blue-600 hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>

                {/* Proje Detayları */}
                <div className="mb-3">
                  <p className="text-white/90 text-sm leading-relaxed backdrop-blur-sm">
                    {project.details}
                  </p>
                </div>

                {/* Proje Başlığı */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects