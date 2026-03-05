import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { SolutionSection } from "@/components/sections/solution";
import { TransformationSection } from "@/components/sections/transformation";
import { ResultsSection } from "@/components/sections/results";
import { AuditCTA } from "@/components/sections/audit-cta";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <TransformationSection />
      <ResultsSection />
      <AuditCTA />
      <Footer />
    </main>
  );
}
