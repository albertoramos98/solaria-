import { motion } from 'framer-motion';
import backgroundProduct from '../assets/products/pulseira-riviera.png';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background with subtle texture/gradient instead of heavy image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F9F9F9]"></div>
        {/* Very subtle background image - almost a watermark feel */}
        <img 
          src={backgroundProduct} 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-5 mix-blend-multiply blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-solaria-gold uppercase text-[9px] md:text-[11px] font-bold mb-8 block tracking-[0.5em]"
          >
            Sofisticação & Luxo Acessível
          </motion.span>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-solaria-black mb-10 leading-[1.15] tracking-tight">
            Ilumine sua essência <br />
            com <span className="italic font-normal text-solaria-gold">detalhes</span> que encantam.
          </h1>
          
          <p className="text-solaria-black/60 text-sm md:text-base mb-12 font-light max-w-lg mx-auto leading-relaxed uppercase tracking-[0.1em]">
            Semijoias banhadas com design atemporal para a mulher contemporânea.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8">
            <a 
              href="#colecao"
              className="group relative px-12 py-5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-solaria-black transition-transform duration-500 group-hover:scale-105"></div>
              <span className="relative text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                Explorar Coleção
              </span>
            </a>
            <a 
              href="#sobre"
              className="text-solaria-black text-[10px] font-bold uppercase tracking-[0.3em] border-b border-solaria-black/20 pb-1 hover:border-solaria-gold transition-all duration-300"
            >
              Nossa História
            </a>
          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-solaria-gold animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
