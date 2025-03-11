
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-natural-50 px-4">
      <div className="text-center">
        <div className="inline-block bg-natural-200 text-natural-800 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-down">
          Halaman Tidak Ditemukan
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-down" style={{ animationDelay: '100ms' }}>
          <span className="text-primary">404</span>
        </h1>
        <p className="text-xl text-natural-700 mb-8 animate-fade-down" style={{ animationDelay: '200ms' }}>
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <a 
          href="/" 
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors animate-fade-down"
          style={{ animationDelay: '300ms' }}
        >
          <ArrowLeft size={18} />
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
