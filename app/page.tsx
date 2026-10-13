import { BigWords } from "@/components/sections/BigWords";
import { Chaos } from "@/components/sections/Chaos";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { IndustrySwitcher } from "@/components/sections/IndustrySwitcher";
import { Nav } from "@/components/sections/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Chaos />
        <Features />
        <IndustrySwitcher />
        <BigWords />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
