import { useState } from "react";
import { ScrollReveal, WordReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
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

    // Investment - fixed pricing
    const investment = 22000;

    // What You Gain
    const revenueUnlocked = deal * 12; // 1 deal closes
    
    // Risk Eliminated formula:
    // If audit fails, these costs occur:
    const reAuditFee = 10000;
    const reworkFounder = 40 * hourly;
    const reworkTeam = 30 * 120;
    const extraDelay = 1 * bleedingMonthly;
    const riskEliminated = Math.round((reAuditFee + reworkFounder + reworkTeam + extraDelay) / 1000) * 1000;

    const speedAdvantage = 40000; // Fixed amount

    // Calculations
    const totalValue = revenueUnlocked + riskEliminated + speedAdvantage;
    const netGain = totalValue - investment;
    const roi = investment > 0 ? ((netGain / investment) * 100).toFixed(2) : "0.00";

    return {
      revenueStuck,
      bleedingMonthly,
      investment,
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
    investment,
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
        <div className="max-w-4xl mx-auto">
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
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-foreground font-medium">Revenue Stuck</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            ({dealsStuck} deals × ${parseFloat(dealSize).toLocaleString()} MRR × 12 months ARR)
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-foreground text-right">${revenueStuck.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-foreground font-medium">Bleeding Monthly</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            ({dealsStuck} deals × ${parseFloat(dealSize).toLocaleString()} MRR)
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-foreground text-right">${bleedingMonthly.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* What You Gain */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">🟢 What You Gain with Zarqen</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline pb-4 border-b border-border">
                        <span className="text-foreground font-medium">Investment</span>
                        <span className="text-xl font-bold text-foreground text-right">${investment.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-foreground font-medium">Revenue Unlocked</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            (1 deal closes × ${parseFloat(dealSize).toLocaleString()} MRR × 12 months)
                          </p>
                        </div>
                        <span className="text-xl font-bold text-foreground text-right">${revenueUnlocked.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-foreground font-medium">Risk Eliminated</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            (Avoid failed audit costs + rework)
                          </p>
                        </div>
                        <span className="text-xl font-bold text-foreground text-right">${riskEliminated.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-baseline">
                        <div>
                          <span className="text-foreground font-medium">Speed Advantage</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            (Close deals 2 months faster)
                          </p>
                        </div>
                        <span className="text-xl font-bold text-foreground text-right">${speedAdvantage.toLocaleString()}</span>
                      </div>

                      <div className="border-t-2 border-foreground pt-4 mt-6 space-y-3">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-foreground text-lg">Total Value</span>
                          <span className="text-2xl font-bold text-foreground text-right">${totalValue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-foreground text-lg">Net Gain</span>
                          <span className="text-2xl font-bold text-right bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            ${netGain.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-foreground text-lg">ROI</span>
                          <span className="text-2xl font-bold text-right bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {roi}%
                          </span>
                        </div>
                      </div>

                      <div className="bg-secondary/50 rounded-2xl p-6 mt-6">
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold text-foreground">Timeline</span>
                          <span className="text-xl font-bold text-foreground text-right">120 days</span>
                        </div>
                      </div>
                    </div>
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
