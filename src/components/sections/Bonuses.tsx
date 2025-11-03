import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Utensils } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Manual de Organização e Planejamento Alimentar",
    description: "Aprenda a planejar suas refeições da semana com praticidade e organização",
  },
  {
    icon: Utensils,
    title: "50 Combinações Saudáveis para Almoços e Jantares",
    description: "Ideias práticas e saudáveis sem repetição para variar seu cardápio",
  },
];

export const Bonuses = () => {
  return (
    <section className="py-20 lg:py-32 bg-sand">
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-base px-6 py-2">
              Bônus Exclusivos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Leve Também <span className="text-gradient">Grátis!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Além do Guia de Compras Inteligentes, você recebe sem custo adicional:
            </p>
          </div>

          {/* Bonuses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-background border-secondary/20 space-y-6 card-hover relative overflow-hidden"
                >
                  {/* Free Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground font-bold">
                      GRÁTIS
                    </Badge>
                  </div>

                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10">
                    <Icon className="w-7 h-7 text-secondary" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-bold text-foreground pr-16">
                      {bonus.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-secondary">Incluído nesta oferta especial</span> — Valor adicional sem custo extra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};