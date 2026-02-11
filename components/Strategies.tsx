
import React from 'react';

const Strategies: React.FC = () => {
  return (
    <section id="tiendas" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Nuevas Estrategias en <br/>
              <span className="text-emerald-400">Tiendas de Economía Solidaria</span>
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Marketplace Global Justo", desc: "Plataforma virtual para exportar productos directamente de comunidades rurales a compradores internacionales." },
                { title: "Trazabilidad Blockchain", desc: "Cada producto cuenta su historia, desde la siembra hasta la entrega, garantizando transparencia." },
                { title: "Pagos Descentralizados", desc: "Facilitamos transacciones seguras para colombianos en el exterior que desean apoyar a sus familias." },
                { title: "Micro-Logística Verde", desc: "Optimización de rutas de entrega para reducir la huella de carbono y costos para el asociado." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-emerald-500/50 flex items-center justify-center shrink-0 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1488459711635-de7ed1189818?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl h-64 w-full object-cover" alt="Organic Market" />
              <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl h-80 w-full object-cover -mt-12" alt="Mobile App" />
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl h-48 w-full object-cover" alt="Farmer" />
              <img src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-2xl h-64 w-full object-cover -mt-20" alt="Global Shipping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
