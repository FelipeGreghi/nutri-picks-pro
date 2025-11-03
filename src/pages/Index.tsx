import { Hero } from "@/components/sections/Hero";
import { ForWhom } from "@/components/sections/ForWhom";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Categories } from "@/components/sections/Categories";
import { Bonuses } from "@/components/sections/Bonuses";
import { CTASection } from "@/components/sections/CTASection";
import { AboutAuthor } from "@/components/sections/AboutAuthor";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalOffer } from "@/components/sections/FinalOffer";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWhom />
      <BeforeAfter />
      <WhatYouGet />
      <Categories />
      <Bonuses />
      <CTASection />
      <AboutAuthor />
      <Guarantee />
      <FinalOffer />
      <Footer />
    </main>
  );
};

export default Index;