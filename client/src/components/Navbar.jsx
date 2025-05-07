import React, { useState } from 'react';


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  




  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-xl z-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sol Taraf - Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Ben Eyüp
            </span>
          </div>

          <ul className="hidden md:flex space-x-8 bg-gradient-to-r  rounded-lg shadow-md">
            <li>
              <a
                href="#about"
                className="px-4 py-2 text-white-600 hover:text-green-600 transition-all duration-500 relative group"
              >
                <span className="relative z-10">
                  Hakkımda
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r "></span>
                </span>
                <span className="absolute inset-0 rounded-lg bg-green-50 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="px-4 py-2 text-white-600 hover:text-green-600 transition-all duration-500 relative group"
              >
                <span className="relative z-10">
                  Projelerim
                  <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green-400 transition-all duration-400"></span>
                </span>
                <span className="absolute inset-0 rounded-lg bg-green-50 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="px-4 py-2 text-white-600 hover:text-green-600 transition-all duration-500 relative group"
              >
                <span className="relative z-10">
                  İletişim
                  <span className="absolute -bottom-1 left-0 w-full h-1 origin-left scale-x-0 "></span>
                </span>
                <span className="absolute inset-0 rounded-lg bg-green-50 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            </li>
           


          </ul>


          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil Menü (Küçük Ekranlar) */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            {/* Hakkımda */}
            <li className={`transform transition-all duration-500 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-90'}`}>
              <a
                href="#about"
                className="text-2xl font-bold hover:text-green-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Hakkımda
              </a>
            </li>

            {/* Projelerim */}
            <li className={`transform transition-all duration-500 ease-out delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-90'}`}>
              <a
                href="#projects"
                className="text-2xl font-bold hover:text-green-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projelerim
              </a>
            </li>

            {/* İletişim */}
            <li className={`transform transition-all duration-500 ease-out delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-90'}`}>
              <a
                href="#contact"
                className="text-2xl font-bold hover:text-green-400 transition-colors duration-300"
                onClick={toggleMenu}
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};