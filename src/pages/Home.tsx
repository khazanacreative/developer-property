
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Properties from '@/components/Properties';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Slider images for hero section
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Rumah Idaman dengan Nuansa Asri dan Modern",
      subtitle: "Hunian Impian Keluarga Indonesia",
      description: "Kami membangun hunian berkualitas dengan konsep ramah lingkungan, desain modern, dan lokasi strategis di berbagai wilayah Indonesia."
    },
    {
      image: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hunian Modern dengan Lingkungan yang Asri",
      subtitle: "Kualitas Konstruksi Terbaik",
      description: "Desain modern yang elegan dengan konstruksi berkualitas tinggi dan lingkungan yang asri untuk keluarga Anda."
    },
    {
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Apartemen Mewah di Lokasi Strategis",
      subtitle: "Gaya Hidup Urban Modern",
      description: "Nikmati gaya hidup urban dengan apartemen mewah yang dilengkapi berbagai fasilitas premium di lokasi strategis."
    },
    {
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "Kawasan Perumahan dengan Fasilitas Lengkap",
      subtitle: "Tempat Tinggal Terbaik untuk Keluarga",
      description: "Kawasan perumahan dengan fasilitas lengkap seperti taman bermain, kolam renang, dan area komersial untuk kenyamanan keluarga Anda."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero section with slider */}
        <section id="beranda" className="relative bg-natural-50 hero-shape pb-24 pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <div className="inline-block bg-natural-200/80 backdrop-blur-sm text-natural-700 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-down">
                {slides[currentSlide].subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-down" style={{ animationDelay: '100ms' }}>
                <span className="text-primary">Hunian Berkualitas</span> <br className="hidden md:block" />
                Untuk Keluarga Indonesia
              </h1>
              <p className="text-natural-700 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-down" style={{ animationDelay: '200ms' }}>
                {slides[currentSlide].description}
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

            <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl animate-scale-in relative">
                <img 
                  src={slides[currentSlide].image} 
                  alt="Properti Unggulan" 
                  className="w-full h-[300px] md:h-[500px] object-cover transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                    <div>
                      <span className="text-sm text-primary-foreground/80">Featured Property</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold">Cluster Harmoni Asri</h3>
                      <p className="text-primary-foreground/90">Starting from IDR 850 Juta</p>
                    </div>
                    <a 
                      href="/properties" 
                      className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors shrink-0 backdrop-blur-sm"
                    >
                      Lihat Detail
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <button 
                    onClick={prevSlide}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-natural-700 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft size={20} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <button 
                    onClick={nextSlide}
                    className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-natural-700 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Next slide"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
                
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentSlide ? 'bg-primary w-6' : 'bg-white/60'
                      } transition-all duration-300`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-16 mb-24">
              <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Desain Modern Minimalis</h3>
                <p className="text-natural-700">
                  Konsep hunian modern dengan ruang terbuka dan pencahayaan alami yang optimal.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '500ms' }}>
                <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Lokasi Strategis</h3>
                <p className="text-natural-700">
                  Dekat dengan fasilitas publik, akses transportasi, dan pusat kota.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md animate-fade-up" style={{ animationDelay: '600ms' }}>
                <div className="bg-natural-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Kualitas Terjamin</h3>
                <p className="text-natural-700">
                  Material berkualitas dan proses konstruksi yang diawasi ketat oleh tim profesional.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <Projects />
        <Properties />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
