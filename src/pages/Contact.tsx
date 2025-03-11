
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactContent from '@/components/Contact';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-natural-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-natural-200 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Hubungi Kami
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Informasi <span className="text-primary">Kontak</span>
              </h1>
              <p className="text-natural-700 text-lg">
                Silahkan hubungi kami untuk informasi lebih lanjut mengenai produk dan layanan kami.
                Tim kami siap membantu Anda.
              </p>
            </div>
          </div>
        </section>
        
        <ContactContent />

        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-natural-50 p-8 rounded-xl text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <MapPin className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Alamat Kantor</h3>
                <address className="text-natural-700 not-italic">
                  Jl. Asri Sejahtera No. 123, <br />
                  Jakarta Selatan, 12870
                </address>
              </div>
              
              <div className="bg-natural-50 p-8 rounded-xl text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Phone className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Telepon</h3>
                <p className="text-natural-700">
                  <a href="tel:+62218765432" className="hover:text-primary">+62 21 8765 4321</a>
                </p>
                <p className="text-natural-700">
                  <a href="tel:+6281234567890" className="hover:text-primary">+62 812 3456 7890</a>
                </p>
              </div>
              
              <div className="bg-natural-50 p-8 rounded-xl text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Mail className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Email</h3>
                <p className="text-natural-700">
                  <a href="mailto:info@alasrihunian.com" className="hover:text-primary">info@alasrihunian.com</a>
                </p>
                <p className="text-natural-700">
                  <a href="mailto:marketing@alasrihunian.com" className="hover:text-primary">marketing@alasrihunian.com</a>
                </p>
              </div>
            </div>

            <div className="bg-natural-50 p-8 rounded-xl mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">Kantor Marketing Gallery</h3>
                  <p className="text-natural-700 mb-6">
                    Kunjungi kantor marketing gallery kami untuk melihat maket dan unit contoh dari proyek-proyek kami.
                    Tim marketing kami siap membantu dan memberikan informasi yang Anda butuhkan.
                  </p>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold mb-2">Jam Operasional</h4>
                      <div className="space-y-1 text-natural-700">
                        <p>Senin - Jumat: 08:00 - 17:00</p>
                        <p>Sabtu: 09:00 - 15:00</p>
                        <p>Minggu: 10:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-primary hover:bg-primary/90 text-white px-5 py-2 mt-4 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    Lihat di Google Maps
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                    alt="Marketing Gallery" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.696109710054!2d106.79729921891505!3d-6.226923169834366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sSenayan%2C%20Kecamatan%20Kebayoran%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1649146723485!5m2!1sid!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl mb-8"
              title="AlAsri Hunian Location"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
