import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 xl:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight tracking-tight">
                {companyInfo.tagline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {companyInfo.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card variant="filled" padding="sm" className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {companyInfo.clients}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card variant="filled" padding="sm" className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {companyInfo.projects}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card variant="filled" padding="sm" className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {companyInfo.employees}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card variant="filled" padding="sm" className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {new Date().getFullYear() - companyInfo.founded}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="#services">
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative order-1 xl:order-2">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-3 sm:p-4 lg:p-6">
              <div className="h-full w-full rounded-xl bg-black shadow-2xl overflow-hidden relative group">
                {/* Video Player */}
                <video
                  className="w-full h-full object-cover"
                  poster="/images/video-poster.jpg"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/videos/company-intro.mp4" type="video/mp4" />
                  <source src="/videos/company-intro.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary/50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
