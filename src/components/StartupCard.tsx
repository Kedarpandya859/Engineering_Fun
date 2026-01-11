import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";
import { Startup, formatCurrency } from "@/data/mockStartups";

interface StartupCardProps {
  startup: Startup;
}

const StartupCard = ({ startup }: StartupCardProps) => {
  const progress = (startup.amountRaised / startup.fundingGoal) * 100;

  return (
    <Link to={`/startup/${startup.id}`}>
      <article className="group bg-card border border-border rounded-2xl overflow-hidden card-hover shadow-card">
        {/* Card Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{startup.logo}</div>
              <div>
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-accent transition-colors">
                  {startup.name}
                </h3>
                <Badge variant="secondary" className="mt-1 text-xs font-medium">
                  {startup.industry}
                </Badge>
              </div>
            </div>
            {startup.featured && (
              <Badge className="bg-accent text-accent-foreground shrink-0">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {startup.tagline}
          </p>
        </div>

        {/* Progress Section */}
        <div className="px-6 pb-4">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-2xl font-bold text-card-foreground">
              {formatCurrency(startup.amountRaised)}
            </span>
            <span className="text-sm text-muted-foreground">
              of {formatCurrency(startup.fundingGoal)}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full progress-gradient rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-sm font-semibold text-accent mt-2">
            {progress.toFixed(0)}% funded
          </p>
        </div>

        {/* Card Footer */}
        <div className="px-6 py-4 bg-muted/50 border-t border-border flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{startup.investorCount}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{startup.daysRemaining}d left</span>
            </div>
          </div>
          <div className="flex items-center gap-1 font-medium text-card-foreground">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span>Min {formatCurrency(startup.minInvestment)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default StartupCard;
