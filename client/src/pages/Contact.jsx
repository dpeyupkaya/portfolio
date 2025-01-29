// pages/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import MapComponent from '../components/MapComponent'; // Harita bileşenini import edin
import { toast } from "react-toastify"; // Toast bildirimi için
import "react-toastify/dist/ReactToastify.css"; // Toast stil dosyası

export default function Contact() {



  const handleCopyPhoneNumber = () => {
    const phoneNumber = "+90 555 555 55 55";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        toast.success("Telefon numarası kopyalandı!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      })
      .catch(() => {
        toast.error("Kopyalama başarısız!", {
          position: "bottom-right",
          autoClose: 3000,
        });
      })
  }

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
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={handleCopyPhoneNumber} // Tıklanınca kopyala
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
              <a
                href="mailto:iletisim@harocanbaba.com"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow block"
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
              </a>

              {/* Harita */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Başlık ve İkon */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-xl">Lokasyon</h3>
                  </div>

                  {/* Harita Bileşeni */}
                  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <MapComponent className="w-full h-64 md:h-80" /> {/* Harita boyutunu ayarlayın */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-once="true"
            className="w-full lg:w-2/3 bg-white rounded-2xl p-8 shadow-xl"
          >
            <form className="space-y-6 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
              {/* İsim */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  <i className="fas fa-user mr-2 text-blue-500"></i>İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Adınızı girin"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>

              {/* E-posta */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  <i className="fas fa-envelope mr-2 text-blue-500"></i>E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-posta adresinizi girin"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>

              {/* Telefon */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  <i className="fas fa-phone mr-2 text-blue-500"></i>Telefon
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Telefon numaranızı girin"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                />
              </div>

              {/* Mesaj */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  <i className="fas fa-comment-alt mr-2 text-blue-500"></i>Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Mesajınızı yazın"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  required
                ></textarea>
              </div>

              {/* Gönder Butonu */}
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-once="true"
              >
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Gönder
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

