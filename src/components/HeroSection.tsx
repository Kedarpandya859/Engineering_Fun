import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, TrendingUp, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-innovation/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Join 50,000+ investors building wealth through startups</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Invest in Tomorrow's{" "}
            <span className="gradient-text">Unicorns</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Access exclusive startup investments starting at just $100. Build a diversified portfolio of high-growth companies alongside accredited investors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/startups" className="flex items-center gap-2">
                Browse Startups
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/list-startup">List Your Startup</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="p-2 rounded-xl bg-accent/20">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary-foreground">SEC Compliant</p>
                <p className="text-xs text-primary-foreground/60">Fully regulated</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="p-2 rounded-xl bg-accent/20">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary-foreground">$50M+ Raised</p>
                <p className="text-xs text-primary-foreground/60">For 200+ startups</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="p-2 rounded-xl bg-accent/20">
                <Rocket className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary-foreground">$100 Minimum</p>
                <p className="text-xs text-primary-foreground/60">Start investing today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
