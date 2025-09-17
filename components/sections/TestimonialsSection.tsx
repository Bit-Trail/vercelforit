import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            Success Stories That Speak Volumes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our clients don&apos;t just achieve their goals—they exceed them. Discover how industry leaders 
            have transformed their businesses and accelerated growth with our proven solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 p-6 lg:p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 lg:top-6 lg:right-6 text-primary/20">
                <Quote className="h-6 w-6 lg:h-8 lg:w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 lg:mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground mb-4 lg:mb-6">
            Join the ranks of industry leaders who trust TechFlow Solutions to drive their success. Your transformation story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl"
            >
              Begin Your Journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
