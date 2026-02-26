import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, RotateCcw, ShieldCheck, AlertTriangle, TrendingDown, XOctagon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const questions = [
  {
    id: 1,
    text: "Do you have a SOC 2 Type II report (6+ month audit period) dated within the last 12 months?",
    tag: "SOC 2",
  },
  {
    id: 2,
    text: "Have you completed an external penetration test within the last 6 months (from a credible third-party firm)?",
    tag: "Pentest",
  },
  {
    id: 3,
    text: "If you handle card data in any form, are you PCI-DSS 4.0 compliant with a valid AOC?",
    tag: "PCI-DSS",
  },
  {
    id: 4,
    text: "Do you have cyber insurance of at least $2M–5M and can you add enterprise customers as additional insured?",
    tag: "Insurance",
  },
  {
    id: 5,
    text: "Do you have a detailed Incident Response Plan that includes a 24-hour customer notification SLA and evidence of a tabletop test in the last 12 months?",
    tag: "IR Plan",
  },
  {
    id: 6,
    text: "Is MFA enforced across ALL admin, production, cloud, and database access — without exception?",
    tag: "MFA",
  },
  {
    id: 7,
    text: "Can you produce your last pentest executive summary, SOC 2 report, and Certificate of Insurance within 48 hours of request?",
    tag: "Readiness",
  },
  {
    id: 8,
    text: "Do you have defined RTO/RPO and documented backup restoration testing within the last 6 months?",
    tag: "BCP/DR",
  },
  {
    id: 9,
    text: "Can your team complete and return a 200+ question enterprise Vendor Security Questionnaire (VSQ) within 5 business days?",
    tag: "VSQ",
  },
  {
    id: 10,
    text: "Does your sales team know how to confidently answer security posture questions without escalating every response to the CTO?",
    tag: "Sales",
  },
];

type ScoreTier = {
  range: string;
  label: string;
  sublabel: string;
  bullets: string[];
  closing: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ElementType;
  iconColor: string;
};

const tiers: ScoreTier[] = [
  {
    range: "8–10",
    label: "Enterprise-Ready",
    sublabel: "Security accelerates your deals",
    bullets: [
      "Procurement takes 2–3 weeks",
      "You compete for banks, insurers, Fortune 500",
      "Security is your sales advantage",
    ],
    closing: "You are using security as a competitive moat.",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
  },
  {
    range: "5–7",
    label: "Deal Friction Zone",
    sublabel: "Deals close, but slowly",
    bullets: [
      "Security review takes 6–10 weeks",
      "Legal pushes back on your contracts",
      "You lose some deals quietly — and never know why",
    ],
    closing: "You are competitive — but vulnerable.",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: AlertTriangle,
    iconColor: "text-amber-500",
  },
  {
    range: "3–4",
    label: "Revenue Leakage Stage",
    sublabel: "Enterprise prospects stall after VSQ",
    bullets: [
      "Procurement escalates to legal repeatedly",
      "Your sales team avoids large logos",
      "Competitors with stronger compliance win the deal",
    ],
    closing: "You are losing ₹40–80 lakhs+ per stalled enterprise deal.",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: TrendingDown,
    iconColor: "text-orange-500",
  },
  {
    range: "0–2",
    label: "Not Enterprise-Ready",
    sublabel: "Procurement auto-flags you",
    bullets: [
      "You are restricted to SMB customers only",
      "One breach could derail fundraising",
      "Security is now a board-level liability",
    ],
    closing: "You cannot compete for enterprise contracts in this state.",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: XOctagon,
    iconColor: "text-red-500",
  },
];

function getTier(score: number): ScoreTier {
  if (score >= 8) return tiers[0];
  if (score >= 5) return tiers[1];
  if (score >= 3) return tiers[2];
  return tiers[3];
}

