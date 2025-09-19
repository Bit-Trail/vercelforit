import { Metadata } from "next";
import { Database, Image, FileText, Video, Globe, CheckCircle, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Data Annotation & Translation Services | TechFlow Solutions",
  description: "Professional data annotation and translation services for AI/ML projects. High-quality labeled data for better machine learning models.",
};

export default function DataAnnotationPage() {
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
              <Database className="h-10 w-10 text-white" />
            </div>
            <h1 className="display-text text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Data Annotation & Translation Services
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Transform your raw data into high-quality, accurately labeled datasets for AI and machine learning projects. 
              Our expert team delivers precision annotation and translation services across multiple languages and data types.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary phonepe-touch-target-comfortable">
                View Our Portfolio
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
              Our Data Annotation Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We specialize in comprehensive data annotation services that help you build better AI models 
              with accurately labeled datasets across various industries and use cases.
            </p>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Image Annotation - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Image Annotation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Object detection, classification, segmentation, and landmark annotation for computer vision projects.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Bounding boxes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Semantic segmentation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Keypoint detection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Annotation - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Text Annotation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Named entity recognition, sentiment analysis, and text classification for NLP applications.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Named entity recognition
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Sentiment analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Intent classification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Annotation - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Video Annotation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Frame-by-frame annotation, action recognition, and temporal analysis for video AI models.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Action recognition
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Object tracking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Scene classification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Translation Services - PhonePe Oval Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-6 lg:phonepe-col-lg-3">
              <div className="group phonepe-card p-8 rounded-3xl hover-lift hover-glow phonepe-touch-target-comfortable animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">Translation Services</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Professional translation services across 50+ languages with cultural context and domain expertise.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        50+ languages
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Cultural adaptation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Domain expertise
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Workflow - PhonePe Style */}
      <section className="phonepe-bg-service-alt phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-waves absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Our Annotation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure the highest quality annotations and translations for your projects.
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
                <h3 className="text-xl font-bold text-foreground mb-4">Data Assessment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We analyze your data requirements and create a detailed annotation strategy tailored to your project needs.
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
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Annotation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled annotators work with precision tools to label your data according to industry best practices.
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
                <h3 className="text-xl font-bold text-foreground mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every annotation undergoes rigorous quality checks to ensure accuracy and consistency across your dataset.
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
                <h3 className="text-xl font-bold text-foreground mb-4">Delivery & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver your annotated data in your preferred format with ongoing support and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - PhonePe Style */}
      <section className="phonepe-bg-service phonepe-section relative">
        {/* PhonePe Background Patterns */}
        <div className="phonepe-bg-pattern-grid absolute inset-0 opacity-20"></div>
        
        <div className="phonepe-container relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
              Why Choose TechFlow for Data Annotation?
            </h2>
          </div>

          <div className="phonepe-grid phonepe-col-12 gap-8">
            {/* Expert Team - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our annotators are trained professionals with deep expertise in AI/ML data requirements and industry standards.
                </p>
              </div>
            </div>

            {/* Quality Guarantee - PhonePe Card */}
            <div className="phonepe-col-12 md:phonepe-col-md-4">
              <div className="text-center p-8 phonepe-card rounded-3xl hover-lift hover-glow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg hover-scale transition-transform duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Quality Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain 99.5% accuracy rates with comprehensive quality assurance processes and regular audits.
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
                  Scalable operations allow us to handle large datasets quickly without compromising on quality or accuracy.
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
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get started with our data annotation services today. Our team is ready to help you build better AI models with high-quality labeled data.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Button size="lg" className="phonepe-button bg-white text-primary hover:bg-white/90 phonepe-touch-target-comfortable">
                Start Your Project
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
