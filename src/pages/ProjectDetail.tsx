
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, MapPin, Calendar, FileText, Users, Building, Home } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Sample projects data
  const projects = [
    {
      id: "1",
      title: "Green Residence",
      location: "Bogor, Jawa Barat",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      category: "perumahan",
      completed: "2022",
      units: 120,
      area: "10 Hektar",
      description: "Green Residence adalah kompleks perumahan modern dengan konsep ramah lingkungan. Dibangun di area seluas 10 hektar, Green Residence menawarkan lingkungan yang asri dan sejuk. Lokasi yang strategis, dekat dengan akses tol dan fasilitas umum, menjadikan Green Residence pilihan ideal untuk tempat tinggal keluarga modern.",
      features: [
        "120 Unit Rumah",
        "Club House",
        "Taman Bermain",
        "Area Komersial",
        "Jogging Track",
        "Keamanan 24 Jam",
        "Area Hijau 30%",
        "CCTV"
      ],
      highlights: "Perumahan Green Residence menerapkan konsep ramah lingkungan dengan area hijau sebesar 30% dari total luas lahan. Selain itu, setiap unit rumah dilengkapi dengan sistem rainwater harvesting dan solar panel untuk menghemat energi.",
      properties: [1, 2, 6] // ID properti yang tersedia di proyek ini
    },
    {
      id: "2",
      title: "Harmony Hills",
      location: "Sentul, Jawa Barat",
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      images: [
        "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
        "https://images.unsplash.com/photo-1639981360517-dc85f1a19311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1619546614848-8748d11e4a93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      category: "perumahan",
      completed: "2021",
      units: 80,
      area: "8 Hektar",
      description: "Harmony Hills adalah perumahan premium di kawasan Sentul, Bogor. Dengan pemandangan perbukitan yang indah, Harmony Hills menawarkan suasana tinggal yang sejuk dan tenang, jauh dari hiruk pikuk kota. Perumahan ini dirancang dengan konsep modern minimalis namun tetap mempertahankan keselarasan dengan alam sekitar.",
      features: [
        "80 Unit Rumah",
        "Kolam Renang",
        "Taman Bermain",
        "Lapangan Tennis",
        "Clubhouse",
        "Gym",
        "Keamanan 24 Jam",
        "CCTV"
      ],
      highlights: "Harmony Hills dirancang dengan mempertahankan kontur tanah asli, sehingga menciptakan pemandangan yang indah dari setiap sudut perumahan. Lokasi yang berada di ketinggian memberikan udara yang sejuk dan bebas polusi.",
      properties: [] // ID properti yang tersedia di proyek ini
    },
    {
      id: "3",
      title: "Urban Heights",
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      ],
      category: "apartemen",
      completed: "2023",
      units: 250,
      area: "1.5 Hektar",
      description: "Urban Heights adalah apartemen modern di pusat Jakarta Selatan. Dengan lokasi yang strategis, penghuni dapat dengan mudah mengakses berbagai fasilitas penting seperti pusat perbelanjaan, rumah sakit, dan universitas terkemuka. Urban Heights menawarkan gaya hidup urban yang praktis dan nyaman.",
      features: [
        "250 Unit Apartemen",
        "Kolam Renang",
        "Fitness Center",
        "Business Lounge",
        "Sky Garden",
        "Jogging Track",
        "Area BBQ",
        "Function Hall"
      ],
      highlights: "Urban Heights dirancang dengan konsep 'vertical garden' yang menggabungkan area hijau di setiap lantai bangunan. Hal ini menciptakan lingkungan yang sejuk dan menyegarkan di tengah hiruk pikuk kota Jakarta.",
      properties: [3, 4] // ID properti yang tersedia di proyek ini
    },
  ];

  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-natural-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Proyek tidak ditemukan</h2>
          <p className="mb-6">Proyek yang Anda cari tidak tersedia.</p>
          <Link to="/projects" className="bg-primary text-white px-6 py-2 rounded-full">
            Kembali ke Proyek
          </Link>
        </div>
      </div>
    );
  }

  // Rekomendasi proyek serupa
  const similarProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  // State for images
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container">
          <div className="mb-6">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-natural-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Proyek
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{project.title}</h1>
            <div className="flex items-center gap-2 text-natural-600">
              <MapPin size={18} />
              <span>{project.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 border border-natural-200 rounded-xl shadow-sm md:col-span-2 lg:col-span-2">
              <div className="mb-6">
                <div className="relative h-[400px] mb-4">
                  <img 
                    src={project.images[activeImage]} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                  
                  {/* Image navigation */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <button 
                      onClick={() => setActiveImage(prev => (prev === 0 ? project.images.length - 1 : prev - 1))}
                      className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-natural-700 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-4">
                    <button 
                      onClick={() => setActiveImage(prev => (prev === project.images.length - 1 ? 0 : prev + 1))}
                      className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-natural-700 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-20 h-20 rounded-lg overflow-hidden ${activeImage === index ? 'ring-2 ring-primary' : 'opacity-70'}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - ${index + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-serif font-semibold mb-4">Deskripsi Proyek</h2>
                <p className="text-natural-700 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-natural-700 leading-relaxed mb-6">
                  {project.highlights}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-semibold mb-4">Fasilitas & Fitur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-natural-200 rounded-xl p-6 shadow-sm sticky top-28 mb-6">
                <h3 className="text-lg font-serif font-semibold mb-4">Detail Proyek</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 border-b border-natural-100 pb-3">
                    <Calendar size={18} className="text-primary" />
                    <div>
                      <p className="text-natural-600 text-sm">Tahun Selesai</p>
                      <p className="font-medium">{project.completed}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-natural-100 pb-3">
                    <Building size={18} className="text-primary" />
                    <div>
                      <p className="text-natural-600 text-sm">Jumlah Unit</p>
                      <p className="font-medium">{project.units} Unit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-natural-100 pb-3">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <p className="text-natural-600 text-sm">Luas Area</p>
                      <p className="font-medium">{project.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home size={18} className="text-primary" />
                    <div>
                      <p className="text-natural-600 text-sm">Kategori</p>
                      <p className="font-medium capitalize">{project.category}</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Tanyakan Informasi Lebih Lanjut
                </Link>
              </div>

              {/* Lokasi */}
              <div className="bg-white border border-natural-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-serif font-semibold mb-4">Lokasi</h3>
                <div className="bg-natural-100 h-[200px] rounded-lg flex items-center justify-center mb-4">
                  <p className="text-natural-600">Peta Lokasi Proyek</p>
                </div>
                <p className="text-natural-700">
                  {project.location} <br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Hubungi Kami */}
          <div className="bg-natural-50 rounded-xl p-8 mb-16">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif font-semibold mb-2">Tertarik dengan Proyek Ini?</h2>
              <p className="text-natural-700">
                Hubungi tim kami untuk informasi lebih lanjut tentang {project.title}
              </p>
            </div>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
              >
                Hubungi Kami
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Proyek Serupa */}
          {similarProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-8">Proyek Serupa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {similarProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover group"
                  >
                    <div className="relative overflow-hidden h-[250px]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-natural-800">
                        Completed {project.completed}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-2 mb-3">
                        <MapPin size={18} className="text-primary shrink-0 mt-1" />
                        <span className="text-natural-600 text-sm">{project.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-4">{project.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-natural-600 capitalize">{project.category}</span>
                        <Link 
                          to={`/projects/${project.id}`} 
                          className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1"
                        >
                          Detail
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
