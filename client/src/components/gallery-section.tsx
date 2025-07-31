import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Macramé Artesanal",
    price: "$45.000 COP",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Macramé artesanal"
  },
  {
    id: 2,
    name: "Cerámica Única",
    price: "$38.000 COP",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Cerámica artesanal"
  },
  {
    id: 3,
    name: "Joyero Tallado",
    price: "$52.000 COP",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Joyero de madera tallada"
  },
  {
    id: 4,
    name: "Textil Bordado",
    price: "$35.000 COP",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Textil bordado a mano"
  },
  {
    id: 5,
    name: "Cuero Artesanal",
    price: "$42.000 COP",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Accesorios de cuero artesanal"
  },
  {
    id: 6,
    name: "Platos Decorativos",
    price: "$28.000 COP",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Platos pintados a mano"
  },
  {
    id: 7,
    name: "Velas Naturales",
    price: "$25.000 COP",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Velas artesanales con flores secas"
  },
  {
    id: 8,
    name: "Canasta Tejida",
    price: "$48.000 COP",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Canasta tejida a mano"
  }
];

export default function GallerySection() {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-4">
            Nuestra <span className="text-fuchsia-custom">Galería</span>
          </h2>
          <p className="text-lg text-gray-soft max-w-2xl mx-auto">
            Explora nuestra colección de artesanías únicas, cada una diseñada y creada con el máximo cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <img 
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMoreProducts}
              className="bg-fuchsia-custom hover:bg-fuchsia-custom/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Más Productos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
