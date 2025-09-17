import { Metadata } from "next";
import { Users, Search, Briefcase, Target, CheckCircle, Award, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Recruitment Services | TechFlow Solutions",
  description: "Expert talent acquisition and recruitment services. We connect top talent with leading companies across various industries.",
};

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Recruitment Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with top talent and build exceptional teams. Our recruitment experts specialize in finding the right candidates 
              for your organization across technology, healthcare, finance, and other key industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Find Talent Now
              </Button>
              <Button size="lg" variant="outline">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Recruitment Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive recruitment solutions tailored to your industry needs, 
              from executive search to technical talent acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Executive Search */}
            <div className="group p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Executive Search</h3>
              <p className="text-muted-foreground mb-4">
                Find C-level executives and senior leadership talent for your organization.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  CEO, CTO, CFO positions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Board-level searches
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Confidential searches
                </li>
              </ul>
            </div>

            {/* Technical Recruitment */}
            <div className="group p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Technical Recruitment</h3>
              <p className="text-muted-foreground mb-4">
                Specialized recruitment for software engineers, data scientists, and tech professionals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Software engineers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Data scientists
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  DevOps specialists
                </li>
              </ul>
            </div>

            {/* Industry Specialization */}
            <div className="group p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground mb-4">
                Deep knowledge across healthcare, finance, fintech, and emerging technology sectors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Healthcare & Biotech
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Financial Services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fintech & Crypto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Recruitment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure we find the perfect match for your organization and candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Requirements Analysis</h3>
              <p className="text-muted-foreground">
                We work closely with you to understand your culture, requirements, and ideal candidate profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Talent Sourcing</h3>
              <p className="text-muted-foreground">
                Our team leverages extensive networks and advanced sourcing techniques to identify top candidates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Screening & Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive screening including technical assessments, cultural fit evaluation, and reference checks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Placement & Support</h3>
              <p className="text-muted-foreground">
                We facilitate the hiring process and provide ongoing support to ensure successful onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Success Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. We consistently deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Placement Success Rate</div>
              <p className="text-muted-foreground">Candidates successfully placed and retained</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">30 Days</div>
              <div className="text-lg font-semibold text-foreground mb-2">Average Time to Hire</div>
              <p className="text-muted-foreground">From job posting to candidate placement</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Successful Placements</div>
              <p className="text-muted-foreground">Candidates placed across various industries</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</div>
              <p className="text-muted-foreground">Based on post-placement feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose TechFlow Recruitment?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Our recruiters have deep industry knowledge and understand the specific requirements of different sectors.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground">
                We have successfully placed candidates in leading companies across various industries and roles.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fast Turnaround</h3>
              <p className="text-muted-foreground">
                Our efficient processes and extensive networks enable us to deliver results quickly without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Find Your Next Team Member?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our recruitment experts help you find the perfect candidate for your organization. 
            Get started today and build the team that will drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Hiring Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
