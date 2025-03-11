
import React from 'react';
import { Check, Users, Award, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-white section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tentang AlAsri Hunian" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              <div className="hidden md:block absolute top-10 -left-10 w-full h-full border-2 border-primary rounded-2xl -z-10"></div>
              
              <div className="absolute -bottom-8 -right-8 md:right-auto md:left-1/2 md:-translate-x-1/2 bg-white glass-morphism p-6 rounded-xl shadow-lg md:w-80 z-10">
                <div className="flex items-center gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-natural-100 flex items-center justify-center">
                      <Building className="text-primary h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-natural-600 mb-1">Proyek Selesai</p>
                    <p className="text-3xl font-serif font-bold text-natural-800">120+</p>
                    <p className="text-sm text-natural-600">Unit Hunian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-natural-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Membangun Hunian <span className="text-primary">Berkualitas</span> Sejak 2005
            </h2>
            <p className="text-natural-700 mb-6">
              PT AlAsri Hunian adalah pengembang properti terkemuka di Indonesia yang berfokus pada pembangunan hunian berkualitas dengan konsep modern dan ramah lingkungan. Dengan pengalaman lebih dari 15 tahun, kami telah membangun ribuan unit hunian di berbagai wilayah Indonesia.
            </p>
            <p className="text-natural-700 mb-8">
              Kami berkomitmen untuk memberikan hunian terbaik dengan desain yang inovatif, kualitas konstruksi yang unggul, dan harga yang kompetitif. Kepuasan pelanggan adalah prioritas utama kami.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-1" />
                <span className="text-natural-800">Desain Modern & Fungsional</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-1" />
                <span className="text-natural-800">Material Berkualitas Tinggi</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-1" />
                <span className="text-natural-800">Lokasi Strategis</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-1" />
                <span className="text-natural-800">Ramah Lingkungan</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/projects" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors">
                Lihat Portofolio Kami
              </a>
              <a href="/contact" className="bg-natural-100 hover:bg-natural-200 text-natural-800 px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-12">
          <div className="text-center p-8 border border-natural-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300">
            <div className="bg-natural-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <Award className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Berpengalaman</h3>
            <p className="text-natural-700">
              Lebih dari 15 tahun pengalaman dalam industri properti dan konstruksi
            </p>
          </div>
          
          <div className="text-center p-8 border border-natural-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300">
            <div className="bg-natural-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <Users className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Tim Profesional</h3>
            <p className="text-natural-700">
              Didukung oleh tim arsitek, insinyur, dan desainer interior profesional
            </p>
          </div>
          
          <div className="text-center p-8 border border-natural-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300">
            <div className="bg-natural-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <Building className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Proyek Berkualitas</h3>
            <p className="text-natural-700">
              Ratusan proyek hunian telah kami selesaikan dengan standar kualitas tertinggi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
