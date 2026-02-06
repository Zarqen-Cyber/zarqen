import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Scoping Call",
    description:
      "30-minute call to understand your situation — what compliance framework you're pursuing, what's blocking you, your timeline. We figure out what you need.",
  },
  {
    number: "2",
    title: "Technical Discussion",
    description:
      "Call with your technical team to understand your infrastructure and requirements. We finalize scope and timeline.",
  },
  {
    number: "3",
    title: "We Get To Work",
    description:
      "Compliance support, penetration testing, or both — depending on what you need. You stay informed throughout.",
  },
  {
    number: "4",
    title: "You're Audit-Ready",
    description:
      "Everything you need to pass your audit or close your enterprise deal.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            <WordReveal text="Simple, Clear," />
            {" "}
            <WordReveal text="Straightforward" delay={0.2} gradient />
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="max-w-5xl mx-auto space-y-10" stagger={0.12}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-8 group">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-primary-foreground font-bold text-2xl md:text-3xl">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="mt-8 border-b border-border/40" />
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
