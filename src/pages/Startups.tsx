import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartupCard from "@/components/StartupCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { mockStartups, industries, stages } from "@/data/mockStartups";

const Startups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [sortBy, setSortBy] = useState("most-funded");
  const [showFilters, setShowFilters] = useState(false);

  const filteredStartups = useMemo(() => {
    let result = [...mockStartups];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.tagline.toLowerCase().includes(query) ||
          s.industry.toLowerCase().includes(query)
      );
    }

    // Industry filter
    if (selectedIndustry !== "All Industries") {
      result = result.filter((s) => s.industry === selectedIndustry);
    }

    // Stage filter
    if (selectedStage !== "All Stages") {
      result = result.filter((s) => s.stage === selectedStage);
    }

    // Sorting
    switch (sortBy) {
      case "most-funded":
        result.sort((a, b) => b.amountRaised - a.amountRaised);
        break;
      case "ending-soon":
        result.sort((a, b) => a.daysRemaining - b.daysRemaining);
        break;
      case "min-investment":
        result.sort((a, b) => a.minInvestment - b.minInvestment);
        break;
      case "newest":
        result.sort((a, b) => b.daysRemaining - a.daysRemaining);
        break;
    }

    return result;
  }, [searchQuery, selectedIndustry, selectedStage, sortBy]);

  const activeFiltersCount = [
    selectedIndustry !== "All Industries",
    selectedStage !== "All Stages",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedIndustry("All Industries");
    setSelectedStage("All Stages");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Startups
          </h1>
          <p className="text-muted-foreground">
            Discover high-growth companies seeking investment
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search startups by name, industry, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-3">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-[180px] h-12">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStage} onValueChange={setSelectedStage}>
              <SelectTrigger className="w-[150px] h-12">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[170px] h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="most-funded">Most Funded</SelectItem>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
                <SelectItem value="min-investment">Min Investment</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="lg:hidden h-12"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge className="ml-2 bg-accent text-accent-foreground">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="lg:hidden bg-card border border-border rounded-xl p-4 mb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStage} onValueChange={setSelectedStage}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Stage" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((stage) => (
                    <SelectItem key={stage} value={stage}>
                      {stage}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-funded">Most Funded</SelectItem>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="min-investment">Min Investment</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {(activeFiltersCount > 0 || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedIndustry !== "All Industries" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedIndustry}
                <button onClick={() => setSelectedIndustry("All Industries")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedStage !== "All Stages" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedStage}
                <button onClick={() => setSelectedStage("All Stages")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-accent hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredStartups.length} startup
          {filteredStartups.length !== 1 ? "s" : ""}
        </p>

        {/* Startups Grid */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-foreground mb-2">
              No startups found
            </p>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <Button variant="accent" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Startups;
