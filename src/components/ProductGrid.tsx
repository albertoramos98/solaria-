import ProductCard from './ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  return (
    <section id="colecao" className="py-24 bg-solaria-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-solaria-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-3 block">Seleção Exclusiva</span>
          <h2 className="text-3xl md:text-4xl font-serif text-solaria-black tracking-tight">Novidades da Semana</h2>
          <div className="w-12 h-[1px] bg-solaria-gold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (product.id % 4) * 0.1 }}
            >
              <ProductCard 
                name={product.name}
                price={product.price}
                image={product.image}
                whatsappLink={product.whatsappLink}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <a 
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-12 py-5 border border-solaria-black text-solaria-black uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-solaria-black hover:text-white transition-all duration-500"
          >
            Solicitar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
