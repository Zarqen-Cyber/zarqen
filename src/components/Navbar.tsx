import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Why Us", href: "#why-us" },
  { name: "Our Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const isScrolled = scrollY > 50;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      {/* Outer wrapper — controls the MAX WIDTH that shrinks */}
      <motion.nav
        animate={{
          maxWidth: isScrolled ? 820 : 1280,
          paddingTop: isScrolled ? 8 : 16,
          paddingBottom: isScrolled ? 0 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-4"
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.82)"
              : "rgba(255, 255, 255, 0.5)",
            borderColor: isScrolled
              ? "rgba(0, 0, 0, 0.08)"
              : "rgba(0, 0, 0, 0.04)",
            paddingTop: isScrolled ? 8 : 12,
            paddingBottom: isScrolled ? 8 : 12,
            borderRadius: isScrolled ? 50 : 16,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="backdrop-blur-2xl px-6 flex items-center justify-between border"
          style={{
            boxShadow: isScrolled
              ? "0 4px 24px -4px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.04)"
              : "0 1px 4px rgba(0,0,0,0.03)",
          }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <motion.div
              animate={{ width: isScrolled ? 28 : 32, height: isScrolled ? 28 : 32 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg bg-primary flex items-center justify-center"
            >
              <span className="text-primary-foreground font-bold text-base">Z</span>
            </motion.div>
            <motion.span
              animate={{ fontSize: isScrolled ? "1rem" : "1.2rem" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-foreground leading-none"
            >
              Zarqen
            </motion.span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ opacity: 1 }}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              animate={{ scale: isScrolled ? 0.92 : 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button size="sm" className="rounded-full px-5 text-xs" asChild>
                <a href="#contact">Book a Call</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-2"
            >
              <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-5 flex flex-col gap-3 border border-border/50 shadow-xl">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="rounded-full w-full mt-2">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
};
