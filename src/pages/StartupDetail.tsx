import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  TrendingUp,
  ExternalLink,
  AlertTriangle,
  Check,
  Linkedin,
} from "lucide-react";
import { mockStartups, formatCurrency } from "@/data/mockStartups";

const StartupDetail = () => {
  const { id } = useParams();
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [showInvestDialog, setShowInvestDialog] = useState(false);

  const startup = mockStartups.find((s) => s.id === id);

  if (!startup) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Startup Not Found</h1>
          <Button variant="accent" asChild>
            <Link to="/startups">Browse All Startups</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const progress = (startup.amountRaised / startup.fundingGoal) * 100;
  const presetAmounts = [100, 500, 1000, 2500, 5000, 10000];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/startups"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Startups
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-6xl">{startup.logo}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {startup.name}
                  </h1>
                  {startup.featured && (
                    <Badge className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-xl text-muted-foreground mb-4">
                  {startup.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{startup.industry}</Badge>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {startup.location}
                  </span>
                  <Badge variant="outline">{startup.stage}</Badge>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 gap-8">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent pb-3 px-0"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent pb-3 px-0"
                >
                  Team
                </TabsTrigger>
                <TabsTrigger
                  value="updates"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent pb-3 px-0"
                >
                  Updates
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="pt-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    About {startup.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {startup.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    The Problem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {startup.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {startup.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Traction
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {startup.traction.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
                      >
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-card-foreground font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="team" className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {startup.team.map((member, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
                    >
                      <div className="text-4xl">{member.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-card-foreground">
                            {member.name}
                          </h4>
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-accent font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="updates" className="pt-8">
                {startup.updates.length > 0 ? (
                  <div className="space-y-6">
                    {startup.updates.map((update, index) => (
                      <div
                        key={index}
                        className="bg-card border border-border rounded-xl p-6"
                      >
                        <p className="text-sm text-muted-foreground mb-2">
                          {new Date(update.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <h4 className="font-bold text-card-foreground mb-2">
                          {update.title}
                        </h4>
                        <p className="text-muted-foreground">{update.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-card border border-border rounded-xl">
                    <p className="text-muted-foreground">
                      No updates yet. Check back soon!
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Investment Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-card">
              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-3xl font-bold text-card-foreground">
                    {formatCurrency(startup.amountRaised)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    of {formatCurrency(startup.fundingGoal)}
                  </span>
                </div>
                <Progress value={progress} className="h-3 mb-2" />
                <p className="text-sm font-semibold text-accent">
                  {progress.toFixed(0)}% funded
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">Investors</span>
                  </div>
                  <p className="text-xl font-bold text-card-foreground">
                    {startup.investorCount}
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs">Days Left</span>
                  </div>
                  <p className="text-xl font-bold text-card-foreground">
                    {startup.daysRemaining}
                  </p>
                </div>
              </div>

              {/* Minimum Investment */}
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Minimum Investment</span>
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(startup.minInvestment)}
                </p>
              </div>

              {/* Invest Button */}
              <Dialog open={showInvestDialog} onOpenChange={setShowInvestDialog}>
                <DialogTrigger asChild>
                  <Button variant="accent" size="lg" className="w-full mb-4">
                    Invest Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Invest in {startup.name}</DialogTitle>
                    <DialogDescription>
                      Choose your investment amount. Minimum:{" "}
                      {formatCurrency(startup.minInvestment)}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="grid grid-cols-3 gap-2">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={
                            investmentAmount === String(amount)
                              ? "accent"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => setInvestmentAmount(String(amount))}
                        >
                          {formatCurrency(amount)}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(e.target.value)}
                        className="pl-7"
                        min={startup.minInvestment}
                      />
                    </div>
                    <Button variant="accent" className="w-full" disabled>
                      Continue to Verification
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      You'll complete investor verification in the next step
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Risk Disclaimer */}
              <div className="p-4 bg-warning/10 border border-warning/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Investment Risk
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Startup investing involves substantial risk. You could lose
                      your entire investment. Only invest what you can afford to
                      lose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartupDetail;
