import { Card } from "@/components/ui/card";
import { Target, AlertCircle } from "lucide-react";

const targetAudience = [
  "Quer emagrecer com saúde, mas se confunde no supermercado",
  "Já cansou de comprar produtos 'fit' caros que não funcionam",
  "Tem dúvidas sobre rótulos e não sabe em quem confiar",
  "Quer fazer escolhas conscientes sem gastar uma fortuna",
  "Busca praticidade para não depender sempre de especialistas",
  "Deseja ensinar a família a comer melhor",
];

export const ForWhom = () => {
  return (
    <section className="py-5 lg:py-10 bg-sand">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Este guia é para <span className="text-gradient">você</span> que…
            </h2>
          </div>

          {/* Grid of Target Points */}
          <div className="grid md:grid-cols-2 gap-6">
            {targetAudience.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/40 border-primary/10 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary/10 p-3 shrink-0">
                    <Target className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Warning Box */}
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="rounded-full bg-destructive/10 p-3 shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-destructive">Atenção</h3>
                <p className="text-foreground leading-relaxed">
                  Este guia{" "}
                  <span className="font-semibold">NÃO é para você</span> se
                  busca receitas prontas, dietas milagrosas ou soluções mágicas.
                  Este é um guia prático sobre como escolher produtos no
                  supermercado — não um plano alimentar.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
