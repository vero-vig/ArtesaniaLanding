import { Heart, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-pink-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black-soft">
              Acerca de Nuestras
              <span className="text-fuchsia-custom"> Artesanías</span>
            </h2>
            <p className="text-lg text-gray-soft leading-relaxed">
              Cada una de nuestras creaciones nace del amor por el arte manual y la dedicación al detalle. Con más de 10 años de experiencia, transformamos materiales nobles en piezas únicas que llevan consigo la esencia de lo auténtico.
            </p>
            <p className="text-lg text-gray-soft leading-relaxed">
              Nuestro compromiso es crear productos que no solo sean hermosos, sino que también cuenten historias y conecten con las emociones de quienes los poseen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card className="text-center p-6 bg-white shadow-sm">
                <CardContent className="pt-6">
                  <Heart className="h-8 w-8 text-fuchsia-custom mb-3 mx-auto" />
                  <h3 className="font-semibold text-black-soft mb-2">Hecho con Amor</h3>
                  <p className="text-gray-soft text-sm">Cada pieza es creada con pasión y dedicación</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-white shadow-sm">
                <CardContent className="pt-6">
                  <Leaf className="h-8 w-8 text-fuchsia-custom mb-3 mx-auto" />
                  <h3 className="font-semibold text-black-soft mb-2">Materiales Nobles</h3>
                  <p className="text-gray-soft text-sm">Utilizamos solo los mejores materiales</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Manos de artesano creando cerámica" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-fuchsia-custom rounded-full flex items-center justify-center shadow-lg">
              <Heart className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
