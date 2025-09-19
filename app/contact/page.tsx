"use client";

import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";
import { ContentReveal, StaggeredReveal } from "@/components/ui/loading";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle success/error states here
  };

  return (
    <div className="min-h-screen" id="contact">
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
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h1 className="display-text text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Ready to transform your business with our services? We&apos;d love to hear from you. 
              Contact us today to discuss your project requirements and how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form - PhonePe Style */}
      <section className="phonepe-bg-service phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-dots absolute inset-0 opacity-30"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="phonepe-grid phonepe-col-12 gap-16">
            {/* Contact Information - PhonePe Style */}
            <div className="phonepe-col-12 lg:phonepe-col-lg-6 space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We&apos;re here to help you with all your business needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email - PhonePe Card */}
                <div className="group phonepe-card p-6 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">Send us an email anytime</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary hover:text-primary/80 transition-colors font-semibold"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone - PhonePe Card */}
                <div className="group phonepe-card p-6 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">Call us during business hours</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:text-primary/80 transition-colors font-semibold"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address - PhonePe Card */}
                <div className="group phonepe-card p-6 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">Office Address</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">Visit us at our headquarters</p>
                      <p className="text-foreground font-semibold">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours - PhonePe Card */}
                <div className="group phonepe-card p-6 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">Office Hours</h3>
                      <p className="text-muted-foreground leading-relaxed font-semibold">{contactInfo.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form with PhonePe Styling */}
            <div className="phonepe-col-12 lg:phonepe-col-lg-6">
              <div className="phonepe-card rounded-3xl p-8 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <h2 className="text-3xl font-extrabold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="floating-label-input"
                      placeholder=" "
                    />
                    <label htmlFor="firstName" className="floating-label">
                      First Name *
                    </label>
                  </div>
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="floating-label-input"
                      placeholder=" "
                    />
                    <label htmlFor="lastName" className="floating-label">
                      Last Name *
                    </label>
                  </div>
                </div>

                <div className="floating-label-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="floating-label-input"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="floating-label">
                    Email Address *
                  </label>
                </div>

                <div className="floating-label-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="floating-label-input"
                    placeholder=" "
                  />
                  <label htmlFor="company" className="floating-label">
                    Company
                  </label>
                </div>

                <div className="floating-label-group">
                  <select
                    id="service"
                    name="service"
                    className="floating-label-select"
                  >
                    <option value="">Select a service</option>
                    <option value="data-annotation">Data Annotation & Translation</option>
                    <option value="recruitment">Recruitment Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <label htmlFor="service" className="floating-label">
                    Service Interested In
                  </label>
                </div>

                <div className="floating-label-group">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="floating-label-textarea"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="floating-label">
                    Message *
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable interactive-feedback"
                  loading={isSubmitting}
                  loadingText="Sending Message..."
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - PhonePe Style */}
      <section className="phonepe-bg-service-alt phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-waves absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some common questions we receive. If you don&apos;t see your question here, feel free to contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="group phonepe-card rounded-3xl p-8 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                How quickly can you start working on my project?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We typically can begin new projects within 1-2 weeks of contract signing. For urgent projects, 
                we can often accommodate faster timelines. Contact us to discuss your specific timeline requirements.
              </p>
            </div>

            <div className="group phonepe-card rounded-3xl p-8 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                Do you work with small businesses or only large enterprises?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with businesses of all sizes, from startups to Fortune 500 companies. Our services are 
                scalable and can be tailored to meet the needs and budget of any organization.
              </p>
            </div>

            <div className="group phonepe-card rounded-3xl p-8 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                What industries do you serve?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We serve clients across various industries including technology, healthcare, finance, e-commerce, 
                manufacturing, and more. Our team has experience in multiple sectors and can adapt to industry-specific requirements.
              </p>
            </div>

            <div className="group phonepe-card rounded-3xl p-8 hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we offer comprehensive support and maintenance services for all our projects. We provide 
                24/7 support options and can help with updates, bug fixes, and feature enhancements as your business grows.
              </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t wait to transform your business. Contact us today and let&apos;s discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
