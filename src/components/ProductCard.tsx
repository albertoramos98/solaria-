import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductProps {
  name: string;
  price: string;
  image: string;
  whatsappLink: string;
}

const ProductCard = ({ name, price, image, whatsappLink }: ProductProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-solaria-beige mb-4 shadow-sm">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-solaria-black/0 group-hover:bg-solaria-black/10 transition-colors duration-300" />
        
        {/* Quick View Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-solaria-white/95 backdrop-blur-sm text-solaria-black py-4 flex items-center justify-center space-x-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-solaria-black hover:text-white transition-all shadow-xl"
          >
            <ShoppingBag size={14} />
            <span>Comprar no WhatsApp</span>
          </a>
        </div>
      </div>
      
      <div className="text-center px-2">
        <h3 className="text-xs uppercase tracking-widest font-medium text-solaria-black/80 mb-2">{name}</h3>
        <p className="text-solaria-gold font-serif text-lg font-bold">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
