
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/About';
import { ArrowRight, Users, Award, Building, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-natural-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-natural-200 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Tentang Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Membangun Hunian <span className="text-primary">Berkualitas</span> Sejak 2005
              </h1>
              <p className="text-natural-700 text-lg">
                PT AlAsri Hunian adalah pengembang properti terkemuka di Indonesia yang berfokus pada 
                pembangunan hunian berkualitas dengan konsep modern dan ramah lingkungan.
              </p>
            </div>
          </div>
        </section>
        
        <AboutContent />

        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Visi & Misi <span className="text-primary">AlAsri Hunian</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-natural-50 p-8 rounded-xl">
                <h3 className="text-2xl font-serif font-semibold mb-4">Visi</h3>
                <p className="text-natural-700 mb-6">
                  Menjadi pengembang properti terkemuka di Indonesia yang menghadirkan hunian 
                  berkualitas dengan konsep ramah lingkungan dan berkelanjutan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Hunian berkualitas untuk semua</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Pengembangan yang berkelanjutan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Inovasi dalam desain dan teknologi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-natural-50 p-8 rounded-xl">
                <h3 className="text-2xl font-serif font-semibold mb-4">Misi</h3>
                <p className="text-natural-700 mb-6">
                  Kami berkomitmen untuk membangun hunian berkualitas dengan desain modern dan 
                  fungsional yang memperhatikan aspek lingkungan dan sosial.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Menggunakan material ramah lingkungan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Membangun komunitas yang harmonis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Memberikan layanan terbaik kepada pelanggan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-natural-800">Meningkatkan kualitas hidup masyarakat</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-natural-50 p-8 rounded-xl mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1560520653-9662f6d0c5bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                    alt="Tim Manajemen" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-serif font-semibold mb-4">Tim Manajemen</h3>
                  <p className="text-natural-700 mb-6">
                    Kami didukung oleh tim manajemen yang berpengalaman dalam industri properti dan konstruksi. 
                    Dengan pengalaman lebih dari 15 tahun, tim kami telah berhasil mengembangkan berbagai proyek 
                    perumahan di Indonesia.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-natural-800">Profesional bersertifikasi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-natural-800">Tim teknis berpengalaman</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-natural-800">Ahli konstruksi terkemuka</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-natural-800">Pengetahuan lokal mendalam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/projects" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
                Lihat Portofolio Kami
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

export default AboutPage;
