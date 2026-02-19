import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Search, Wrench, FileCheck, Shield, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Gap Assessment",
    description:
      "We evaluate your current security posture against your target framework (SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR). You'll know exactly where you stand and what needs to be done.",
  },
  {
    icon: Wrench,
    title: "Implementation Support",
    description:
      "We help you build and implement the policies, controls, and technical safeguards your framework requires. No guesswork — just clear, actionable steps your team can follow.",
  },
  {
    icon: FileCheck,
    title: "Evidence Collection & Documentation",
    description:
      "We prepare all the compliance documentation and evidence your auditor will request. Properly formatted, organized, and ready to present.",
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Manual security testing by senior consultants covering your application, APIs, and infrastructure. Compliance-grade report formatted for your specific auditor and framework.",
  },
  {
    icon: CheckCircle,
    title: "Audit Prep & Coordination",
    description:
      "We prepare your team for the external audit, help you address auditor questions, and coordinate the process so there are no surprises on audit day.",
  },
];

export const AuditReadySection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Our Deliverables
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="Here's Exactly How We Get" />
            <span className="block mt-2">
              <WordReveal text="You Compliance-Ready" delay={0.2} gradient />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            We deliver everything you need to go from zero to certified — no gaps in the process.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="max-w-4xl mx-auto space-y-6" stagger={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-500 group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
