
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  textColor?: string;
  taglineColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "h-20", 
  showTagline = false,
  taglineColor = "text-slate-800"
}) => {
  // URL del logotipo real proporcionada por el usuario
  const logoUrl = "https://eelrzixjwuvmexzjwvgu.supabase.co/storage/v1/object/public/IMAGENES/WhatsApp%20Image%202026-02-10%20at%2023.52.48.jpeg";

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="h-full flex items-center bg-white p-1.5 rounded-xl shadow-md border border-slate-100 transition-all hover:shadow-xl hover:scale-105 duration-300">
        {/* Renderizado del logotipo real de la asociación con mayor destaque */}
        <img 
          src={logoUrl} 
          alt="Logotipo Oficial ALFADES" 
          className="h-full w-auto object-contain rounded-lg"
          style={{ minWidth: '40px' }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/400x120/ffffff/0f172a?text=ALFADES+ASOCIACIÓN';
          }}
        />
      </div>

      {showTagline && (
        <div className={`w-full text-center mt-3 ${taglineColor}`}>
          <p className="text-[0.6rem] sm:text-[0.7rem] font-black tracking-[0.2em] uppercase whitespace-nowrap opacity-100 leading-tight">
            ASOCIACIÓN PARA EL DESARROLLO SOCIOECONÓMICO<br/>
            Y SOLIDARIO DE COLOMBIA
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
