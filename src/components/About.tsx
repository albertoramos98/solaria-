import { motion } from 'framer-motion';
import logo from '../assets/solaria.png';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-solaria-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-solaria-gold"></div>
            <div className="relative z-10 w-full h-[400px] md:h-[500px] bg-solaria-beige/10 flex items-center justify-center shadow-2xl p-12">
              <img 
                src={logo} 
                alt="Logo Solaria" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-solaria-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-solaria-black mb-8 leading-tight">
                Cada detalhe, <br />
                <span className="italic text-solaria-gold">um novo brilho.</span>
              </h2>
              <p className="text-solaria-black/70 text-lg mb-8 font-light leading-relaxed">
                Na Solaria, acreditamos que a semijoia é mais do que um acessório; é uma extensão da sua personalidade e um reflexo da sua beleza interior.
              </p>
              <p className="text-solaria-black/70 text-lg mb-10 font-light leading-relaxed">
                Nascida da paixão pelo design minimalista e pela sofisticação, nossa curadoria foca em peças atemporais, delicadas e de altíssima qualidade, pensadas para a mulher moderna que não abre mão da elegância no seu dia a dia.
              </p>
              <div className="p-8 border-l-2 border-solaria-gold bg-solaria-beige/20 italic font-serif text-xl text-solaria-black/80">
                “Nossa missão é valorizar sua beleza e iluminar sua essência através de detalhes que encantam.”
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
