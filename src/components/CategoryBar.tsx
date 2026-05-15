import { categories } from '../data/products';

const CategoryBar = () => {
  return (
    <section className="py-16 bg-solaria-white overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="container mx-auto px-6 flex justify-start md:justify-center space-x-10 md:space-x-16">
        {categories.map((category) => (
          <a 
            key={category.name}
            href="#colecao"
            className="group flex flex-col items-center space-y-4 min-w-[80px]"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-solaria-beige flex items-center justify-center overflow-hidden bg-white group-hover:border-solaria-gold transition-all duration-500 p-1 shadow-sm">
               <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-solaria-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-solaria-black/60 group-hover:text-solaria-gold transition-colors">
              {category.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryBar;
