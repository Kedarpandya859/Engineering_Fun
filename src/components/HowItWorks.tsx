import { Search, CreditCard, TrendingUp, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "Browse curated startups across industries. Each company is vetted for growth potential and founder credibility.",
    },
    {
      icon: CreditCard,
      number: "02",
      title: "Invest",
      description: "Choose your investment amount starting from $100. Complete secure verification and fund your investment.",
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Grow",
      description: "Track your portfolio's progress. Receive regular updates from founders and watch your investments grow.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Start building your startup portfolio in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-8 h-full card-hover shadow-card">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-muted/50 group-hover:text-accent/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for Desktop (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-24 z-10 w-8 h-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
