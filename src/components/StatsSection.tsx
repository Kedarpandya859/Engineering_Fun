const StatsSection = () => {
  const stats = [
    {
      value: "$52M+",
      label: "Total Invested",
      description: "Across all campaigns",
    },
    {
      value: "215",
      label: "Startups Funded",
      description: "Successfully raised",
    },
    {
      value: "48K+",
      label: "Active Investors",
      description: "Growing community",
    },
    {
      value: "89%",
      label: "Success Rate",
      description: "Campaigns reaching goal",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-card card-hover"
            >
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="font-semibold text-card-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
