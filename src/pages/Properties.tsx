
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertiesContent from '@/components/Properties';
import { ArrowRight, Search, FileText, CheckCircle2 } from 'lucide-react';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-natural-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-natural-200 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Katalog Hunian
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Temukan <span className="text-primary">Hunian Idaman</span> Anda
              </h1>
              <p className="text-natural-700 text-lg mb-8">
                Kami menawarkan berbagai pilihan hunian yang dapat disesuaikan dengan kebutuhan dan 
                budget Anda. Dari rumah tapak, apartemen, hingga ruko komersial.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-natural-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-3 w-full rounded-full border border-natural-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Cari berdasarkan lokasi, tipe, atau harga..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        <PropertiesContent />

        <section className="py-20 bg-natural-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Cara Pembelian <span className="text-primary">Properti</span>
              </h2>
              <p className="text-natural-700">
                Proses pembelian properti di AlAsri Hunian dibuat semudah mungkin untuk Anda.
                Berikut adalah langkah-langkah untuk memiliki hunian impian Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {[
                {
                  step: "1",
                  title: "Konsultasi",
                  description: "Konsultasikan kebutuhan hunian Anda dengan tim marketing kami"
                },
                {
                  step: "2",
                  title: "Survey Lokasi",
                  description: "Kunjungi lokasi dan unit contoh untuk melihat langsung properti"
                },
                {
                  step: "3",
                  title: "Pemilihan Unit",
                  description: "Pilih unit yang sesuai dengan kebutuhan dan budget Anda"
                },
                {
                  step: "4",
                  title: "Pembayaran",
                  description: "Proses pembayaran dengan skema yang fleksibel dan mudah"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 left-6 bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 mt-4">{item.title}</h3>
                  <p className="text-natural-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-serif font-semibold mb-6">Skema Pembayaran</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-natural-200 rounded-lg p-6 hover:border-primary transition-colors">
                  <h4 className="text-xl font-serif font-semibold mb-4">Cash Keras</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Pembayaran lunas sekaligus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Diskon khusus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Proses cepat</span>
                    </li>
                  </ul>
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight size={16} />
                  </a>
                </div>
                
                <div className="border border-natural-200 rounded-lg p-6 hover:border-primary transition-colors relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 bg-primary/10 w-24 h-24 rounded-full"></div>
                  <div className="absolute top-3 right-3 bg-primary px-2 py-1 rounded text-xs text-white font-medium">
                    Populer
                  </div>
                  <h4 className="text-xl font-serif font-semibold mb-4">KPR</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">DP mulai 10%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Kerja sama dengan berbagai bank</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Suku bunga kompetitif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Tenor hingga 20 tahun</span>
                    </li>
                  </ul>
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight size={16} />
                  </a>
                </div>
                
                <div className="border border-natural-200 rounded-lg p-6 hover:border-primary transition-colors">
                  <h4 className="text-xl font-serif font-semibold mb-4">Cash Bertahap</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Pembayaran bertahap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Tanpa bunga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                      <span className="text-natural-700">Jangka waktu hingga 36 bulan</span>
                    </li>
                  </ul>
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors"
              >
                Konsultasikan Kebutuhan Anda
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

export default PropertiesPage;
