import { Star } from "lucide-react";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "We had a $450K enterprise deal blocked because the prospect's security team required a third-party pentest report. Zarqen delivered an auditor-grade assessment in 14 days. The report satisfied their InfoSec requirements and we closed the deal 3 weeks later. Best $4,799 we've ever spent.",
    author: "Marcus Rodriguez",
    role: "CTO, Series A SaaS Startup",
    initials: "MR",
  },
  {
    quote:
      "Our SOC 2 audit was 6 weeks away and we had no security assessment. Other vendors quoted 8-12 weeks. Zarqen started in 2 days and delivered our compliance-ready pentest report in time for the auditor. Passed SOC 2 on first attempt. Their unlimited retests policy saved us thousands.",
    author: "Sarah Kim",
    role: "Head of Engineering, Healthcare Startup",
    initials: "SK",
  },
  {
    quote:
      "Previous pentest vendor found 3 low-severity findings for $8K. Zarqen found 12 critical vulnerabilities including an auth bypass that could've exposed all customer data. Manual OSCP-level testing makes all the difference. The Critical Miss Insurance proves they stand behind their work.",
    author: "David Johnson",
    role: "VP Engineering, Fintech Series B",
    initials: "DJ",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="What Security Leaders Say" />
            <span className="block mt-2">
              <WordReveal text="About Working With Us" delay={0.2} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" stagger={0.1}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-3xl p-8 border border-border/50 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full group">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
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
