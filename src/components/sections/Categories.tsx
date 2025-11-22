import { Badge } from "@/components/ui/badge";

const categories = [
  "Pães integrais",
  "Iogurtes",
  "Granolas",
  "Leites vegetais",
  "Molhos e temperos",
  "Cafés",
  "Snacks saudáveis",
  "Bebidas vegetais",
  "Achocolatados",
  "Barras de cereal",
  "Massas integrais",
  "Arroz e grãos",
  "Azeites e óleos",
  "Manteigas e pastas",
  "Proteínas vegetais",
  "Queijos e laticínios",
  "Biscoitos e cookies",
  "Cereais matinais",
  "Geleias e doces",
  "Chás e infusões",
  "Sucos naturais",
  "Condimentos",
  "Farinhas especiais",
  "Produtos congelados",
];

export const Categories = () => {
  return (
    <section className="py-5 lg:py-10 bg-white">
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              Categorias de Alimentos{" "}
              <span className="text-gradient">Analisadas</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais de 24 categorias do seu dia a dia
            </p>
          </div>

          {/* Categories Grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
