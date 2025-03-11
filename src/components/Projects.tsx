
import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('semua');
  
  const projects = [
    {
      id: 1,
      title: 'Green Residence',
      location: 'Bogor, Jawa Barat',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'perumahan',
      completed: 'Completed 2022',
    },
    {
      id: 2,
      title: 'Harmony Hills',
      location: 'Sentul, Jawa Barat',
      image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
      category: 'perumahan',
      completed: 'Completed 2021',
    },
    {
      id: 3,
      title: 'Urban Heights',
      location: 'Jakarta Selatan',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'apartemen',
      completed: 'Completed 2023',
    },
    {
      id: 4,
      title: 'Forest View Estates',
      location: 'Bandung, Jawa Barat',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'perumahan',
      completed: 'Completed 2020',
    },
    {
      id: 5,
      title: 'Sunrise Valley',
      location: 'Surabaya, Jawa Timur',
      image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'komersial',
      completed: 'Completed 2021',
    },
    {
      id: 6,
      title: 'Garden Terraces',
      location: 'Depok, Jawa Barat',
      image: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'perumahan',
      completed: 'Ongoing',
    },
  ];
  
  const filteredProjects = activeTab === 'semua' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
    
  const categories = [
    { id: 'semua', label: 'Semua Proyek' },
    { id: 'perumahan', label: 'Perumahan' },
    { id: 'apartemen', label: 'Apartemen' },
    { id: 'komersial', label: 'Komersial' },
  ];

  return (
    <section id="proyek" className="section-padding bg-natural-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-natural-200 text-natural-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Portofolio Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">
            Proyek <span className="text-primary">Unggulan</span> Kami
          </h2>
          <p className="text-natural-700 text-lg">
            Kami telah membangun berbagai jenis properti, mulai dari perumahan, apartemen, hingga bangunan komersial.
            Berikut adalah beberapa proyek unggulan yang telah kami kembangkan.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-natural-700 hover:bg-natural-100'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                  {project.completed}
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
        
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors"
          >
            Lihat Semua Proyek
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
