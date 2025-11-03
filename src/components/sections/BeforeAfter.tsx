import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const beforePoints = [
  "Perdido entre milhares de produtos",
  "Caindo em marketing enganoso",
  "Gastando mais do que deveria",
  "Frustração e arrependimento",
  "Dependendo sempre de terceiros",
];

const afterPoints = [
  "Navegando com total confiança",
  "Identificando produtos realmente saudáveis",
  "Economizando nas compras",
  "Satisfação com suas escolhas",
  "Autonomia total nas decisões",
];

export const BeforeAfter = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Sua Experiência no <span className="text-gradient">Supermercado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja a transformação que este guia pode trazer para sua vida
            </p>
          </div>

          {/* Before/After Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <Card className="p-8 bg-destructive/5 border-destructive/20 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10">
                  <X className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Antes</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Compras no escuro
                </h3>
              </div>

              <ul className="space-y-4">
                {beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* After */}
            <Card className="p-8 bg-secondary/5 border-secondary/20 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10">
                  <Check className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-secondary">Depois</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Compras inteligentes
                </h3>
              </div>

              <ul className="space-y-4">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};