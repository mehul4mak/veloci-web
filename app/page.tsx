import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { Features } from "@/components/sections/features";
import { AiCallout } from "@/components/sections/ai-callout";
import { Comparison } from "@/components/sections/comparison";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBand />
        <Features />
        <AiCallout />
        <Comparison />
        <Pricing />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
