import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-shopping.jpg";
import guideMockup from "@/assets/guide-mockup.jpg";

export const Hero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-sand to-off-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="section-container py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
              🔥 Mais vendido
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="text-gradient">PARE</span> de cair em pegadinhas e aprenda a escolher os{" "}
              <span className="text-primary">melhores produtos</span> no mercado
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Saiba exatamente quais produtos colocar no carrinho e quais evitar — sem precisar gastar horas analisando rótulos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="btn-pulse"
                onClick={scrollToCTA}
              >
                Quero o meu Guia de Compras
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Mais de <span className="font-semibold text-foreground">1.000 pessoas</span> transformaram suas compras
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Pessoa confiante fazendo compras saudáveis no supermercado" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Mockup */}
              <div className="absolute -bottom-8 -left-8 w-48 md:w-56 rounded-xl shadow-elevated bg-white p-2 card-hover">
                <img 
                  src={guideMockup} 
                  alt="Mockup do Guia de Compras Inteligentes" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};