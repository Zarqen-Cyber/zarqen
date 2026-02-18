import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide uppercase mb-6"
            >
              Watch Demo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              See How We Get You{" "}
              <span className="text-gradient">Audit-Ready</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A quick walkthrough of our 120-day compliance program and how we help SaaS companies close enterprise deals.
            </motion.p>
          </div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-card to-muted/20 group"
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail with Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/5 to-indigo-600/5 backdrop-blur-sm">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group/play"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 transition-transform group-hover/play:scale-110" fill="currentColor" />
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/10 opacity-50" />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-semibold text-foreground">
                  2 min watch
                </div>
              </>
            ) : (
              /* Loom Embed */
              <iframe
                src="https://www.loom.com/embed/4de5d4a06de74deeb1e89b36843407c1?autoplay=1&hide_owner=true&hide_share=true&hide_title=true"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
              />
            )}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Free scoping call</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span>30-day money back guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
