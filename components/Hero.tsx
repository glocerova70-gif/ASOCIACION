
import React, { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const [showDocs, setShowDocs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDocs(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const documents = [
    {
      name: "Modelo ECOSS 6 (V6)",
      url: "https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/ECOSS_6_V6_25_2.pdf",
      icon: "📊"
    },
    {
      name: "Economía Solidaria (Parte I)",
      url: "https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/Economia%20solidaria%201.pdf",
      icon: "📚"
    },
    {
      name: "Economía Solidaria (Parte II)",
      url: "https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/Economia%20solidaria%202.pdf",
      icon: "📖"
    }
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6 tracking-wide uppercase">
              Economía Solidaria & Tecnología
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transformando el <span className="text-emerald-600 underline decoration-emerald-200 decoration-8 underline-offset-4">Futuro Social</span> de Colombia.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              En ALFADES impulsamos el desarrollo socioeconómico conectando a pequeños productores con el mercado global a través de innovación y solidaridad.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                Ver Nuestras Tiendas
              </button>
              <a 
                href="https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/4.%20ESTATUTOS%20ALFADES%20FINALES.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-all text-center"
              >
                Conocer Estatutos
              </a>
              
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowDocs(!showDocs)}
                  className="px-6 py-4 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl font-bold hover:bg-emerald-100 transition-all text-center flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span className="text-lg">📄</span> Documentación
                  <svg className={`w-4 h-4 transition-transform ${showDocs ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showDocs && (
                  <div className="absolute top-full mt-2 left-0 right-0 sm:right-auto sm:w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 border-b border-slate-50 mb-1">
                      <span className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">Recursos Disponibles</span>
                    </div>
                    {documents.map((doc, idx) => (
                      <a 
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors font-semibold group"
                      >
                        <span className="text-lg opacity-70 group-hover:opacity-100">{doc.icon}</span>
                        {doc.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-200/30 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Colombian Agriculture Technology"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                  🚀
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Iniciando</p>
                  <p className="text-xs text-slate-500">29 de Enero, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
