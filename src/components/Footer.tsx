import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <ScrollReveal>
      <footer className="py-12 border-t border-border">
        <div className="container-wide">
          {/* Contact Email */}
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">Contact us at</p>
            <a
              href="mailto:contact@zarqen.com"
              className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7" />
              contact@zarqen.com
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Z</span>
              </div>
              <span className="font-bold text-xl text-foreground">Zarqen</span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#why-us"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Why Us
              </a>
              <a
                href="#our-process"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Our Process
              </a>
              <a
                href="/quiz"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Quiz
              </a>
              <a
                href="#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zarqen. All rights reserved.
            </p>
          </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  );
};
