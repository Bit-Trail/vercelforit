import { Metadata } from "next";
import { Users, Search, Briefcase, Target, CheckCircle, Award, Clock, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Recruitment Services | TechFlow Solutions",
  description: "Expert talent acquisition and recruitment services. We connect top talent with leading companies across various industries.",
};

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - PhonePe Style */}
      <section className="phonepe-bg-hero phonepe-section relative overflow-hidden">
        {/* PhonePe Particle System */}
        <div className="phonepe-particles">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="phonepe-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        {/* PhonePe Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="phonepe-floating-element w-64 h-64 -top-32 -right-32 blur-3xl"></div>
          <div className="phonepe-floating-element w-64 h-64 -bottom-32 -left-32 blur-3xl"></div>
          <div className="phonepe-floating-element w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        
        {/* PhonePe Gradient Overlays */}
        <div className="phonepe-overlay-gradient"></div>
        <div className="phonepe-overlay-radial"></div>

        <div className="phonepe-container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 phonepe-card hover-scale">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="display-text text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Recruitment Services
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Connect with top talent and build exceptional teams. Our recruitment experts specialize in finding the right candidates 
              for your organization across technology, healthcare, finance, and other key industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Find Talent Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - PhonePe Style */}
      <section className="phonepe-bg-service phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-dots absolute inset-0 opacity-30"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Recruitment Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive recruitment solutions tailored to your industry needs, 
              from executive search to technical talent acquisition.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Executive Search - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Executive Search</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Find C-level executives and senior leadership talent for your organization.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        CEO, CTO, CFO positions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Board-level searches
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Confidential searches
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Recruitment - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Technical Recruitment</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Specialized recruitment for software engineers, data scientists, and tech professionals.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Software engineers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Data scientists
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        DevOps specialists
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Specialization - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Industry Expertise</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Deep knowledge across healthcare, finance, fintech, and emerging technology sectors.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Healthcare & Biotech
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Financial Services
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Fintech & Crypto
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process - PhonePe Style */}
      <section className="phonepe-bg-service-alt phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-waves absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Recruitment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure we find the perfect match for your organization and candidates.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Step 1 - PhonePe Numbered Circle */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg hover-scale transition-transform duration-300">
                    <span className="text-white font-black text-2xl">1</span>
                  </div>
                  {/* Connecting Line */}
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Requirements Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work closely with you to understand your culture, requirements, and ideal candidate profile.
                </p>
              </div>
            </div>

            {/* Step 2 - PhonePe Numbered Circle */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg hover-scale transition-transform duration-300">
                    <span className="text-white font-black text-2xl">2</span>
                  </div>
                  {/* Connecting Line */}
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Talent Sourcing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team leverages extensive networks and advanced sourcing techniques to identify top candidates.
                </p>
              </div>
            </div>

            {/* Step 3 - PhonePe Numbered Circle */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg hover-scale transition-transform duration-300">
                    <span className="text-white font-black text-2xl">3</span>
                  </div>
                  {/* Connecting Line */}
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pink-500/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Screening & Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive screening including technical assessments, cultural fit evaluation, and reference checks.
                </p>
              </div>
            </div>

            {/* Step 4 - PhonePe Numbered Circle */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg hover-scale transition-transform duration-300">
                    <span className="text-white font-black text-2xl">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Placement & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We facilitate the hiring process and provide ongoing support to ensure successful onboarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics - PhonePe Style */}
      <section className="phonepe-bg-service phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-grid absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Success Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. We consistently deliver exceptional results for our clients.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Success Metric 1 - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <span className="text-white font-black text-2xl">95%</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Placement Success Rate</h3>
                <p className="text-muted-foreground leading-relaxed">Candidates successfully placed and retained</p>
              </div>
            </div>

            {/* Success Metric 2 - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <span className="text-white font-black text-2xl">30</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Average Time to Hire</h3>
                <p className="text-muted-foreground leading-relaxed">From job posting to candidate placement</p>
              </div>
            </div>

            {/* Success Metric 3 - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <span className="text-white font-black text-2xl">500+</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Successful Placements</h3>
                <p className="text-muted-foreground leading-relaxed">Candidates placed across various industries</p>
              </div>
            </div>

            {/* Success Metric 4 - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <span className="text-white font-black text-2xl">98%</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Client Satisfaction</h3>
                <p className="text-muted-foreground leading-relaxed">Based on post-placement feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - PhonePe Style */}
      <section className="phonepe-bg-service-alt phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-dots absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Why Choose TechFlow Recruitment?
            </h2>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Industry Expertise - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Industry Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our recruiters have deep industry knowledge and understand the specific requirements of different sectors.
                </p>
              </div>
            </div>

            {/* Proven Track Record - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Proven Track Record</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We have successfully placed candidates in leading companies across various industries and roles.
                </p>
              </div>
            </div>

            {/* Fast Turnaround - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our efficient processes and extensive networks enable us to deliver results quickly without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - PhonePe Style */}
      <section className="phonepe-bg-footer phonepe-section relative overflow-hidden">
        {/* PhonePe Particle System */}
        <div className="phonepe-particles">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="phonepe-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* PhonePe Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="phonepe-floating-element w-96 h-96 -top-48 -right-48 blur-3xl"></div>
          <div className="phonepe-floating-element w-96 h-96 -bottom-48 -left-48 blur-3xl"></div>
        </div>
        
        {/* PhonePe Gradient Overlays */}
        <div className="phonepe-overlay-gradient"></div>
        <div className="phonepe-overlay-radial"></div>

        <div className="phonepe-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8">
              Ready to Find Your Next Team Member?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let our recruitment experts help you find the perfect candidate for your organization. 
              Get started today and build the team that will drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Start Hiring Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
