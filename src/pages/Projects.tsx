
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsContent from '@/components/Projects';
import { ArrowRight, FileText, Calendar, Users, Building } from 'lucide-react';

const ProjectsPage = () => {
  const projectDetails = [
    {
      id: 1,
      title: "Cluster Harmoni Asri",
      location: "Bogor, Jawa Barat",
      completion: "2022",
      description: "Perumahan modern dengan konsep hijau yang terletak di kawasan asri Bogor. Dilengkapi dengan taman bermain, jogging track, dan area komersial.",
      features: ["120 Unit Rumah", "Club House", "Taman Bermain", "Area Komersial"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Urban Heights Apartment",
      location: "Jakarta Selatan",
      completion: "2020",
      description: "Apartemen premium di pusat kota Jakarta dengan akses mudah ke berbagai fasilitas publik. Dilengkapi dengan kolam renang, gym, dan ruang bisnis.",
      features: ["200 Unit Apartemen", "Kolam Renang", "Fitness Center", "Business Lounge"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Sunrise Valley Commercial",
      location: "Surabaya, Jawa Timur",
      completion: "2021",
      description: "Kawasan komersial terintegrasi dengan konsep modern dan ramah lingkungan. Dilengkapi dengan area parkir luas dan sistem keamanan 24 jam.",
      features: ["50 Unit Ruko", "Food Court", "Area Parkir Luas", "Keamanan 24 Jam"],
      image: "https://images.unsplash.com/photo-1520355256553-57dc4fd22640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-natural-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-natural-200 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Proyek Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Portofolio <span className="text-primary">Proyek Unggulan</span>
              </h1>
              <p className="text-natural-700 text-lg">
                Kami telah berhasil menyelesaikan berbagai proyek hunian dan komersial
                di seluruh Indonesia dengan standar kualitas tertinggi.
              </p>
            </div>
          </div>
        </section>
        
        <ProjectsContent />

        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Proyek Unggulan Kami</h2>
            <div className="space-y-20">
              {projectDetails.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/2">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
                        Selesai {project.completion}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-serif font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-natural-600 mb-4">
                      <Calendar size={18} />
                      <span>Selesai {project.completion}</span>
                    </div>
                    <p className="text-natural-700 mb-6">{project.description}</p>
                    
                    <div className="bg-natural-50 p-6 rounded-xl mb-6">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-primary" />
                        Fitur Utama
                      </h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight size={16} className="text-primary shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="/properties" 
                      className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      Lihat Katalog Hunian
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-6">Tertarik Dengan Proyek Kami?</h3>
              <p className="text-natural-700 mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk mendapatkan informasi lebih lanjut tentang proyek terbaru kami
                atau untuk membahas kebutuhan properti Anda.
              </p>
              <a href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
                Hubungi Kami
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
