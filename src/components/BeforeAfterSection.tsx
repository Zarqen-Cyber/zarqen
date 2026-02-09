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
        <ScrollReveal className="text-center mb-16">
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

        {/* Table Format */}
        <ScrollReveal className="max-w-5xl mx-auto" delay={0.15}>
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2">
              <div className="bg-red-50 px-6 md:px-8 py-5 border-b border-border/30 border-r border-r-border/30">
                <h3 className="text-xl md:text-2xl font-bold text-red-600 text-center">Without Us</h3>
              </div>
              <div className="bg-green-50 px-6 md:px-8 py-5 border-b border-border/30">
                <h3 className="text-xl md:text-2xl font-bold text-green-600 text-center">With Zarqen</h3>
              </div>
            </div>

            {/* Table Rows */}
            <StaggerContainer stagger={0.06}>
              {comparisons.map((item, index) => (
                <StaggerItem key={index}>
                  <div className={`grid grid-cols-2 ${index < comparisons.length - 1 ? 'border-b border-border/30' : ''}`}>
                    {/* Before */}
                    <div className="px-5 md:px-8 py-5 border-r border-border/30 flex items-start gap-3 hover:bg-red-50/30 transition-colors duration-200">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-600" />
                      </div>
                      <p className="text-sm md:text-base text-foreground leading-relaxed">{item.before}</p>
                    </div>

                    {/* After */}
                    <div className="px-5 md:px-8 py-5 flex items-start gap-3 hover:bg-green-50/30 transition-colors duration-200">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      </div>
                      <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
