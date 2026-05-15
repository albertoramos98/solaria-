import { Instagram } from 'lucide-react';
import anelCoracao from '../assets/products/anel-coracao.png';
import argolinhaGota from '../assets/products/argolinha-gota.png';
import braceleteLiso from '../assets/products/bracelete-liso.png';
import brincoRedondo from '../assets/products/brinco-redondo.png';
import colarDuplo from '../assets/products/Colar-duplo.png';
import pulseiraRiviera from '../assets/products/pulseira-riviera.png';

const InstagramFeed = () => {
  const images = [
    anelCoracao,
    colarDuplo,
    argolinhaGota,
    braceleteLiso,
    pulseiraRiviera,
    brincoRedondo
  ];

  return (
    <section className="py-24 bg-white border-t border-solaria-beige/50">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-6 shadow-lg">
            <Instagram size={30} className="text-white" />
          </div>
          <h2 className="text-3xl font-serif text-solaria-black mb-4 tracking-tight">Siga-nos no Instagram</h2>
          <a 
            href="https://www.instagram.com/solaria_semijoiass/" 
            target="_blank" 
            rel="noreferrer"
            className="text-solaria-gold uppercase tracking-[0.3em] text-xs font-bold hover:opacity-70 transition-opacity"
          >
            @solaria_semijoiass
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 px-2 md:px-0">
          {images.map((img, index) => (
            <a 
              key={index} 
              href="https://www.instagram.com/solaria_semijoiass/" 
              target="_blank" 
              rel="noreferrer"
              className="relative aspect-square overflow-hidden group shadow-sm bg-solaria-beige/5"
            >
              <img 
                src={img} 
                alt={`Instagram ${index}`} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                   <Instagram size={20} className="text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16">
          <a 
            href="https://www.instagram.com/solaria_semijoiass/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-12 py-4 bg-solaria-black text-white uppercase tracking-widest text-[10px] font-bold hover:bg-solaria-gold transition-all duration-500 shadow-xl"
          >
            Ver Feed Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
