export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Content */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Guia de Compras Inteligentes
            </h3>
            <p className="text-primary-foreground/80">
              Criado por Bruno Brown - Nutricionista Especialista
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </a>
            <span className="text-primary-foreground/40">•</span>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </a>
            <span className="text-primary-foreground/40">•</span>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60 border-t border-primary-foreground/10 pt-8">
            <p>
              © {new Date().getFullYear()} Guia de Compras Inteligentes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};