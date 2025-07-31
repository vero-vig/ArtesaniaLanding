export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-soft text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-fuchsia-custom mb-4">Artesanías</h3>
            <p className="text-gray-300 leading-relaxed">
              Creamos piezas únicas hechas a mano con amor y dedicación. Cada artesanía cuenta una historia especial.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("#hero")}
                  className="text-gray-300 hover:text-fuchsia-custom transition-colors duration-300"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-300 hover:text-fuchsia-custom transition-colors duration-300"
                >
                  Acerca
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#gallery")}
                  className="text-gray-300 hover:text-fuchsia-custom transition-colors duration-300"
                >
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-300 hover:text-fuchsia-custom transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>Bogotá, Colombia</p>
              <p>+57 300 123 4567</p>
              <p>info@artesanias.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Artesanías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
