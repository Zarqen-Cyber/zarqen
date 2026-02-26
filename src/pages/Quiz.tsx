import { motion } from "framer-motion";
import { EnterpriseReadinessQuiz } from "@/components/EnterpriseReadinessQuiz";
import { Navbar } from "@/components/Navbar";
import { PageBackground } from "@/components/PageBackground";
import { Footer } from "@/components/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const Quiz = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Navbar />
      <main>
        {/* Hero Header */}
        <section className="pt-44 pb-4 overflow-hidden">
          <div className="container-wide text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 border border-blue-500/20 mb-10"
            >
              <span
                className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Enterprise Readiness · 10 Questions · 2 Minutes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              10-Question Quiz Every{" "}
              <span
                className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Fintech Founder
              </span>{" "}
              Must Pass Before Closing Enterprise Deals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Answer honestly. Find out exactly where you stand before your next enterprise deal hits security review — and what's silently killing your pipeline.
            </motion.p>
          </div>
        </section>

        {/* Quiz */}
        <EnterpriseReadinessQuiz />
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
