import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ── Shared easing ── */
const ease = [0.16, 1, 0.3, 1] as const;

/* ── Simple fade-up wrapper ── */
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const offsets = {
    up: { y: 40, x: 0, scale: 1 },
    left: { y: 0, x: -40, scale: 1 },
    right: { y: 0, x: 40, scale: 1 },
    scale: { y: 0, x: 0, scale: 0.95 },
  };

  const off = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: off.y, x: off.x, scale: off.scale }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : { opacity: 0, y: off.y, x: off.x, scale: off.scale }
      }
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Word-by-word text reveal (Dreelio-style) ── */
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export const WordReveal = ({
  text,
  className = "",
  delay = 0,
  gradient = false,
}: WordRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`inline ${className}`}
    >
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`inline-block mr-[0.28em] ${gradient ? "text-gradient" : ""}`}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ── Stagger container for card grids ── */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export const StaggerContainer = ({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Single stagger item (pair with StaggerContainer) ── */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 32 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
