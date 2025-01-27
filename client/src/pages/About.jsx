import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="about" className="h-screen flex items-center overflow-y-auto py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Üst Başlık */}
        <div 
          data-aos="fade-down" 
          data-aos-delay="100"
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Yaratıcı Teknoloji Uzmanı
          </h2>
          <p className="text-gray-600 text-lg">
            Dijital dünyayı şekillendiren çözümler Haro baba'da!
          </p>
        </div>

        {/* Ana İçerik */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Fotoğraf Bölümü */}
          <div 
            data-aos="fade-right" 
            data-aos-delay="200"
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src="harun.jpg"
                alt="Harun Dursun"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          </div>

          {/* Metin İçeriği */}
          <div 
            data-aos="fade-left" 
            data-aos-delay="300"
            className="w-full lg:w-1/2 space-y-6"
          >
            {/* Başlık */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Harun Dursun
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                Full Stack Geliştirici & AI Uzmanı
              </p>
            </div>

            {/* Açıklama */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="text-gray-600 leading-relaxed"
            >
              harocan baba bir markadır. anlayana... 10 yıllık yazılım deneyimimle, 
              yapay zeka ve siber güvenlik alanlarında uzmanlaşmış bir geliştiriciyim.
            </p>

            {/* Özellikler Listesi */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "🚀 10+ Yıllık Deneyim",
                "🧠 Yapay Zeka Uzmanı",
                "💻 Full Stack Geliştirme",
                "📱 Mobil Uygulamalar",
                "🌐 Cloud Çözümleri",
                "🔒 Siber Güvenlik"
              ].map((item, index) => (
                <li 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={600 + (index * 50)} // Daha hızlı sıralı
                  className="flex items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-blue-500 mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Sosyal Medya İkonları - En son ve yavaş gelecek */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: faLinkedin, color: 'bg-blue-600', delay: 100 },
                { icon: faGithub, color: 'bg-gray-800', delay: 1100 },
                { icon: faTwitter, color: 'bg-sky-500', delay: 1200 },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  data-aos="zoom-in"
                  data-aos-delay={item.delay}
                  className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;