
import React from 'react';
import { ArrowRight, Home, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="beranda" className="relative bg-natural-50 hero-shape pb-16 pt-32 md:pt-40 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-block bg-natural-200/80 backdrop-blur-sm text-natural-700 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-down">
            Hunian Impian Keluarga Indonesia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-down" style={{ animationDelay: '100ms' }}>
            Rumah Idaman dengan <br className="hidden md:block" />
            <span className="text-primary">Nuansa Asri dan Modern</span>
          </h1>
          <p className="text-natural-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-down" style={{ animationDelay: '200ms' }}>
            Kami membangun hunian berkualitas dengan konsep ramah lingkungan, 
            desain modern, dan lokasi strategis di berbagai wilayah Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down" style={{ animationDelay: '300ms' }}>
            <a href="#properti" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors">
              Lihat Katalog Hunian
              <ArrowRight size={18} />
            </a>
            <a href="#tentang" className="bg-natural-100 hover:bg-natural-200 text-natural-800 px-6 py-3 rounded-full font-medium inline-flex items-center justify-center transition-colors">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div className="relative mt-12 md:mt-16 bg-white rounded-2xl overflow-hidden shadow-xl animate-scale-in max-w-5xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Rumah Modern Minimalis" 
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-sm text-primary-foreground/80">Featured Property</span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold">Cluster Harmoni Asri</h3>
                <p className="text-primary-foreground/90">Starting from IDR 850 Juta</p>
              </div>
              <a 
                href="#properti" 
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors shrink-0 backdrop-blur-sm"
              >
                Lihat Detail
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Home className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Desain Modern Minimalis</h3>
            <p className="text-natural-700">
              Konsep hunian modern dengan ruang terbuka dan pencahayaan alami yang optimal.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '500ms' }}>
            <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Lokasi Strategis</h3>
            <p className="text-natural-700">
              Dekat dengan fasilitas publik, akses transportasi, dan pusat kota.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '600ms' }}>
            <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Shield className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">Kualitas Terjamin</h3>
            <p className="text-natural-700">
              Material berkualitas dan proses konstruksi yang diawasi ketat oleh tim profesional.
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute -bottom-12 right-0 w-1/3 h-24 bg-natural-200 -z-10 opacity-80"></div>
    </section>
  );
};

export default Hero;
