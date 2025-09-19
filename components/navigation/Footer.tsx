import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { contactInfo, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="phonepe-bg-footer phonepe-wavy-line relative">
      {/* Enhanced Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/95 to-purple-900/90"></div>
      
      {/* PhonePe Footer Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="phonepe-circular-element w-64 h-64 -top-32 -right-32 opacity-20"></div>
        <div className="phonepe-circular-element w-48 h-48 -bottom-24 -left-24 opacity-20"></div>
        <div className="phonepe-bg-pattern-dots absolute inset-0 opacity-5"></div>
      </div>
      
      <div className="phonepe-container phonepe-p-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white">
                TechFlow Solutions
              </span>
            </div>
            <p className="text-sm lg:text-base text-purple-100 leading-relaxed">
              Empowering businesses through technology. We provide comprehensive 
              data annotation, recruitment, and IT services to help you succeed.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                <Facebook className="h-5 w-5 text-purple-200 group-hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                <Twitter className="h-5 w-5 text-purple-200 group-hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                <Linkedin className="h-5 w-5 text-purple-200 group-hover:text-white transition-colors" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                <Instagram className="h-5 w-5 text-purple-200 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-3 group-hover:bg-white transition-colors"></div>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-3 group-hover:bg-white transition-colors"></div>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-3 group-hover:bg-white transition-colors"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-3 group-hover:bg-white transition-colors"></div>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-3 group-hover:bg-white transition-colors"></div>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4 text-purple-200 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm lg:text-base text-purple-200 group-hover:text-white transition-colors">
                  {contactInfo.email}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4 text-purple-200 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm lg:text-base text-purple-200 group-hover:text-white transition-colors">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors mt-0.5">
                  <MapPin className="h-4 w-4 text-purple-200 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm lg:text-base text-purple-200 group-hover:text-white transition-colors leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-purple-300"></div>
              <p className="text-sm lg:text-base text-purple-200">
                © 2024 TechFlow Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-8">
              <Link
                href="/privacy"
                className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm lg:text-base text-purple-200 hover:text-white transition-colors duration-200 font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
