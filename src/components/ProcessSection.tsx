import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Play } from "lucide-react";
import { useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
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

        {/* Video Embed */}
        <ScrollReveal className="max-w-4xl mx-auto mt-20">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-card to-muted/20">
            {!isPlaying ? (
              <>
                {/* Thumbnail with Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/5 to-indigo-600/5 backdrop-blur-sm">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 transition-transform group-hover:scale-110" fill="currentColor" />
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 opacity-50" />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-foreground">
                  Watch the process
                </div>
              </>
            ) : (
              /* Loom Embed */
              <iframe
                src="https://www.loom.com/embed/40fc09e3b5054725bdc1feb6306504a0?autoplay=1&hide_owner=true&hide_share=true&hide_title=true"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
