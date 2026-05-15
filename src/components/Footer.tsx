import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-solaria-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-6">
              SOLARIA
              <span className="block text-[10px] uppercase tracking-[0.3em] font-sans font-light mt-[-4px]">Semijoias</span>
            </div>
            <p className="text-solaria-white/60 text-sm leading-relaxed mb-8">
              Valorizando sua beleza e iluminando sua essência através de peças exclusivas e sofisticadas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/solaria_semijoiass/" target="_blank" rel="noreferrer" className="hover:text-solaria-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-solaria-gold transition-colors"><Facebook size={20} /></a>
              <a href="mailto:contato@solaria.com.br" className="hover:text-solaria-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-solaria-gold">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-solaria-white/60">
              <li><a href="#colecao" className="hover:text-solaria-gold transition-colors">Nova Coleção</a></li>
              <li><a href="#colecao" className="hover:text-solaria-gold transition-colors">Mais Vendidos</a></li>
              <li><a href="#sobre" className="hover:text-solaria-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-solaria-gold transition-colors">Cuidado com as Peças</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-solaria-gold">Atendimento</h4>
            <ul className="space-y-4 text-sm text-solaria-white/60">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-solaria-gold" />
                <span>+81 996-89-9941</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-solaria-gold" />
                <span>Showroom Online</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-solaria-gold" />
                <span>contato@solaria.com.br</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-solaria-gold">Newsletter</h4>
            <p className="text-sm text-solaria-white/60 mb-6">Receba novidades e ofertas exclusivas Solaria.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-transparent border-b border-solaria-white/20 py-2 text-sm w-full focus:outline-none focus:border-solaria-gold transition-colors"
              />
              <button className="ml-4 text-solaria-gold uppercase tracking-widest text-xs font-bold">Enviar</button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-solaria-white/10 text-center text-[10px] text-solaria-white/40 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Solaria Semijoias. Todos os direitos reservados. 
          <span className="mx-2">|</span> 
          Desenvolvido com sofisticação.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
