import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | TechFlow Solutions",
  description: "Get in touch with TechFlow Solutions. We're here to help with your data annotation, recruitment, and IT service needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with our services? We&apos;d love to hear from you. 
              Contact us today to discuss your project requirements and how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We&apos;re here to help you with all your business needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground mb-2">Call us during business hours</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-muted-foreground mb-2">Visit us at our headquarters</p>
                    <p className="text-foreground">{contactInfo.address}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">{contactInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="data-annotation">Data Annotation & Translation</option>
                    <option value="recruitment">Recruitment Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some common questions we receive. If you don&apos;t see your question here, feel free to contact us directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How quickly can you start working on my project?
              </h3>
              <p className="text-muted-foreground">
                We typically can begin new projects within 1-2 weeks of contract signing. For urgent projects, 
                we can often accommodate faster timelines. Contact us to discuss your specific timeline requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you work with small businesses or only large enterprises?
              </h3>
              <p className="text-muted-foreground">
                We work with businesses of all sizes, from startups to Fortune 500 companies. Our services are 
                scalable and can be tailored to meet the needs and budget of any organization.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What industries do you serve?
              </h3>
              <p className="text-muted-foreground">
                We serve clients across various industries including technology, healthcare, finance, e-commerce, 
                manufacturing, and more. Our team has experience in multiple sectors and can adapt to industry-specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive support and maintenance services for all our projects. We provide 
                24/7 support options and can help with updates, bug fixes, and feature enhancements as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to transform your business. Contact us today and let&apos;s discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
