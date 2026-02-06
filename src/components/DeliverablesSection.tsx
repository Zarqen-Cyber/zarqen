import { ClipboardCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const deliverables = [
  {
    icon: ClipboardCheck,
    title: "Compliance Support",
    features: [
      "Audit preparation guidance",
      "Evidence collection support",
      "Framework-specific requirements mapping",
      "Navigate what your auditor actually needs",
    ],
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    features: [
      "Manual testing by senior consultants",
      "Business logic, authentication, authorization, API security",
      "Real vulnerabilities scanners miss",
      "Compliance-grade report formatted for your auditor",
    ],
  },
];

export const DeliverablesSection = () => {
  return (
    <section id="deliverables" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              What You Get
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="Everything you need to" />
            <span className="block mt-2">
              <WordReveal text="get through compliance" delay={0.2} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Deliverables Grid */}
        <StaggerContainer className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto" stagger={0.12}>
          {deliverables.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-3xl p-10 border border-border/50 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {item.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-foreground mt-1 text-lg">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note */}
        <ScrollReveal className="text-center mt-12" delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto italic">
            Scope, timeline, and deliverables confirmed on scoping call based on your specific situation.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 text-base hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            asChild
          >
            <a href="#contact">Book Your Free Scoping Call</a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
