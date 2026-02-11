
import React from 'react';
import { ALFADES_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Sobre Nosotros</h2>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 leading-relaxed italic">
            "{ALFADES_INFO.fullName}"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold mb-3">Nuestra Sede</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Domiciliados en el municipio de Medellín, Antioquia, con proyección nacional e internacional. Nuestra base operativa es el corazón de la innovación solidaria.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Objeto Social</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Contribuir al mejoramiento de la calidad de vida mediante propuestas basadas en economías populares y comunitarias para los sectores más vulnerables.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">Visión Tecnológica</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Implementar herramientas pedagógicas, científicas y tecnológicas que faciliten el acceso al conocimiento y optimicen las cadenas productivas agroecológicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
