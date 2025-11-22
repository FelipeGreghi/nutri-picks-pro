import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, BookOpen, ShoppingCart } from "lucide-react";
const heroImage = "IMG_0912.jpg";

export const Hero = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-off-white">
      <div className="section-container py-12 md:py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up">
            {/* Badge suave */}
            <Badge className="bg-calm-rose/10 text-calm-rose border-calm-rose/20 hover:bg-calm-rose/20 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 inline-flex">
              ✨ Mais de 400 mulheres já têm o guia
            </Badge>

            {/* Título Principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight text-calm-blue">
              O guia completo para{" "}
              <span className="text-calm-rose">fazer compras inteligentes</span>{" "}
              no supermercado
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mais de 100 páginas com fotos reais, comparações práticas e
              recomendações claras para você saber exatamente o que colocar no
              carrinho — sem complicação.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant="cta"
                size="xl"
                className="bg-calm-rose hover:bg-calm-rose/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={scrollToCTA}
              >
                Quero o guia agora
              </Button>
            </div>

            {/* Prova Social Delicada */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 fill-calm-rose text-calm-rose"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Compras mais inteligentes, sem depender de ninguém
              </p>
            </div>

            {/* Cards informativos mobile - mostrar só em telas pequenas */}
            <div className="grid grid-cols-2 gap-4 pt-6 lg:hidden">
              <Card className="p-4 bg-white/80 backdrop-blur border-calm-rose/10 shadow-sm text-center">
                <BookOpen className="w-5 h-5 text-calm-rose mx-auto mb-2" />
                <p className="text-xs font-semibold text-calm-blue">
                  +100 Páginas
                </p>
              </Card>
              <Card className="p-4 bg-white/80 backdrop-blur border-calm-blue/10 shadow-sm text-center">
                <ShoppingCart className="w-5 h-5 text-calm-rose mx-auto mb-2" />
                <p className="text-xs font-semibold text-calm-blue">
                  +24 Categorias
                </p>
              </Card>
            </div>

            {/* Quote mobile - mostrar só em telas pequenas */}
            <Card className="p-4 md:p-6 bg-white border-calm-rose/10 shadow-sm lg:hidden">
              <blockquote className="space-y-3">
                <p className="text-sm md:text-base font-serif text-calm-blue leading-relaxed italic">
                  "Criei este material para ser uma mão amiga no seu dia a dia —
                  simples, real e possível. Assim como eu faço nos meus
                  acompanhamentos"
                </p>
                <footer className="text-calm-rose font-semibold text-sm italic">
                  — Dra. Katrin Gatz
                </footer>
              </blockquote>
            </Card>
          </div>

          {/* Right Content - Imagem Lifestyle (ESCONDER EM MOBILE) */}
          <div className="hidden lg:flex relative lg:h-[600px] items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Imagem principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Guia de Compras Inteligentes - ebook completo"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Quote - desktop only */}
              <div className="absolute -bottom-8 -left-8 w-56 rounded-2xl shadow-elevated bg-white p-4 card-hover border border-calm-rose/10">
                <blockquote className="space-y-3">
                  <p className="text-sm font-serif text-calm-blue leading-relaxed italic">
                    "Criei este material para ser uma mão amiga no seu dia a dia
                    — simples, real e possível. Assim como eu faço nos meus
                    acompanhamentos"
                  </p>
                  <footer className="text-calm-rose font-semibold text-sm italic">
                    — Dra. Katrin Gatz
                  </footer>
                </blockquote>
              </div>

              {/* Badge flutuante - desktop only */}
              <Card className="absolute -top-6 -right-6 p-4 bg-white/95 backdrop-blur border-calm-rose/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-calm-rose" />
                  <div>
                    <p className="text-xs text-muted-foreground">Acesso</p>
                    <p className="text-sm font-semibold text-calm-blue">
                      Imediato
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
