import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { GitMerge, UserCheck, FileCheck, Phone } from "lucide-react";

const features = [
  {
    icon: GitMerge,
    title: "Compliance + Pentest Together",
    description:
      "Most vendors do one or the other. We help you navigate the full compliance journey — and deliver the penetration testing report your auditor requires.",
  },
  {
    icon: UserCheck,
    title: "Senior Consultants, Not Junior Analysts",
    description:
      "Experienced security professionals conduct every assessment. Manual testing that finds real vulnerabilities — not automated scanner output that auditors reject.",
  },
  {
    icon: FileCheck,
    title: "Reports Auditors Accept",
    description:
      "Formatted specifically for SOC2, ISO 27001, HIPAA, PCI-DSS, GDPR. Executive summary, CVSS scoring, remediation guidance. Ready for your auditor.",
  },
  {
    icon: Phone,
    title: "Direct Access",
    description:
      "You talk to us directly. No account managers, no support tickets. Questions get answered.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Why Us?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="Compliance & Security" />
            <span className="block mt-2">
              <WordReveal text="Assessments That Actually" delay={0.2} />
            </span>
            <span className="block mt-2">
              <WordReveal text="Get You Through Audits" delay={0.4} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" stagger={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-3xl p-10 border border-border/50 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
