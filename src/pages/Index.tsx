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
import { SectionSeparator } from "@/components/sections/Separator";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWhom />
      <SectionSeparator variant="wave" />
      <BeforeAfter />
      <WhatYouGet />
      <Categories />
      <SectionSeparator variant="line" />
      <CTASection />
      <AboutAuthor />
      <SectionSeparator variant="wave" />
      <Bonuses />
      <SectionSeparator variant="line" />
      <Guarantee />
      <SectionSeparator variant="line" />
      <FinalOffer />
      <Footer />
    </main>
  );
};

export default Index;
