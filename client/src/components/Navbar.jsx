import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-xl z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sol Taraf - Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </div>

          {/* Sağ Taraf - Menü Linkleri */}
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#about" 
                className="px-3 py-2 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Hakkımda
                <span className="absolute bottom-0 left-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="px-3 py-2 hover:text-green-400 transition-colors duration-300 relative group"
              >
                Projelerim
                <span className="absolute bottom-0 left-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="px-3 py-2 hover:text-green-400 transition-colors duration-300 relative group"
              >
                İletişim
                <span className="absolute bottom-0 left-0 h-0.5 bg-green-400 w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};