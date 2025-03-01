'use client';

import { motion } from 'framer-motion';
import Projects from './components/Projects';
import About from './about';

interface SkillStarsProps {
    level: number;
}

const SkillStars = ({ level }: SkillStarsProps) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <span key={index} className={`text-orange-500 ${index < level ? 'animate-pulse' : ''}`}>★</span>
    ));
    return <div>{stars}</div>;
};

export default function Home() {
  return (
    <>
      {/* Hakkımda Bölümü */}
      <About />

      {/* Yetenekler Bölümü */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Yeteneklerim
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[ 
                { name: 'Python', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Dart', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'SQL', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Machine Learning', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Git', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Data Structure', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Flutter', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'Mobile App Development', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'AI & ML', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'TensorFlow', level: Math.floor(Math.random() * 5) + 1 },
                { name: 'PyTorch', level: Math.floor(Math.random() * 5) + 1 },
              ].map((skill) => (
                <div key={skill.name} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center h-32 justify-between w-48 transition-transform transform hover:scale-105">
                  <p className="text-gray-300 font-semibold text-lg text-center">{skill.name}</p>
                  <SkillStars level={skill.level} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Projelerim
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'ChatGPTurk', description: 'AI destekli sohbet platformu.', image: '/images/web.jpg', details: 'Bu proje, kullanıcıların doğal dil işleme yetenekleri ile etkileşimde bulunmalarını sağlayan bir sohbet botu geliştirmeyi amaçlamaktadır. 5\'ten fazla AI modelini entegre ederek kullanıcı deneyimini artırmayı hedefledik.' },
                { name: 'T-shirt App', description: 'Flutter tabanlı mobil alışveriş uygulaması.', image: '/images/wine.png', details: 'Bu uygulama, kullanıcıların t-shirt satın almasını kolaylaştıran bir mobil platformdur. Flutter kullanarak hızlı ve kullanıcı dostu bir arayüz geliştirdik.' },
                { name: 'Wine Quality Prediction', description: 'Şarap kalitesini tahmin eden makine öğrenimi modeli.', image: '/images/wine.png', details: 'Bu proje, kimyasal özelliklere dayalı olarak şarap kalitesini tahmin eden bir makine öğrenimi modelidir. Verileri analiz ederek, kullanıcıların şarap seçimlerini daha bilinçli yapmalarına yardımcı olmayı amaçladık.' },
              ].map((project) => (
                <div key={project.name} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 h-80 transition-transform transform hover:scale-105">
                  <img src={project.image} alt={project.name} className="h-40 w-full object-cover rounded-md mb-2" />
                  <h3 className="text-gray-300 font-semibold text-lg text-center">{project.name}</h3>
                  <p className="text-gray-400 text-sm text-center">{project.description}</p>
                  <p className="text-gray-500 text-xs text-center mt-1">{project.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Sertifikalarım
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'CCNAv7: Introduction to Networks', description: 'Ağ temelleri, yönlendirme ve anahtarlama konularında bilgi sahibi oldum.' },
                { name: 'IBM SkillsBuild – Professional Skills Certificate', description: 'Profesyonel beceriler ve iş dünyası için gerekli yetkinlikler.' },
                { name: 'IBM SkillsBuild – Design Thinking Certificate', description: 'Tasarım odaklı düşünme yöntemleri ve uygulamaları.' },
                { name: 'BTK Academy: Advanced Python & Machine Learning', description: 'Gelişmiş Python programlama ve makine öğrenimi teknikleri.' },
                { name: 'Udemy: Flutter & Dart – The Complete Guide', description: 'Flutter ile mobil uygulama geliştirme ve Dart programlama dili.' },
                { name: 'CCNAv7: Switching, Routing, and Wireless Essentials', description: 'Anahtarlama, yönlendirme ve kablosuz ağ temelleri.' },
              ].map((cert) => (
                <div key={cert.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center h-32 justify-between w-64 transition-transform transform hover:scale-105">
                  <p className="text-gray-300 font-semibold text-md text-center">{cert.name}</p>
                  <p className="text-gray-400 text-sm text-center">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              İletişime Geç
            </h2>
            <p className="text-gray-300 mb-8">
              Bir proje mi düşünüyorsunuz? Hadi konuşalım!
            </p>
            <a
              href="mailto:ahmt.akdmrr@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block transition-colors"
            >
              E-posta Gönder
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}