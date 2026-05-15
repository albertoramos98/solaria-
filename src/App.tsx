import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-solaria-white">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryBar />
        <ProductGrid />
        
        {/* Testimonials Simulation */}
        <section className="py-24 bg-solaria-beige/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-solaria-gold uppercase tracking-[0.4em] text-xs font-semibold mb-2 block">Depoimentos</span>
              <h2 className="text-3xl font-serif text-solaria-black">O que nossas clientes dizem</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Mariana S.", text: "As peças são simplesmente maravilhosas. A qualidade superou minhas expectativas, brilham muito!" },
                { name: "Camila R.", text: "Atendimento impecável e entrega rápida. O cuidado com a embalagem demonstra o carinho da marca." },
                { name: "Beatriz M.", text: "Minha loja favorita de semijoias. O design minimalista é perfeito para qualquer ocasião." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 border border-solaria-beige shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex text-solaria-gold mb-4 text-sm">★★★★★</div>
                  <p className="text-solaria-black/70 italic mb-6 font-light">“{item.text}”</p>
                  <p className="font-serif text-sm font-bold">— {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <InstagramFeed />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/81996899941" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center hover:bg-[#128C7E] group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-solaria-black px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-solaria-beige">
          Fale conosco no WhatsApp
        </span>
      </a>
    </div>
  );
}

export default App;
