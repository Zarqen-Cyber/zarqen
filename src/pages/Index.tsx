import { Navbar } from "@/components/Navbar";
import { PageBackground } from "@/components/PageBackground";
import { HeroSection } from "@/components/HeroSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { DeliverablesSection } from "@/components/DeliverablesSection";
import { ROICalculator } from "@/components/ROICalculator";
import { FAQSection } from "@/components/FAQSection";
import { CalendlySection } from "@/components/CalendlySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />
      <main>
        <HeroSection />
        <BeforeAfterSection />
        <WhyUsSection />
        <ProcessSection />
        <DeliverablesSection />
        <ROICalculator />
        <FAQSection />
        <CalendlySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
