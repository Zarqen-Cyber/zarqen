import { useState } from "react";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ROICalculator = () => {
  const [dealSize, setDealSize] = useState<string>("5000");
  const [dealsStuck, setDealsStuck] = useState<string>("4");
  const [hourlyValue, setHourlyValue] = useState<string>("200");

  const calculateROI = () => {
    const deal = parseFloat(dealSize) || 0;
    const deals = parseFloat(dealsStuck) || 0;
    const hourly = parseFloat(hourlyValue) || 0;

    // Current Situation
    const revenueStuck = deal * deals * 12; // ARR
    const bleedingMonthly = deal * deals; // MRR

    // Investment
    const investmentMin = 20000;
    const investmentMax = 25000;

    // What You Gain
    const revenueUnlocked = deal * 12; // 1 deal closes
    const riskEliminated = 38000; // Fixed amount
    const speedAdvantage = 40000; // Fixed amount

    // Calculations
    const totalValue = revenueUnlocked + riskEliminated + speedAdvantage;
    const netGain = totalValue - investmentMax;
    const roi = ((netGain / investmentMax) * 100).toFixed(2);

    return {
      revenueStuck,
      bleedingMonthly,
      investmentMin,
      investmentMax,
      revenueUnlocked,
      riskEliminated,
      speedAdvantage,
      totalValue,
      netGain,
      roi,
    };
  };

  const {
    revenueStuck,
    bleedingMonthly,
    investmentMin,
    investmentMax,
    revenueUnlocked,
    riskEliminated,
    speedAdvantage,
    totalValue,
    netGain,
    roi,
  } = calculateROI();
  
  const hasInput = dealSize && dealsStuck && hourlyValue;

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            <WordReveal text="See How Much Revenue" />
            <span className="block mt-2">
              <WordReveal text="Is Stuck in Your Pipeline" delay={0.2} gradient />
            </span>
          </h2>
        </ScrollReveal>

        {/* Calculator Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-border/50 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Input Fields */}
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Input Fields</h3>
                <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.08}>
                  <StaggerItem>
                    <Label htmlFor="dealSize" className="text-sm font-medium text-foreground mb-2 block">
                      Average enterprise deal size (MRR):
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="dealSize"
                        type="number"
                        value={dealSize}
                        onChange={(e) => setDealSize(e.target.value)}
                        className="pl-7"
                      />
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <Label htmlFor="dealsStuck" className="text-sm font-medium text-foreground mb-2 block">
                      Deals stuck in security review:
                    </Label>
                    <Input
                      id="dealsStuck"
                      type="number"
                      value={dealsStuck}
                      onChange={(e) => setDealsStuck(e.target.value)}
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <Label htmlFor="hourlyValue" className="text-sm font-medium text-foreground mb-2 block">
                      Your hourly value as founder:
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="hourlyValue"
                        type="number"
                        value={hourlyValue}
                        onChange={(e) => setHourlyValue(e.target.value)}
                        className="pl-7"
                      />
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {hasInput && (
                <>
                  {/* Current Situation */}
                  <div className="mb-10 pb-10 border-b border-border">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">💰 Your Current Situation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Revenue Stuck</span>
                        <span className="text-2xl font-bold text-foreground">${revenueStuck.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground md:col-span-2">
                        ({dealsStuck} deals × ${parseFloat(dealSize).toLocaleString()} MRR × 12 months ARR)
                      </div>
                      
                      <div className="flex justify-between items-center md:col-span-2">
                        <span className="text-muted-foreground">Bleeding Monthly</span>
                        <span className="text-2xl font-bold text-foreground">${bleedingMonthly.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground md:col-span-2">
                        ({dealsStuck} deals × ${parseFloat(dealSize).toLocaleString()} MRR)
                      </div>
                    </div>
                  </div>

                  {/* What You Gain */}
                  <div className="mb-10">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">🟢 What You Gain with Zarqen</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-muted-foreground">Investment</span>
                        <span className="text-xl font-bold text-foreground">${investmentMin.toLocaleString()} - ${investmentMax.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Revenue Unlocked</span>
                        <span className="text-xl font-bold text-foreground">${revenueUnlocked.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-4">
                        (1 deal closes × ${parseFloat(dealSize).toLocaleString()} MRR × 12 months)
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Risk Eliminated</span>
                        <span className="text-xl font-bold text-foreground">${riskEliminated.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-4">
                        (Avoid failed audit costs + rework)
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Speed Advantage</span>
                        <span className="text-xl font-bold text-foreground">${speedAdvantage.toLocaleString()}</span>
                      </div>
                      <div className="text-sm text-muted-foreground pl-4">
                        (Close deals 2 months faster)
                      </div>

                      <div className="border-t-2 border-foreground pt-4 mt-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-foreground text-lg">Total Value</span>
                          <span className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-foreground text-lg">Net Gain</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            ${netGain.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-foreground text-lg">ROI</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {roi}%
                          </span>
                        </div>
                      </div>

                      <div className="bg-secondary/50 rounded-2xl p-6 mt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-foreground">Timeline</span>
                          <span className="text-xl font-bold text-foreground">120 days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      size="lg"
                      className="w-full md:w-auto rounded-full px-10 py-6 text-base gap-2 group font-semibold"
                      asChild
                    >
                      <a href="#contact">
                        Book Your Scoping Call
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
