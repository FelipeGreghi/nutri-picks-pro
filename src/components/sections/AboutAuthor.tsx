import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Target } from "lucide-react";
import authorImage from "@/assets/bruno-brown.jpg";

export const AboutAuthor = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Quem <span className="text-gradient">Sou Eu</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Produto criado por nutricionista especialista
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src={authorImage} 
                    alt="Bruno Brown - Nutricionista Especialista" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-3 border border-primary/10">
                  <p className="text-sm font-semibold text-primary whitespace-nowrap">
                    15 anos de experiência
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Bruno Brown
                </h3>
                <p className="text-xl text-primary font-semibold">
                  Nutricionista Especialista
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-sand border-primary/10 flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Graduação e especialização em nutrição clínica e esportiva
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-sand border-secondary/10 flex items-start gap-4">
                  <div className="rounded-full bg-secondary/10 p-3 shrink-0">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      15 anos ajudando pessoas a descobrirem o que realmente funciona no mundo real
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-sand border-primary/10 flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3 shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold">Missão:</span> Democratizar o conhecimento nutricional para que qualquer pessoa consiga fazer boas escolhas no supermercado sem depender de ninguém
                    </p>
                  </div>
                </Card>
              </div>

              {/* Quote */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="space-y-4">
                  <div className="text-6xl text-primary/20 font-serif leading-none">"</div>
                  <p className="text-lg text-foreground leading-relaxed italic">
                    Meu objetivo é ensinar você a ser independente nas suas escolhas alimentares. Este guia é o resultado de 15 anos ajudando pessoas a descobrirem o que realmente funciona no mundo real.
                  </p>
                  <p className="font-semibold text-primary">— Bruno Brown</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};