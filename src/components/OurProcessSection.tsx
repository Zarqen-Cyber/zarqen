import { ScrollReveal, WordReveal } from "@/components/ScrollReveal";
import { Play } from "lucide-react";
import { useState } from "react";

export const OurProcessSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="our-process" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            <WordReveal text="From Zero to" />
            {" "}
            <WordReveal text="Enterprise-Ready" delay={0.2} gradient />
            <span className="block mt-2">
              <WordReveal text="in 4 Months" delay={0.35} />
            </span>
          </h2>
        </ScrollReveal>

        {/* Video Embed */}
        <ScrollReveal className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-card to-muted/20"
            style={{ position: "relative", paddingBottom: "49.74619289340102%", height: 0 }}
          >
            {!isPlaying ? (
              <div
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                className="flex items-center justify-center bg-gradient-to-br from-blue-600/5 to-indigo-600/5"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 opacity-50" />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group"
                >
                  <Play
                    className="w-8 h-8 md:w-10 md:h-10 ml-1 transition-transform group-hover:scale-110"
                    fill="currentColor"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </button>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-foreground z-20">
                  Watch the process
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.loom.com/embed/40fc09e3b5054725bdc1feb6306504a0"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
