import { Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valueProps = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "Get results 3x faster than industry standards with our optimized processes and expert team.",
    metric: "3x Faster"
  },
  {
    icon: Shield,
    title: "99.5% Accuracy Guarantee",
    description: "Our rigorous quality control ensures near-perfect results every time, backed by our satisfaction guarantee.",
    metric: "99.5% Accuracy"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see an average 300% ROI within the first year, with measurable business impact from day one.",
    metric: "300% ROI"
  }
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            Why Choose TechFlow Solutions?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just deliver services—we deliver transformation. Here&apos;s what sets us apart 
            and why industry leaders trust us with their most critical projects.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            
            return (
              <Card
                key={index}
                variant="elevated"
                className="group relative overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 lg:p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Metric */}
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                    {prop.metric}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 lg:mb-6">
            Ready to experience the TechFlow difference? Let&apos;s discuss how we can accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
