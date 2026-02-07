import { ScrollReveal, WordReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-16 md:p-24 text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                <WordReveal text="Stop Losing Deals" />
                <span className="block mt-2">
                  <WordReveal text="to Compliance Delays" delay={0.15} />
                </span>
              </h2>

              <ScrollReveal delay={0.3}>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
                  Get audit-ready in 120 days and start closing those enterprise deals.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.45}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-12 py-7 text-lg gap-2 group font-semibold hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="#contact">
                    Book Your Scoping Call
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
