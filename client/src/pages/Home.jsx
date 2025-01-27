import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaCode, FaRobot } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Arkaplan Efektleri için inline CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
      `}</style>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" 
             style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" 
             style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Diğer içerik aynı kalacak */}
        </motion.div>
      </div>
    </section>
  );
};

export default Home;