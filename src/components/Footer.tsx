import { ScrollReveal } from "@/components/ScrollReveal";

export const Footer = () => {
  return (
    <ScrollReveal>
      <footer className="py-12 border-t border-border">
        <div className="container-wide">
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
                href="#process"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Our Process
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
      </footer>
    </ScrollReveal>
  );
};
