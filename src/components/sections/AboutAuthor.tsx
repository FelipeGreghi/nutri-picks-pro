// src/components/sections/AboutAuthor.tsx

import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Target, Heart } from "lucide-react";
import { useState, useEffect } from "react";

// Imagens em `public/` devem ser referenciadas por caminho absoluto
const authorImage1 = "/IMG_0912.jpg";
const authorImage2 = "/IMG_0905.jpg";

export const AboutAuthor = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [authorImage1, authorImage2];

  // Alternância automática de imagens a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-96 h-96 bg-calm-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-calm-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header com animação */}
          <div className="text-center space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-calm-rose/10 border border-calm-rose/20 text-calm-rose text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Quem criou este guia
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-calm-blue">
              Conheça a <span className="text-calm-rose">Dra. Katrin Gatz</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nutricionista especialista em formar pacientes autônomos
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem com alternância */}
            <div
              className="order-2 lg:order-1 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative max-w-md mx-auto">
                {/* Container de imagens com transição */}
                <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[3/4]">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Dra. Katrin Gatz - Nutricionista - Foto ${
                        index + 1
                      }`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        currentImage === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Indicadores de foto */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "bg-calm-rose w-8"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ver foto ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Badge flutuante */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-3 border border-calm-rose/10">
                  <p className="text-sm font-semibold text-calm-blue whitespace-nowrap">
                    CRN-3 52641
                  </p>
                </div>
              </div>
            </div>

            {/* Info com animação escalonada */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Formação e atuação */}
              <div
                className="space-y-6 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Card className="p-6 bg-white/30 border-calm-blue/10 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-calm-blue/10 p-3 shrink-0">
                      <GraduationCap className="w-6 h-6 text-calm-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-calm-blue mb-2">
                        Formação
                      </h4>
                      <p className="text-foreground leading-relaxed text-sm">
                        Graduada pela Universidade Federal do Triângulo Mineiro
                        (UFTM), com Pós-graduação em Nutrição Estética e Saúde
                        da Mulher
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/30 border-calm-rose/10 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-calm-rose/10 p-3 shrink-0">
                      <Award className="w-6 h-6 text-calm-rose" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-calm-blue mb-2">
                        Atuação
                      </h4>
                      <p className="text-foreground leading-relaxed text-sm">
                        Especialista em emagrecimento, estética e hipertrofia.
                        Com formação sólida e anos de prática clínica, ajudo
                        pessoas a alcançarem seus objetivos com base em ciência,
                        equilíbrio e propósito.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/30 border-calm-rose/10 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-calm-rose/10 p-3 shrink-0">
                      <Target className="w-6 h-6 text-calm-rose" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-calm-blue mb-2">
                        Missão
                      </h4>
                      <p className="text-foreground leading-relaxed text-sm">
                        Formar pacientes autônomos, capazes de entender rótulos,
                        reconhecer qualidade e construir uma rotina alimentar
                        inteligente — sem exageros e sem culpa.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quote destaque com animação */}
              <Card
                className="p-8 bg-gradient-to-br from-calm-rose/5 to-calm-blue/5 border-calm-rose/20 animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="space-y-4">
                  <div className="text-6xl text-calm-rose/20 font-serif leading-none">
                    "
                  </div>
                  <blockquote className="text-lg text-calm-blue leading-relaxed italic -mt-8">
                    Mais do que prescrever uma dieta, quero formar pacientes
                    autônomos, capazes de entender rótulos, reconhecer qualidade
                    e construir uma rotina alimentar inteligente sem exageros e
                    sem culpa.
                  </blockquote>
                  <footer className="font-semibold text-calm-rose pt-2">
                    — Dra. Katrin Gatz
                  </footer>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
