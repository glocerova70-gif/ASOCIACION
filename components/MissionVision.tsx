
import React from 'react';
import { ALFADES_INFO } from '../constants';

const MissionVision: React.FC = () => {
  return (
    <section id="mision" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-emerald-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Identidad Institucional</h2>
          <p className="text-slate-500 font-medium text-sm uppercase tracking-widest">Compromiso con la Solidaridad</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative group transition-all hover:-translate-y-2">
            <div className="absolute -top-6 left-10 bg-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
              Misión
            </div>
            <div className="mt-4 text-slate-700 text-lg leading-relaxed font-medium">
              <p>{ALFADES_INFO.mission}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-50 text-slate-400 text-xs italic">
              {ALFADES_INFO.source}
            </div>
          </div>

          {/* Visión */}
          <div className="bg-[#1e293b] p-10 rounded-[2.5rem] shadow-xl shadow-slate-900/10 relative group transition-all hover:-translate-y-2 text-white">
            <div className="absolute -top-6 left-10 bg-slate-100 text-[#1e293b] px-6 py-2 rounded-full font-bold shadow-lg">
              Visión
            </div>
            <div className="mt-4 text-slate-200 text-lg leading-relaxed font-medium">
              <p>{ALFADES_INFO.vision}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700/50 text-slate-400 text-xs italic">
              Proyección estratégica nacional e internacional
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
