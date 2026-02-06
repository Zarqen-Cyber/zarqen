import { useState } from "react";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const frameworkTimelines = {
  "SOC2 Type I": 2,
  "SOC2 Type II": 3,
  "ISO 27001": 3,
  "HIPAA": 2.5,
  "PCI-DSS": 2.5,
  "GDPR": 2,
};

export const ROICalculator = () => {
  const [framework, setFramework] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [dealSize, setDealSize] = useState<string>("");
  const [dealsStuck, setDealsStuck] = useState<string>("");

  const calculateROI = () => {
    const deal = parseFloat(dealSize) || 0;
    const deals = parseFloat(dealsStuck) || 0;
    const revenueStuck = deal * deals;
    const timeline = framework ? frameworkTimelines[framework as keyof typeof frameworkTimelines] : 2;
    const monthlyCost = revenueStuck / 12;

    return {
      revenueStuck,
      timeline,
      monthlyCost,
    };
  };

  const { revenueStuck, timeline, monthlyCost } = calculateROI();
  const hasInput = framework && stage && dealSize && dealsStuck;

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Calculate Your ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="See How Much Revenue" />
            <span className="block mt-2">
              <WordReveal text="Is Stuck in Your Pipeline" delay={0.2} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Inputs */}
              <div className="p-10 lg:border-r border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-8">Your Situation</h3>
                
                <StaggerContainer className="space-y-6" stagger={0.08}>
                  <StaggerItem>
                    <Label htmlFor="framework" className="text-sm font-medium text-foreground mb-2 block">
                      Compliance Framework
                    </Label>
                    <Select value={framework} onValueChange={setFramework}>
                      <SelectTrigger id="framework" className="w-full">
                        <SelectValue placeholder="Select framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SOC2 Type I">SOC2 Type I</SelectItem>
                        <SelectItem value="SOC2 Type II">SOC2 Type II</SelectItem>
                        <SelectItem value="ISO 27001">ISO 27001</SelectItem>
                        <SelectItem value="HIPAA">HIPAA</SelectItem>
                        <SelectItem value="PCI-DSS">PCI-DSS</SelectItem>
                        <SelectItem value="GDPR">GDPR</SelectItem>
                      </SelectContent>
                    </Select>
                  </StaggerItem>

                  <StaggerItem>
                    <Label htmlFor="stage" className="text-sm font-medium text-foreground mb-2 block">
                      Company Stage
                    </Label>
                    <Select value={stage} onValueChange={setStage}>
                      <SelectTrigger id="stage" className="w-full">
                        <SelectValue placeholder="Select stage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Seed">Seed</SelectItem>
                        <SelectItem value="Series A">Series A</SelectItem>
                        <SelectItem value="Series B">Series B</SelectItem>
                      </SelectContent>
                    </Select>
                  </StaggerItem>

                  <StaggerItem>
                    <Label htmlFor="dealSize" className="text-sm font-medium text-foreground mb-2 block">
                      Average Deal Size ($)
                    </Label>
                    <Input
                      id="dealSize"
                      type="number"
                      placeholder="80000"
                      min="0"
                      value={dealSize}
                      onChange={(e) => setDealSize(e.target.value)}
                      className="w-full"
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <Label htmlFor="dealsStuck" className="text-sm font-medium text-foreground mb-2 block">
                      Number of Deals Stuck
                    </Label>
                    <Input
                      id="dealsStuck"
                      type="number"
                      placeholder="3"
                      min="0"
                      value={dealsStuck}
                      onChange={(e) => setDealsStuck(e.target.value)}
                      className="w-full"
                    />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Right: Results */}
              <div className="p-10 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-8">Your ROI</h3>
                
                {hasInput ? (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="w-5 h-5 opacity-80" />
                        <span className="text-sm opacity-80 font-medium">Revenue Stuck</span>
                      </div>
                      <p className="text-4xl font-bold">
                        ${revenueStuck.toLocaleString()}
                      </p>
                      <p className="text-sm opacity-80 mt-1">stuck in your pipeline</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 opacity-80" />
                        <span className="text-sm opacity-80 font-medium">Time to Audit-Ready</span>
                      </div>
                      <p className="text-4xl font-bold">
                        ~{timeline} months
                      </p>
                      <p className="text-sm opacity-80 mt-1">with our support</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 opacity-80" />
                        <span className="text-sm opacity-80 font-medium">Cost of Delay</span>
                      </div>
                      <p className="text-4xl font-bold">
                        ${Math.round(monthlyCost).toLocaleString()}/mo
                      </p>
                      <p className="text-sm opacity-80 mt-1">every month you wait</p>
                    </div>

                    <div className="pt-6 border-t border-primary-foreground/20">
                      <p className="text-base leading-relaxed mb-6">
                        Every month you wait = <span className="font-bold">${Math.round(monthlyCost).toLocaleString()}</span> not closing
                      </p>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="w-full rounded-full py-6 gap-2 group font-semibold"
                        asChild
                      >
                        <a href="#contact">
                          Book Your Scoping Call
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[400px]">
                    <p className="text-center text-primary-foreground/70 text-lg">
                      Fill in your details to see your ROI
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
