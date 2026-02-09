import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "How long does this take?",
    answer:
      "Depends on your situation and what you need. We figure this out on the scoping call.",
  },
  {
    question: "Does every compliance certification take 120 days to get audit-ready?",
    answer:
      "Not necessarily. The timeline depends on your company's size, current security posture, and the framework you're pursuing. Some companies get audit-ready faster, others may need more time. We'll provide a realistic timeline based on your specific situation during our scoping call.",
  },
  {
    question: "Which compliance framework do I need?",
    answer:
      "Depends on your industry and customers. We help you figure this out on the scoping call.",
  },
  {
    question: "Will your pentest report work for our auditor?",
    answer:
      "Yes. Formatted for SOC2, ISO 27001, HIPAA, PCI-DSS, or GDPR. If your auditor has questions, we answer them directly.",
  },
  {
    question: "Can you help with just compliance? Or just pentest?",
    answer:
      "Yes. We offer both separately or together — depending on what you need.",
  },
  {
    question: "What does it cost?",
    answer:
      "Depends on scope. We figure out what you need on the scoping call and give you a clear quote.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Answers to Your Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="FAQ" />
          </h2>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <ScrollReveal delay={0.15} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border border-border/50 hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Additional CTA */}
          <ScrollReveal delay={0.3} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for?
            </p>
            <Button variant="outline" className="rounded-full px-8 py-5 hover:scale-105 transition-transform" asChild>
              <a href="#contact">Book a Call</a>
            </Button>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  );
};
