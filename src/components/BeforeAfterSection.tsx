import { X, Check } from "lucide-react";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const comparisons = [
  {
    before: "Enterprise deals stuck waiting on compliance",
    after: "Clear path through your compliance framework",
  },
  {
    before: "Confused about SOC2, ISO, HIPAA, PCI-DSS requirements",
    after: "Penetration testing reports auditors actually accept",
  },
  {
    before: "Don't know where to start or what auditors need",
    after: "Know exactly what your auditor needs",
  },
  {
    before: "Burned by vendors who delivered useless scanner reports",
    after: "One partner for pentest + compliance support",
  },
  {
    before: "Hours lost answering security questionnaires",
    after: "Focus on your product while we handle security",
  },
  {
    before: "No security team to figure this out",
    after: "Audit-ready without the confusion",
  },
];

export const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Before and After
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-4">
            <WordReveal text="What Our Clients Face" />
            <span className="block mt-2">
              <WordReveal text="Before Working With Us!" delay={0.2} />
            </span>
          </h2>
        </ScrollReveal>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Without Us Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-4xl font-bold text-red-600 mb-3">Without Us</h3>
              <p className="text-muted-foreground text-lg">Common challenges our clients face</p>
            </div>
            <StaggerContainer className="space-y-4" stagger={0.06}>
              {comparisons.map((item, index) => (
                <StaggerItem key={`before-${index}`}>
                  <div className="bg-red-50/50 rounded-xl p-5 border-l-4 border-red-400 hover:bg-red-50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed">{item.before}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* With Us Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-4xl font-bold text-green-600 mb-3">With Us</h3>
              <p className="text-muted-foreground text-lg">How we transform your business</p>
            </div>
            <StaggerContainer className="space-y-4" stagger={0.06} delay={0.15}>
              {comparisons.map((item, index) => (
                <StaggerItem key={`after-${index}`}>
                  <div className="bg-green-50/50 rounded-xl p-5 border-l-4 border-green-400 hover:bg-green-50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
