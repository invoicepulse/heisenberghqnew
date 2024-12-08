import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Pricing />
      <FAQSection />
      <CallToAction />
    </div>
  );
}
