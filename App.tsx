
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Strategies from './components/Strategies';
import ChatAssistant from './components/ChatAssistant';
import Logo from './components/Logo';
import { ALFADES_INFO, ASSOCIATE_CLASSES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Strategies />

        {/* Membership Section */}
        <section id="asociados" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Únete a la Asociación</h2>
              <p className="text-slate-600 max-w-xl mx-auto">Conviértete en actor clave del desarrollo socioeconómico. Conoce nuestras categorías de vinculación.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {ASSOCIATE_CLASSES.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-transparent hover:border-emerald-500 hover:bg-white transition-all group shadow-sm hover:shadow-xl">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.description}</p>
                  <button className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-tighter">
                    Más información <span>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto bg-[#0f172a] rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 italic">"Economía popular para el mundo"</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto relative z-10 leading-relaxed">
              Trabajamos por la inclusión y autonomía de las poblaciones más excluidas, garantizando una mejor calidad de vida a través de la autogestión.
            </p>
            <div className="flex flex-col sm:row gap-4 justify-center relative z-10">
              <button className="bg-emerald-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/20 active:scale-95">
                Iniciar Vinculación
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 flex flex-col items-start">
              <Logo className="h-28 mb-6" showTagline={true} />
              <p className="text-slate-500 text-base max-w-md mb-8 leading-relaxed">
                Asociación dedicada al fortalecimiento de unidades productivas sostenibles y el bienestar integral de las comunidades colombianas.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1">Conéctate</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-8 uppercase text-sm tracking-wider">Contacto</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-2"><span>📍</span> {ALFADES_INFO.address}</li>
                <li className="flex gap-2"><span>📱</span> {ALFADES_INFO.phone}</li>
                <li className="flex gap-2"><span>✉️</span> {ALFADES_INFO.email}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-8 uppercase text-sm tracking-wider">Documentación</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a 
                    href="https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/4.%20ESTATUTOS%20ALFADES%20FINALES.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors underline decoration-slate-200"
                  >
                    Estatutos Finales
                  </a>
                </li>
                <li>
                  <a 
                    href="https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/ECOSS_6_V6_25_2.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors underline decoration-slate-200"
                  >
                    Modelo ECOSS 6
                  </a>
                </li>
                <li>
                  <a 
                    href="https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/Economia%20solidaria%201.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors underline decoration-slate-200"
                  >
                    Economía Solidaria I
                  </a>
                </li>
                <li>
                  <a 
                    href="https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/ALFADES/Economia%20solidaria%202.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors underline decoration-slate-200"
                  >
                    Economía Solidaria II
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-6 text-center md:text-left">
            <p>© {new Date().getFullYear()} {ALFADES_INFO.fullName}.</p>
            <p className="flex items-center gap-2">
              Certificado bajo los principios de la economía solidaria 🇨🇴
            </p>
          </div>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
