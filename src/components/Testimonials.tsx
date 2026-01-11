import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "FundRise made it possible for me to invest in the next generation of tech companies. My portfolio has seen incredible growth, and I love getting updates from the founders.",
      author: "Sarah Mitchell",
      role: "Retail Investor",
      avatar: "👩‍💼",
      investment: "$15,000 invested across 8 startups",
    },
    {
      quote: "As someone who always wanted to invest in startups but didn't have VC connections, this platform is a game-changer. The due diligence they provide gives me confidence in my decisions.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "👨‍💻",
      investment: "$8,500 invested across 5 startups",
    },
    {
      quote: "The transparency and regular updates from portfolio companies make FundRise stand out. I feel like a true partner in the startups I've invested in.",
      author: "Emily Rodriguez",
      role: "Financial Advisor",
      avatar: "👩‍🏫",
      investment: "$25,000 invested across 12 startups",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Investor Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Investors Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 p-4 rounded-2xl bg-accent text-accent-foreground">
              <Quote className="h-6 w-6" />
            </div>

            {/* Testimonial Content */}
            <div className="pt-4">
              <p className="text-xl md:text-2xl text-card-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonials[activeIndex].avatar}</div>
                  <div>
                    <p className="font-bold text-card-foreground">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-accent">
                  {testimonials[activeIndex].investment}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-accent w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
