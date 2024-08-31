import { BillingSection } from "@/components/BillingSection";
import { BrandSection } from "@/components/BrandSection";
import { CardDealSection } from "@/components/CardDealSection";
import { FeatureSection } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { Navbar } from "@/components/Navbar";
import { ServiceCTA } from "@/components/ServiceCTA";
import { TestimonialsSection } from "@/components/TestimonalsSection";


export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <MetricsSection />
    <FeatureSection />
    <BillingSection />
    <CardDealSection />
<TestimonialsSection />
    <BrandSection />
    <ServiceCTA />
    <Footer />
    </div>
  );
}
