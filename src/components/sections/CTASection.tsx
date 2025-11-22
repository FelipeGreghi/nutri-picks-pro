import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Heart } from "lucide-react";

export const CTASection = () => {
  const handleCTAClick = () => {
    // Here you would integrate with your payment processor
    console.log("CTA clicked - redirect to checkout");
  };

  return (
    <section
      id="cta-section"
      className="py-5 lg:py-10 bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, white 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Sua Próxima Ida ao Supermercado Pode Ser Completamente Diferente
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Imagine entrar no mercado com total confiança, saber exatamente o
              que escolher, economizar dinheiro e ainda sair de lá sabendo que
              fez as melhores escolhas para sua saúde.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <Button
              variant="ctaLarge"
              size="xl"
              className="bg-white text-primary hover:bg-white/95 shadow-2xl hover:scale-105 transition-transform duration-300 btn-pulse"
              onClick={handleCTAClick}
            >
              Sim! Quero transformar minhas compras agora
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-white/90">
              <div className="rounded-full bg-white/10 p-2">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">
                Compra segura e protegida
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="rounded-full bg-white/10 p-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="rounded-full bg-white/10 p-2">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">
                Garantia incondicional de 7 dias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
