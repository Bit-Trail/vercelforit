import { Metadata } from "next";
import { Laptop, Cloud, Code, Settings, CheckCircle, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "IT Services & Solutions | TechFlow Solutions",
  description: "Comprehensive IT solutions and consulting services. From software development to cloud migration, we've got you covered.",
};

export default function ITServicesPage() {
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
              <Laptop className="h-10 w-10 text-white" />
            </div>
            <h1 className="display-text text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              IT Services & Solutions
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Transform your business with cutting-edge technology solutions. Our expert team delivers comprehensive IT services 
              including software development, cloud migration, system integration, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
                View Our Solutions
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
              Our IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end IT solutions that help businesses modernize, scale, and optimize their technology infrastructure.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Software Development - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Software Development</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Custom software solutions built with modern technologies and best practices.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Web applications
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Mobile apps
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        API development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Solutions - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Cloud Solutions</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Cloud migration, architecture design, and optimization for AWS, Azure, and Google Cloud.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Cloud migration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Architecture design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Cost optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* System Integration - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">System Integration</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Seamless integration of existing systems with new technologies and platforms.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Legacy system integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        API integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Data migration
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* IT Consulting - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Laptop className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">IT Consulting</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Strategic technology consulting to help you make informed decisions about your IT infrastructure.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Technology strategy
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Digital transformation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Security assessment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - PhonePe Style */}
      <section className="phonepe-bg-service-alt phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-grid absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver modern, scalable solutions.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Frontend Technologies - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Frontend Technologies</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    React, Next.js, Vue.js
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    TypeScript, JavaScript
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Tailwind CSS, Material-UI
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Technologies - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Backend Technologies</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Node.js, Python, Java
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    PostgreSQL, MongoDB
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Redis, Elasticsearch
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud & DevOps - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">Cloud & DevOps</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    AWS, Azure, Google Cloud
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Docker, Kubernetes
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    CI/CD, Terraform
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - PhonePe Style */}
      <section className="phonepe-bg-service phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-waves absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow agile methodologies and best practices to ensure successful project delivery.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Step 1 - PhonePe Style */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  {/* PhonePe Connecting Element */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full transform -translate-y-1/2 opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Discovery & Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We analyze your requirements and create a detailed project plan with timelines and milestones.
                </p>
              </div>
            </div>

            {/* Step 2 - PhonePe Style */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  {/* PhonePe Connecting Element */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transform -translate-y-1/2 opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Design & Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team designs the system architecture and creates wireframes and prototypes.
                </p>
              </div>
            </div>

            {/* Step 3 - PhonePe Style */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  {/* PhonePe Connecting Element */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-teal-500 rounded-full transform -translate-y-1/2 opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Development & Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We develop your solution using agile methodologies with continuous testing and quality assurance.
                </p>
              </div>
            </div>

            {/* Step 4 - PhonePe Style */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Deployment & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deploy your solution and provide ongoing support, maintenance, and updates.
                </p>
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
              Why Choose TechFlow IT Services?
            </h2>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Expert Team - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our developers and engineers are certified professionals with years of experience in modern technologies.
                </p>
              </div>
            </div>

            {/* Security First - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Security First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement security best practices and follow industry standards to protect your data and systems.
                </p>
              </div>
            </div>

            {/* 24/7 Support - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up text-center" style={{animationDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">24/7 Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - PhonePe Style */}
      <section className="phonepe-bg-footer phonepe-section relative overflow-hidden">
        {/* PhonePe Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="phonepe-floating-element w-64 h-64 -top-32 -right-32 blur-3xl"></div>
          <div className="phonepe-floating-element w-64 h-64 -bottom-32 -left-32 blur-3xl"></div>
        </div>
        
        {/* PhonePe Gradient Overlays */}
        <div className="phonepe-overlay-gradient"></div>
        <div className="phonepe-overlay-radial"></div>

        <div className="phonepe-container relative z-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Let our IT experts help you modernize your technology stack and drive digital transformation. 
            Get started with a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
