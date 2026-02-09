import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { GitMerge, UserCheck, FileCheck, Phone, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "End-to-End Audit Support",
    description:
      "Gap assessment, remediation guidance, evidence collection, implementation support and auditor prep, coordination. Everything you need from initial assessment to certification - no gaps, no surprises.",
  },
  {
    icon: GitMerge,
    title: "Pentest + Compliance Together",
    description:
      "Most firms do one or the other. We conduct the security assessment AND build the compliance framework your auditor needs. One engagement, complete coverage.",
  },
  {
    icon: UserCheck,
    title: "Senior Security Consultants",
    description:
      "Every assessment is conducted by experienced security professionals with 4+ years of hands-on testing. Manual security testing that finds business logic flaws, authentication bypasses, and vulnerabilities automated scanners miss.",
  },
  {
    icon: FileCheck,
    title: "Auditor-Ready Reports",
    description:
      "Compliance-grade documentation formatted for SOC 2, ISO 27001, HIPAA, PCI-DSS, and GDPR requirements. Executive summaries, CVSS scoring, detailed remediation guidance - exactly what auditors expect.",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    description:
      "Work directly with your security consultant. No account managers, no ticketing systems. Questions answered same-day, issues resolved in real-time.",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Why Us?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="Stop Losing Enterprise Deals" />
            <span className="block mt-2">
              <WordReveal text="to Security Reviews!" delay={0.2} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Company Description */}
        <ScrollReveal className="text-center mb-16 max-w-4xl mx-auto" delay={0.2}>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Zarqen is a security consultancy for SaaS startups. We get companies audit-ready in 120 days so they can close $15K–$50K MRR enterprise deals. We combine real penetration testing with compliance frameworks turning security from a sales blocker into a revenue driver.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" stagger={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-3xl p-10 border border-border/50 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
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
