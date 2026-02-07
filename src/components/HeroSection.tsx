import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WordReveal } from "@/components/ScrollReveal";

export const HeroSection = () => {  return (
    <section className="pt-44 pb-28 overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 border border-blue-500/20 mb-10"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🚀 Attention SaaS Founders - Stop Losing Deals to Compliance
            </span>
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-foreground leading-[1.08] mb-8">
            <WordReveal text="Get" delay={0.15} />
            {" "}
            <WordReveal text="Audit-Ready" delay={0.25} gradient />
            <span className="block mt-3">
              <WordReveal text="in 120 Days" delay={0.4} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Add $30k–$50K in new monthly revenue - SOC 2, ISO 27001, HIPAA, GDPR compliance that closes enterprise deals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base gap-2 group hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              asChild
            >
              <a href="#contact">
                Book Your Scoping Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 py-6 text-base border-2 hover:bg-secondary hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              asChild
            >
              <a href="#process">See How It Works</a>
            </Button>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            Trusted by 100+ SaaS startups to pass their audits
          </motion.p>
        </div>
      </div>
    </section>
  );
};
