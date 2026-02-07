import { useEffect } from "react";
import { ScrollReveal, WordReveal } from "@/components/ScrollReveal";

export const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-expect-error - Calendly is loaded via script tag
    if (window.Calendly) {
      // @ts-expect-error - Calendly global function
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/devansh-bordia-zarqen/30min",
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="text-sm font-medium text-foreground uppercase tracking-wider">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <WordReveal text="Ready to Get" />
              <span className="block mt-2">
                <WordReveal text="Through Compliance?" delay={0.2} gradient />
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              That enterprise deal or audit deadline isn't going to wait.
            </p>
          </ScrollReveal>

          {/* Calendly Embed */}
          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-3xl border border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Book Your Free 30-Minute Scoping Call
                </h3>
                <p className="text-muted-foreground">
                  We'll discuss your compliance needs and figure out exactly what you need to get audit-ready.
                </p>
              </div>
              
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/devansh-bordia-zarqen/30min?hide_gdpr_banner=1&primary_color=0a0a0a"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
