import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, Bed, Bath, Square, MapPin, Share2, Heart, Phone } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  
  // Sample property data - in a real app this would come from an API
  const properties = [
    {
      id: "1",
      title: "Cluster Harmoni Asri Type 45/90",
      location: "Bogor, Jawa Barat",
      price: "850.000.000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1577552568192-467a12a7f376?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      specs: {
        beds: 2,
        baths: 1,
        size: 45,
        landSize: 90,
      },
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Carport",
        "Ruang Tamu",
        "Ruang Keluarga",
        "Dapur",
        "Taman Depan",
      ],
      description: "Hunian modern minimalis dengan konsep terbuka dan pencahayaan alami yang optimal. Terletak di kawasan yang asri dan sejuk, dekat dengan fasilitas umum seperti sekolah, rumah sakit, dan pusat perbelanjaan. Dibangun dengan material berkualitas dan desain yang mengutamakan kenyamanan keluarga.",
      category: "rumah",
      popular: true,
    },
    {
      id: "2",
      title: "Cluster Harmoni Asri Type 60/120",
      location: "Bogor, Jawa Barat",
      price: "1.250.000.000",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      ],
      specs: {
        beds: 3,
        baths: 2,
        size: 60,
        landSize: 120,
      },
      features: [
        "3 Kamar Tidur",
        "2 Kamar Mandi",
        "Carport untuk 2 Mobil",
        "Ruang Tamu",
        "Ruang Keluarga",
        "Dapur Modern",
        "Taman Depan & Belakang",
        "Ruang Kerja",
      ],
      description: "Hunian nyaman dengan desain modern minimalis di kawasan strategis Bogor. Menawarkan ruang yang lebih luas untuk keluarga dengan 3 kamar tidur dan 2 kamar mandi. Dibangun dengan kualitas terbaik dan perhatian terhadap detail untuk memastikan kenyamanan penghuni.",
      category: "rumah",
      popular: true,
    },
    {
      id: "3",
      title: "Urban Heights Apartment Studio",
      location: "Jakarta Selatan",
      price: "650.000.000",
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      images: [
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      ],
      specs: {
        beds: 1,
        baths: 1,
        size: 28,
        landSize: 28,
      },
      features: [
        "Studio Apartment",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur Kompak",
        "Balkon",
        "Fasilitas Kolam Renang",
        "Fitness Center",
        "Area Parkir",
      ],
      description: "Apartemen studio modern di pusat kota Jakarta. Sempurna untuk profesional muda atau investasi dengan lokasi strategis dekat pusat bisnis dan hiburan. Dilengkapi berbagai fasilitas seperti kolam renang, fitness center, dan keamanan 24 jam.",
      category: "apartemen",
      popular: false,
    },
    {
      id: "4",
      title: "Urban Heights Apartment 2BR",
      location: "Jakarta Selatan",
      price: "1.100.000.000",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      ],
      specs: {
        beds: 2,
        baths: 1,
        size: 48,
        landSize: 48,
      },
      features: [
        "2 Kamar Tidur",
        "1 Kamar Mandi",
        "Ruang Tamu",
        "Dapur Modern",
        "Balkon Luas",
        "Fasilitas Kolam Renang",
        "Fitness Center",
        "Area Parkir",
        "Keamanan 24 Jam",
      ],
      description: "Apartemen 2 kamar tidur yang nyaman di kompleks Urban Heights. Lokasi strategis di Jakarta Selatan dengan akses mudah ke berbagai fasilitas kota. Unit yang luas dengan balkon dan pemandangan kota. Dilengkapi dengan berbagai fasilitas premium untuk kenyamanan penghuni.",
      category: "apartemen",
      popular: true,
    },
    {
      id: "5",
      title: "Ruko Sunrise Valley 2 Lantai",
      location: "Surabaya, Jawa Timur",
      price: "2.500.000.000",
      image: "https://images.unsplash.com/photo-1520355256553-57dc4fd22640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      images: [
        "https://images.unsplash.com/photo-1520355256553-57dc4fd22640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      ],
      specs: {
        beds: 1,
        baths: 2,
        size: 100,
        landSize: 50,
      },
      features: [
        "2 Lantai",
        "Area Usaha Luas",
        "Toilet 2 Unit",
        "Listrik 3500 Watt",
        "Lahan Parkir",
        "Keamanan 24 Jam",
        "Lokasi Strategis",
        "Akses Jalan Lebar",
      ],
      description: "Ruko 2 lantai di kompleks komersial Sunrise Valley yang strategis di Surabaya. Lokasi di jalan utama dengan visibilitas tinggi dan lalu lintas ramai. Cocok untuk berbagai jenis usaha retail maupun perkantoran. Bangunan kokoh dengan desain modern dan fungsional.",
      category: "ruko",
      popular: false,
    },
    {
      id: "6",
      title: "Cluster Harmoni Asri Type 75/150",
      location: "Bogor, Jawa Barat",
      price: "1.750.000.000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
        "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      specs: {
        beds: 4,
        baths: 2,
        size: 75,
        landSize: 150,
      },
      features: [
        "4 Kamar Tidur",
        "2 Kamar Mandi",
        "Carport untuk 2 Mobil",
        "Ruang Tamu Luas",
        "Ruang Keluarga",
        "Ruang Makan",
        "Dapur Modern",
        "Taman Depan & Belakang",
        "Ruang Kerja/Perpustakaan",
      ],
      description: "Hunian mewah di kawasan elite Cluster Harmoni Asri. Rumah dengan 4 kamar tidur dan taman yang luas, ideal untuk keluarga besar yang menginginkan kenyamanan dan privasi. Dibangun dengan material premium dan desain yang elegan untuk memberikan kualitas hidup terbaik bagi penghuninya.",
      category: "rumah",
      popular: true,
    },
  ];

  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-natural-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Properti tidak ditemukan</h2>
          <p className="mb-6">Properti yang Anda cari tidak tersedia.</p>
          <Link to="/properties" className="bg-primary text-white px-6 py-2 rounded-full">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  // Rekomendasi properti serupa
  const similarProperties = properties
    .filter(p => p.category === property.category && p.id !== property.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container">
          <div className="mb-6">
            <Link 
              to="/properties" 
              className="inline-flex items-center text-natural-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Katalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <img 
                      src={property.images[0]} 
                      alt={property.title} 
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-lg" 
                    />
                  </div>
                  {property.images.slice(1).map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${property.title} - ${index + 1}`} 
                      className="w-full h-[150px] object-cover rounded-lg" 
                    />
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h1 className="text-2xl md:text-3xl font-serif font-bold mb-2">{property.title}</h1>
                <div className="flex items-center gap-2 text-natural-600 mb-4">
                  <MapPin size={18} />
                  <span>{property.location}</span>
                </div>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-natural-100 p-2 rounded-full">
                      <Bed size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-natural-500">Kamar Tidur</p>
                      <p className="font-medium">{property.specs.beds}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-natural-100 p-2 rounded-full">
                      <Bath size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-natural-500">Kamar Mandi</p>
                      <p className="font-medium">{property.specs.baths}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-natural-100 p-2 rounded-full">
                      <Square size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-natural-500">Luas Bangunan</p>
                      <p className="font-medium">{property.specs.size} m²</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-natural-100 p-2 rounded-full">
                      <Square size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-natural-500">Luas Tanah</p>
                      <p className="font-medium">{property.specs.landSize} m²</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-serif font-semibold mb-4">Deskripsi</h2>
                <p className="text-natural-700 leading-relaxed mb-6">
                  {property.description}
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-xl font-serif font-semibold mb-4">Fasilitas & Fitur</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif font-semibold mb-4">Lokasi</h2>
                <div className="bg-natural-100 h-[300px] rounded-lg flex items-center justify-center">
                  <p className="text-natural-600">Peta Lokasi Properti</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-natural-200 rounded-xl p-6 shadow-sm sticky top-28">
                <div className="mb-6">
                  <p className="text-2xl font-serif font-bold text-primary">
                    Rp {formatPrice(property.price)}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <a 
                    href="#" 
                    className="bg-primary hover:bg-primary/90 text-white w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={18} />
                    Hubungi Agen
                  </a>
                  <div className="flex gap-3">
                    <button className="bg-natural-100 hover:bg-natural-200 text-natural-800 flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Heart size={18} />
                      Simpan
                    </button>
                    <button className="bg-natural-100 hover:bg-natural-200 text-natural-800 flex-1 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <Share2 size={18} />
                      Bagikan
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-natural-200 pt-6">
                  <h3 className="font-medium mb-3">Agen Properti</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-natural-200 flex items-center justify-center">
                      <span className="font-medium text-natural-600">AS</span>
                    </div>
                    <div>
                      <p className="font-medium">Andi Suryawan</p>
                      <p className="text-sm text-natural-600">AlAsri Property</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rekomendasi properti serupa */}
          {similarProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-semibold mb-8">Properti Serupa</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarProperties.map((property) => (
                  <div 
                    key={property.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-md card-hover border border-natural-200"
                  >
                    <div className="relative overflow-hidden h-[220px]">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-natural-700 hover:text-red-500 transition-colors">
                        <Heart size={18} />
                      </button>
                      {property.popular && (
                        <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded text-xs font-medium text-white">
                          Populer
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin size={18} className="text-primary shrink-0 mt-1" />
                        <span className="text-natural-600 text-sm">{property.location}</span>
                      </div>
                      <h3 className="text-lg font-serif font-semibold mb-2 line-clamp-1">{property.title}</h3>
                      <p className="text-primary font-medium mb-4">
                        Rp {formatPrice(property.price)}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4 border-t border-natural-200 pt-4">
                        <div className="flex items-center gap-2">
                          <Bed size={16} className="text-natural-600" />
                          <span className="text-natural-600 text-sm">{property.specs.beds} Kamar</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bath size={16} className="text-natural-600" />
                          <span className="text-natural-600 text-sm">{property.specs.baths} Kamar Mandi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Square size={16} className="text-natural-600" />
                          <span className="text-natural-600 text-sm">{property.specs.size} m²</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/properties/${property.id}`} 
                        className="bg-primary text-white w-full py-2 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                      >
                        Lihat Detail
                        <ArrowRight size={16} />
                      </Link>
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

export default PropertyDetail;
