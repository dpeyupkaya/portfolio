// pages/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto"> 
        {/* Üst Başlık */}
        <div 
        
          data-aos="fade-down" 
          data-aos-delay="100"
          data-aos-once="true"
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            İletişime Geçelim
          </h2>
          <p className="text-gray-600 text-lg">
            Projeleriniz hakkında konuşmaktan mutluluk duyarım!
          </p>
        </div>

        {/* İçerik Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* İletişim Bilgileri */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
             data-aos-once="true"
            className="w-full lg:w-1/3 space-y-8"
          >
            {/* İletişim Kartları */}
            <div className="space-y-6">
              {/* Telefon */}
              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                 data-aos-once="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+90 555 555 55 55</p>
                  </div>
                </div>
              </div>

              {/* E-posta */}
              <div 
                data-aos="fade-up"
                data-aos-delay="400"
                 data-aos-once="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">E-posta</h3>
                    <p className="text-gray-600">iletisim@harocanbaba.com</p>
                  </div>
                </div>
              </div>

              {/* Adres */}
              <div 
                data-aos="fade-up"
                data-aos-delay="500"
                 data-aos-once="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Lokasyon</h3>
                    <p className="text-gray-600">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal Medya */}
          
          </div>

          {/* İletişim Formu */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
             data-aos-once="true"
            className="w-full lg:w-2/3 bg-white rounded-2xl p-8 shadow-xl"
          >
            <form className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="300"  data-aos-once="true">
                <label className="block text-gray-700 mb-2 font-medium">Adınız</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Harun Dursun"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                <label className="block text-gray-700 mb-2 font-medium">E-posta</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ornek@email.com"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
                <label className="block text-gray-700 mb-2 font-medium">Konu</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Proje teklifim var"
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
                <label className="block text-gray-700 mb-2 font-medium">Mesajınız</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button 
               data-aos-once="true"
                data-aos="zoom-in"
                data-aos-delay="700"
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}