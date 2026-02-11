
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <Logo className="h-20" />
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#mision" className="hover:text-emerald-600 transition-colors">Misión & Visión</a>
            <a href="#tiendas" className="hover:text-emerald-600 transition-colors">Tiendas</a>
            <a href="#asociados" className="hover:text-emerald-600 transition-colors">Asóciate</a>
          </div>
          <button className="bg-[#0f172a] hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