export const EnterpriseReadinessQuiz = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(10).fill(null));
  const [finished, setFinished] = useState(false);
  const [direction, setDirection] = useState(1);

  const score = answers.filter((a) => a === true).length;
  const tier = getTier(score);

  const handleAnswer = (value: boolean) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
    setDirection(1);

    if (current < questions.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 220);
    } else {
      setTimeout(() => setFinished(true), 220);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  };

  const handleRestart = () => {
    setAnswers(Array(10).fill(null));
    setCurrent(0);
    setFinished(false);
    setStarted(false);
  };

  const progress = ((current + (answers[current] !== null ? 1 : 0)) / questions.length) * 100;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(6px)",
    }),
  };

  return (
    <section id="quiz" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Quiz Card */}
        <ScrollReveal delay={0.2} className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.10)] overflow-hidden">

            {/* Start Screen */}
            {!started && !finished && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="p-10 md:p-14 text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Enterprise Security Checklist
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                  Answer 10 yes/no questions honestly. We'll score your enterprise readiness and show you exactly what's blocking your deals.
                </p>
                <div className="flex items-center justify-center gap-6 mb-10 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    10 Questions
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    ~2 Minutes
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Instant Score
                  </div>
                </div>
                <Button
                  size="lg"
                  className="rounded-full px-10 py-6 text-base gap-2 group hover:scale-[1.03] transition-all duration-200"
                  onClick={() => setStarted(true)}
                >
                  Start the Quiz
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            )}

            {/* Question Screen */}
            {started && !finished && (
              <div>
                {/* Progress Bar */}
                <div className="h-1.5 bg-secondary w-full">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease }}
                  />
                </div>

                <div className="p-8 md:p-12">
                  {/* Counter */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question <span className="text-foreground font-bold">{current + 1}</span> of {questions.length}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {questions[current].tag}
                    </span>
                  </div>

                  {/* Animated Question */}
                  <div className="relative min-h-[100px] mb-10">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.p
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease }}
                        className="text-xl md:text-2xl font-semibold text-foreground leading-snug"
                      >
                        {questions[current].text}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* Answer Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAnswer(true)}
                      className={`flex items-center justify-center gap-3 rounded-2xl py-5 text-base font-semibold border-2 transition-all duration-200 ${
                        answers[current] === true
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-lg"
                          : "bg-white border-border text-foreground hover:border-emerald-400 hover:bg-emerald-50"
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Yes
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAnswer(false)}
                      className={`flex items-center justify-center gap-3 rounded-2xl py-5 text-base font-semibold border-2 transition-all duration-200 ${
                        answers[current] === false
                          ? "bg-red-500 border-red-500 text-white shadow-lg"
                          : "bg-white border-border text-foreground hover:border-red-400 hover:bg-red-50"
                      }`}
                    >
                      <XCircle className="w-5 h-5" />
                      No
                    </motion.button>
                  </div>

                  {/* Back Button */}
                  {current > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 mx-auto"
                    >
                      ← Back
                    </button>
                  )}
                </div>

                {/* Dot indicators */}
                <div className="flex items-center justify-center gap-2 pb-8">
                  {questions.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        width: i === current ? 24 : 8,
                        backgroundColor:
                          answers[i] === true
                            ? "#10b981"
                            : answers[i] === false
                            ? "#ef4444"
                            : i === current
                            ? "hsl(var(--primary))"
                            : "#e2e8f0",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-2 rounded-full"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Results Screen */}
            {finished && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
              >
                {/* Score Banner */}
                <div className={`${tier.bgColor} px-10 pt-10 pb-8 text-center border-b ${tier.borderColor}`}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease }}
                    className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6 border border-white"
                  >
                    <tier.icon className={`w-10 h-10 ${tier.iconColor}`} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease }}
                  >
                    <div className={`text-6xl font-black ${tier.color} mb-1`}>
                      {score}<span className="text-3xl font-bold opacity-50">/10</span>
                    </div>
                    <div className={`text-2xl font-bold ${tier.color} mt-3`}>{tier.label}</div>
                    <div className={`text-base font-medium ${tier.color} opacity-70 mt-1`}>{tier.sublabel}</div>
                  </motion.div>
                </div>

                <div className="p-8 md:p-10">
                  {/* Bullet Points */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="space-y-3 mb-6"
                  >
                    {tier.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.08, duration: 0.4, ease }}
                        className="flex items-start gap-3 text-foreground text-sm leading-relaxed"
                      >
                        <div className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center ${tier.bgColor} border ${tier.borderColor}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${tier.iconColor.replace("text-", "bg-")}`} />
                        </div>
                        {b}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Closing line */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-sm font-semibold text-foreground/70 italic border-t border-border pt-5 mb-8"
                  >
                    {tier.closing}
                  </motion.p>

                  {/* Answer Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="grid grid-cols-5 gap-2 mb-8"
                  >
                    {answers.map((a, i) => (
                      <div
                        key={i}
                        title={questions[i].tag}
                        className={`rounded-xl py-2 text-center text-xs font-bold border ${
                          a === true
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-red-50 border-red-200 text-red-700"
                        }`}
                      >
                        <div className="text-[10px] text-muted-foreground mb-0.5">Q{i + 1}</div>
                        {a ? "✓" : "✗"}
                      </div>
                    ))}
                  </motion.div>

                  {/* Hard Truth (if score < 8) */}
                  {score < 8 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="bg-foreground/[0.03] border border-border rounded-2xl p-6 mb-8"
                    >
                      <p className="text-sm font-semibold text-foreground mb-2">The Hard Truth</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        If you answered "No" to 3 or more questions, your current enterprise pipeline already contains deals that will stall in security review.{" "}
                        <span className="text-foreground font-medium">Not because you are insecure. Because you are unprepared.</span>
                      </p>
                    </motion.div>
                  )}

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Button
                      size="lg"
                      className="flex-1 rounded-full py-6 text-base gap-2 group hover:scale-[1.02] transition-all duration-200"
                      asChild
                    >
                      <a href="#contact">
                        Book a Scoping Call
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full py-6 px-6 text-base gap-2 hover:scale-[1.02] transition-all duration-200"
                      onClick={handleRestart}
                    >
                      <RotateCcw className="w-4 h-4" />
                      Retake
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
