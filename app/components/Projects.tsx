'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ChatGPTurk',
    description: 'AI destekli bir sohbet platformu. 5+ AI modeli entegre edilmiştir.',
    tech: ['Python', 'Django', 'HuggingFace', 'HTML', 'CSS'],
    image: '/images/chatgpturk.jpg', // Proje resmi
    github: 'https://github.com/yourusername/chatgpturk',
    demo: 'https://chatgpturk-demo.com'
  },
  {
    title: 'T-shirt App',
    description: 'Flutter ve Dart kullanarak geliştirilen bir mobil alışveriş uygulaması.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    image: '/images/tshirtapp.jpg', // Proje resmi
    github: 'https://github.com/yourusername/tshirtapp',
    demo: 'https://tshirtapp-demo.com'
  },
  {
    title: 'Wine Quality Prediction',
    description: 'Kimyasal özelliklere dayalı şarap kalitesi tahmin modeli.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    image: '/images/winequality.jpg', // Proje resmi
    github: 'https://github.com/yourusername/winequality',
    demo: 'https://winequality-demo.com'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-2" />
              <p className="text-gray-300">{project.description}</p>
              <p className="text-gray-400">Teknolojiler: {project.tech.join(', ')}</p>
              <div className="mt-2">
                <a href={project.github} className="text-blue-400 hover:underline">GitHub</a> | 
                <a href={project.demo} className="text-blue-400 hover:underline"> Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 