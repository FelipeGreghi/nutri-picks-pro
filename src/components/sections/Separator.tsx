import { Heart } from "lucide-react";

type SeparatorVariant = "wave" | "line" | "blur";

interface SectionSeparatorProps {
  variant?: SeparatorVariant;
}

export const SectionSeparator = ({
  variant = "blur",
}: SectionSeparatorProps) => {
  if (variant === "wave") {
    return (
      <div className="relative w-full h-20 md:h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#E2DED5"
            opacity="0.3"
          />
        </svg>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="relative w-full bg-white py-8 md:py-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-calm-rose/30 to-calm-rose/30" />
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-calm-rose/10 border border-calm-rose/20 shrink-0">
            <Heart className="w-4 h-4 text-calm-rose fill-calm-rose" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-calm-rose/30 to-calm-rose/30" />
        </div>
      </div>
    );
  }

  // variant === "blur" (padrão)
  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-calm-rose/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
