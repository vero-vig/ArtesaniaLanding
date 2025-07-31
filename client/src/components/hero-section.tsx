import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Creaciones Únicas
          <span className="block text-fuchsia-custom">Hechas a Mano</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
          Descubre el arte de lo hecho a mano. Cada pieza cuenta una historia única.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("#gallery")}
            className="bg-fuchsia-custom hover:bg-fuchsia-custom/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            size="lg"
          >
            Ver Productos
          </Button>
          <Button
            onClick={() => scrollToSection("#about")}
            variant="outline"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            size="lg"
          >
            Conocer Más
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl opacity-70" />
      </div>
    </section>
  );
}
