
import React, { useState } from 'react';
import { ArrowRight, Bed, Bath, SquareFeet, MapPin, Heart } from 'lucide-react';

const Properties = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const properties = [
    {
      id: 1,
      title: 'Cluster Harmoni Asri Type 45/90',
      location: 'Bogor, Jawa Barat',
      price: '850.000.000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      specs: {
        beds: 2,
        baths: 1,
        size: 45
      },
      category: 'rumah',
      popular: true
    },
    {
      id: 2,
      title: 'Cluster Harmoni Asri Type 60/120',
      location: 'Bogor, Jawa Barat',
      price: '1.250.000.000',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      specs: {
        beds: 3,
        baths: 2,
        size: 60
      },
      category: 'rumah',
      popular: true
    },
    {
      id: 3,
      title: 'Urban Heights Apartment Studio',
      location: 'Jakarta Selatan',
      price: '650.000.000',
      image: 'https://images.unsplash.com/photo-1603425013520-e36cca646ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      specs: {
        beds: 1,
        baths: 1,
        size: 28
      },
      category: 'apartemen',
      popular: false
    },
    {
      id: 4,
      title: 'Urban Heights Apartment 2BR',
      location: 'Jakarta Selatan',
      price: '1.100.000.000',
      image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      specs: {
        beds: 2,
        baths: 1,
        size: 48
      },
      category: 'apartemen',
      popular: true
    },
    {
      id: 5,
      title: 'Ruko Sunrise Valley 2 Lantai',
      location: 'Surabaya, Jawa Timur',
      price: '2.500.000.000',
      image: 'https://images.unsplash.com/photo-1520355256553-57dc4fd22640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      specs: {
        beds: 1,
        baths: 2,
        size: 100
      },
      category: 'ruko',
      popular: false
    },
    {
      id: 6,
      title: 'Cluster Harmoni Asri Type 75/150',
      location: 'Bogor, Jawa Barat',
      price: '1.750.000.000',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      specs: {
        beds: 4,
        baths: 2,
        size: 75
      },
      category: 'rumah',
      popular: true
    },
  ];
  
  const filteredProperties = activeTab === 'all' 
    ? properties 
    : activeTab === 'popular'
      ? properties.filter(property => property.popular)
      : properties.filter(property => property.category === activeTab);
    
  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'popular', label: 'Populer' },
    { id: 'rumah', label: 'Rumah' },
    { id: 'apartemen', label: 'Apartemen' },
    { id: 'ruko', label: 'Ruko' },
  ];
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  return (
    <section id="properti" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Katalog Hunian
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">
            Temukan <span className="text-primary">Hunian Idaman</span> Anda
          </h2>
          <p className="text-natural-700 text-lg">
            Kami menawarkan berbagai pilihan hunian yang dapat disesuaikan dengan kebutuhan dan 
            budget Anda. Dari rumah tapak, apartemen, hingga ruko komersial.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-natural-100 text-natural-800 hover:bg-natural-200'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
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
                    <SquareFeet size={16} className="text-natural-600" />
                    <span className="text-natural-600 text-sm">{property.specs.size} m²</span>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="bg-primary text-white w-full py-2 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Lihat Detail
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="bg-natural-800 hover:bg-natural-900 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors"
          >
            Lihat Semua Katalog
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
