import React from 'react';

const About = () => {
    return (
        <div id="about" className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">AHMET AKDEMIR</h1>
            <img src="/images/profile.jpg" alt="Ahmet Akdemir" className="w-48 h-48 rounded-full mb-4 mx-auto" />
            <p className="text-center">Izmir, Turkey • ahmt.akdmrr@gmail.com • <a href="https://www.linkedin.com/in/ahmet-akdemir-673326259/" className="text-blue-500 hover:underline">LinkedIn</a></p>

            <h2 className="text-2xl mt-4">Hakkımda</h2>
            <p>
                Merhaba! Ben Ahmet, mobil uygulama geliştirme konusunda tutkulu bir yazılım geliştiricisiyim. 
                Flutter ve Dart kullanarak kullanıcı dostu ve performanslı mobil uygulamalar geliştirmekteyim. 
                Ayrıca, Python ve makine öğrenimi alanlarında da deneyimim var. 
                Teknolojiyi ve yenilikleri takip ederek, projelerimde en iyi sonuçları elde etmeye çalışıyorum.
            </p>

            <h2 className="text-2xl mt-4">EDUCATION</h2>
            <p>Izmir Bakırçay University, Izmir, Turkey</p>
            <p>Bachelor's degree in computer engineering (Expected Graduation: Jun 2026)</p>
            <p>Relevant Courses: Data Structures, Machine Learning, Computer Networks, Algorithms, Artificial Intelligence</p>

            
        </div>
    );
};

export default About; 