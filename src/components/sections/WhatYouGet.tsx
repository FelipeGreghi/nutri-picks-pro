import { Card } from "@/components/ui/card";
import { BookOpen, Eye, Package, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "+100 Páginas",
    description: "Conteúdo denso e prático",
  },
  {
    icon: Eye,
    title: "Imagens Reais",
    description: "Exemplos visuais dos produtos",
  },
  {
    icon: Package,
    title: "+24 Categorias",
    description: "Alimentos do dia a dia",
  },
  {
    icon: Award,
    title: "Marcas Testadas",
    description: "Recomendações confiáveis",
  },
];

export const WhatYouGet = () => {
  return (
    <section className="py-5 lg:py-10 bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              O Que Você Vai Encontrar no{" "}
              <span className="text-gradient">Guia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 100 páginas de conteúdo prático e visual, direto ao ponto
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-background/30 border-primary/10 text-center space-y-4 card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
