import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock } from "lucide-react";

export const FinalOffer = () => {
  const handleCheckout = () => {
    // Here you would integrate with your payment processor
    console.log("Checkout clicked");
  };

  return (
    <section className="py-5 lg:py-10 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Transforme Suas Compras{" "}
              <span className="text-gradient">Hoje</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Invista uma única vez e tenha conhecimento para toda a vida
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="p-10 bg-sand/30 border-primary/20 space-y-8 relative overflow-hidden">
            {/* Hot Badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-warning text-warning-foreground font-bold text-base px-4 py-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Oferta Especial
              </Badge>
            </div>

            {/* Price */}
            <div className="text-center space-y-4 pt-8">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground line-through">
                  De R$97,00
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold text-gradient font-serif">
                    R$37
                  </span>
                  <span className="text-2xl text-muted-foreground">,00</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  ou{" "}
                  <span className="font-semibold text-foreground">
                    12x de R$3,08
                  </span>{" "}
                  no cartão
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="ctaLarge"
                size="xl"
                className="w-full max-w-md"
                onClick={handleCheckout}
              >
                Comprar Agora por R$37,00
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Acesso liberado em até 5 minutos</span>
              </div>
            </div>

            {/* Bottom Note */}
            <Card className="p-6 bg-primary/5 border-primary/10">
              <p className="text-center text-foreground leading-relaxed">
                💡 <span className="font-semibold">Pense assim:</span> em uma
                única ida ao supermercado você pode gastar R$37 em produtos que
                não valem a pena...
              </p>
            </Card>
          </Card>

          {/* Extra Trust Elements */}
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              ✓ Pagamento 100% seguro • ✓ Seus dados protegidos • ✓ Garantia de
              7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
