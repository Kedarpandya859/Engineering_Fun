import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StartupCard from "@/components/StartupCard";
import { mockStartups } from "@/data/mockStartups";

const FeaturedStartups = () => {
  const featuredStartups = mockStartups.filter((s) => s.featured).slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Featured Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trending Startups
            </h2>
          </div>
          <Button variant="outline" asChild className="self-start md:self-auto">
            <Link to="/startups" className="flex items-center gap-2">
              View All Startups
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
