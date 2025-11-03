import { Card } from "@/components/ui/card";
import { Shield, Zap, Heart } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-20 lg:py-32 bg-sand">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Garantia de <span className="text-gradient">Satisfação</span>
            </h2>
            <p className="text-2xl text-primary font-semibold">
              7 Dias de Garantia Incondicional
            </p>
          </div>

          {/* Main Card */}
          <Card className="p-10 bg-background border-primary/20 text-center space-y-8">
            <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
              Se dentro de <span className="font-bold text-primary">7 dias</span> você não estiver <span className="font-bold">100% satisfeito</span> com o conteúdo do guia, devolvemos seu dinheiro integralmente.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Sem perguntas, sem burocracia.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary/10 p-2">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-semibold text-foreground">Sem riscos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary/10 p-2">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-semibold text-foreground">Reembolso rápido</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-secondary/10 p-2">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-semibold text-foreground">Nossa confiança</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};