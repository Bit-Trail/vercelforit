import { Award, Clock, TrendingUp, Shield } from "lucide-react";
import { companyInfo, benefits } from "@/lib/data";

const iconMap = {
  Award,
  Clock,
  TrendingUp,
  Shield,
};

export default function AboutSection() {
  return (
    <section className="phonepe-section phonepe-bg-service">
      {/* PhonePe Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="phonepe-circular-element w-36 h-36 top-20 left-20"></div>
        <div className="phonepe-circular-element w-28 h-28 bottom-20 right-20"></div>
        <div className="phonepe-bg-pattern-waves absolute inset-0 opacity-15"></div>
      </div>
      
      <div className="phonepe-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-foreground">
                Your Trusted Technology Partner
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Since {companyInfo.founded}, TechFlow Solutions has been the driving force behind digital transformation for forward-thinking businesses. We&apos;ve helped over {companyInfo.clients} companies accelerate their growth through precision data solutions, strategic talent acquisition, and innovative technology infrastructure.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our mission is simple: to be the catalyst that transforms your business potential into measurable success. We combine deep industry expertise with cutting-edge technology to deliver solutions that don&apos;t just meet expectations—they exceed them and drive sustainable growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="text-center p-3 lg:p-4 rounded-lg bg-muted/50">
                <div className="text-xl sm:text-2xl font-extrabold text-primary">{companyInfo.founded}</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-3 lg:p-4 rounded-lg bg-muted/50">
                <div className="text-xl sm:text-2xl font-extrabold text-primary">{companyInfo.employees}+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-3 lg:p-4 rounded-lg bg-muted/50">
                <div className="text-xl sm:text-2xl font-extrabold text-primary">{companyInfo.clients}+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-3 lg:p-4 rounded-lg bg-muted/50">
                <div className="text-xl sm:text-2xl font-extrabold text-primary">{companyInfo.projects}+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Why Choose Us</h3>
            <div className="space-y-3 lg:space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
                
                return (
                  <div key={index} className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
