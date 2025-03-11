
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your server
    console.log(formData);
    // For demo purposes we'll just reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Show success message or handle errors
    alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
  };

  return (
    <section id="kontak" className="section-padding bg-natural-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-natural-200 text-natural-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Hubungi Kami
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Tertarik Dengan <span className="text-primary">Properti Kami?</span>
              </h2>
              <p className="text-natural-700 mb-8">
                Hubungi kami untuk informasi lebih lanjut tentang properti yang kami tawarkan. 
                Tim penjualan kami siap memberikan penjelasan lebih detail dan membantu Anda 
                menemukan hunian yang sesuai dengan kebutuhan.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white shadow-md p-3 rounded-full">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Telepon</h4>
                    <a href="tel:+62218765432" className="text-natural-700 hover:text-primary">+62 21 8765 4321</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white shadow-md p-3 rounded-full">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <a href="mailto:info@alasrihunian.com" className="text-natural-700 hover:text-primary">info@alasrihunian.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white shadow-md p-3 rounded-full">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Kantor</h4>
                    <address className="text-natural-700 not-italic">
                      Jl. Asri Sejahtera No. 123, <br />
                      Jakarta Selatan, 12870
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-serif font-semibold text-lg mb-4">Jam Operasional</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-natural-700">Senin - Jumat</span>
                    <span className="font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-natural-700">Sabtu</span>
                    <span className="font-medium">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-natural-700">Minggu</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif font-semibold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-natural-700 mb-2 text-sm">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-natural-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-natural-700 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-natural-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-natural-700 mb-2 text-sm">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-natural-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-natural-700 mb-2 text-sm">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-natural-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
                    placeholder="Tuliskan pesan atau pertanyaan Anda"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Kirim Pesan
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
