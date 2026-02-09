import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-10 md:p-16 text-primary-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <ScrollReveal className="relative z-10">
              <span className="text-sm font-semibold uppercase tracking-wider opacity-80">About Zarqen</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
                We are a security consultancy that combines penetration testing with compliance frameworks so that you can close enterprise deals without the security headache.
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-3xl">
                Built for SaaS startups pursuing SOC 2, ISO 27001, HIPAA, PCI-DSS, and GDPR. We get you audit-ready in 120 days — turning security from a sales blocker into a revenue driver.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 py-6 text-base font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                asChild
              >
                <a href="#contact">Talk to Us</a>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
