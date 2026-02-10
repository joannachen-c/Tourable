import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { UniversityLogos } from "@/components/university-logos";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <UniversityLogos />
      <Features />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  );
}
