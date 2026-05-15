import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-solaria-silver/50' 
        : 'bg-white/80 backdrop-blur-sm py-6 border-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Side: Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-solaria-black hover:text-solaria-gold transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center: Desktop Menu Left */}
        <div className="hidden md:flex flex-1 space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-solaria-gold transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div 
          className="flex flex-col items-center cursor-pointer flex-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-solaria-black">
            SOLARIA
          </div>
          <div className="text-[8px] uppercase tracking-[0.5em] font-sans font-light mt-[-2px] text-solaria-gold">
            Semijoias
          </div>
        </div>

        {/* Right Side: Social & Cart */}
        <div className="flex flex-1 justify-end items-center space-x-8">
          <a 
            href="https://www.instagram.com/solaria_semijoiass/" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:block hover:text-solaria-gold transition-colors duration-300"
          >
            <Instagram size={18} />
          </a>
          <button className="hover:text-solaria-gold transition-colors duration-300 relative group">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-solaria-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-solaria-gold transition-colors">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[73px] bg-white z-[90] transition-transform duration-500 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden flex flex-col items-center pt-20 space-y-12`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-serif uppercase tracking-widest text-solaria-black hover:text-solaria-gold border-b border-transparent hover:border-solaria-gold transition-all pb-2"
          >
            {link.name}
          </a>
        ))}
        <div className="flex space-x-10 pt-10">
          <a href="https://www.instagram.com/solaria_semijoiass/" target="_blank" rel="noreferrer" className="text-solaria-black hover:text-solaria-gold transition-all scale-125">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
