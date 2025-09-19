"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, X, Database, Users, Laptop, Home, Phone, ChevronDown, ArrowRight
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section for navigation indicators
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Logo size="md" />
            <span className="ml-2 text-xl font-extrabold text-gray-900 group-hover:text-primary transition-colors duration-200">
              TechFlow
            </span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Data Annotation Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center text-gray-700 hover:text-primary font-semibold group"
                onMouseEnter={() => setActiveDropdown('data-annotation')}
                onMouseLeave={() => setActiveDropdown(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="relative z-10">Data Annotation</span>
                <motion.div
                  animate={{ rotate: activeDropdown === 'data-annotation' ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeDropdown === 'data-annotation' ? "100%" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
              
              {/* Data Annotation Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'data-annotation' && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-100 py-6 z-50"
                    onMouseEnter={() => setActiveDropdown('data-annotation')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    initial={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Data Annotation Header */}
                    <div className="px-6 pb-4 border-b border-gray-100">
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center mr-3">
                          <Database className="h-4 w-4 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Data Annotation</h3>
                      </motion.div>
                    </div>

                    {/* Data Annotation Service Items */}
                    <div className="px-6 py-4">
                      <div className="space-y-1">
                        {[
                          {
                            id: "image-annotation",
                            title: "Image Annotation",
                            href: "/data-annotation"
                          },
                          {
                            id: "text-annotation",
                            title: "Text Annotation",
                            href: "/data-annotation"
                          },
                          {
                            id: "video-annotation",
                            title: "Video Annotation",
                            href: "/data-annotation"
                          }
                        ].map((item, itemIndex) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.15 + itemIndex * 0.05, 
                              duration: 0.2 
                            }}
                          >
                            <Link 
                              href={item.href} 
                              className="flex items-center text-gray-700 hover:text-primary py-3 px-4 rounded-xl hover:bg-gray-50 group/item transition-all duration-200"
                            >
                              <h5 className="font-semibold text-sm">
                                {item.title}
                              </h5>
                              <motion.div
                                className="ml-auto opacity-0 group-hover/item:opacity-100"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Recruitment Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center text-gray-700 hover:text-primary font-semibold group"
                onMouseEnter={() => setActiveDropdown('recruitment')}
                onMouseLeave={() => setActiveDropdown(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="relative z-10">Recruitment</span>
                <motion.div
                  animate={{ rotate: activeDropdown === 'recruitment' ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeDropdown === 'recruitment' ? "100%" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
              
              {/* Recruitment Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'recruitment' && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-6 z-50"
                    onMouseEnter={() => setActiveDropdown('recruitment')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    initial={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Header */}
                    <div className="px-6 pb-4 border-b border-gray-100">
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center mr-3">
                          <Users className="h-4 w-4 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Recruitment</h3>
                      </motion.div>
                    </div>

                    {/* Service Items */}
                    <div className="px-6 py-4">
                      <div className="space-y-1">
                        {[
                          {
                            id: "executive-search",
                            title: "Executive Search",
                            href: "/recruitment"
                          },
                          {
                            id: "technical-recruitment",
                            title: "Technical Recruitment",
                            href: "/recruitment"
                          },
                          {
                            id: "contract-staffing",
                            title: "Contract Staffing",
                            href: "/recruitment"
                          }
                        ].map((item, itemIndex) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.15 + itemIndex * 0.05, 
                              duration: 0.2 
                            }}
                          >
                            <Link 
                              href={item.href} 
                              className="flex items-center text-gray-700 hover:text-primary py-3 px-4 rounded-xl hover:bg-gray-50 group/item transition-all duration-200"
                            >
                              <h5 className="font-semibold text-sm">
                                {item.title}
                              </h5>
                              <motion.div
                                className="ml-auto opacity-0 group-hover/item:opacity-100"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* IT Services Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center text-gray-700 hover:text-primary font-semibold group"
                onMouseEnter={() => setActiveDropdown('it-services')}
                onMouseLeave={() => setActiveDropdown(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="relative z-10">IT Services</span>
                <motion.div
                  animate={{ rotate: activeDropdown === 'it-services' ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: activeDropdown === 'it-services' ? "100%" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
              
              {/* IT Services Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === 'it-services' && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-6 z-50"
                    onMouseEnter={() => setActiveDropdown('it-services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                    initial={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      filter: "blur(0px)"
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20, 
                      scale: 0.9,
                      filter: "blur(10px)"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Header */}
                    <div className="px-6 pb-4 border-b border-gray-100">
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center mr-3">
                          <Laptop className="h-4 w-4 text-teal-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">IT Services</h3>
                      </motion.div>
                    </div>

                    {/* Service Items */}
                    <div className="px-6 py-4">
                      <div className="space-y-1">
                        {[
                          {
                            id: "cloud-migration",
                            title: "Cloud Migration",
                            href: "/it-services"
                          },
                          {
                            id: "custom-development",
                            title: "Custom Development",
                            href: "/it-services"
                          },
                          {
                            id: "cybersecurity",
                            title: "Cybersecurity",
                            href: "/it-services"
                          }
                        ].map((item, itemIndex) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: 0.15 + itemIndex * 0.05, 
                              duration: 0.2 
                            }}
                          >
                            <Link 
                              href={item.href} 
                              className="flex items-center text-gray-700 hover:text-primary py-3 px-4 rounded-xl hover:bg-gray-50 group/item transition-all duration-200"
                            >
                              <h5 className="font-semibold text-sm">
                                {item.title}
                              </h5>
                              <motion.div
                                className="ml-auto opacity-0 group-hover/item:opacity-100"
                                initial={{ x: -10 }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className={`nav-active-indicator relative text-gray-700 hover:text-primary transition-all duration-300 font-semibold group ${
                activeSection === 'contact' ? 'active text-primary' : ''
              }`}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
          </nav>

          {/* Removed Get Started Button as per Phase 9.1 requirements */}

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Right-side Mobile Drawer with Advanced Animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Enhanced Drawer */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
            >
              <div className="flex flex-col h-full">
                {/* Enhanced Header */}
                <motion.div 
                  className="flex items-center justify-between p-6 border-b border-gray-100"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <Logo size="sm" />
                    <span className="ml-2 text-lg font-bold text-gray-900">TechFlow</span>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <X className="h-5 w-5 text-gray-700" />
                  </motion.button>
                </motion.div>

                {/* Enhanced Navigation */}
                <nav className="flex-1 p-6">
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {[
                      { href: "/", icon: Home, label: "Home" },
                      { href: "/data-annotation", icon: Database, label: "Data Annotation" },
                      { href: "/recruitment", icon: Users, label: "Recruitment" },
                      { href: "/it-services", icon: Laptop, label: "IT Services" },
                      { href: "/contact", icon: Phone, label: "Contact" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-700 hover:text-primary font-semibold py-2 group/nav"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            <item.icon className="mr-3 h-5 w-5" />
                          </motion.div>
                          <motion.span
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.label}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </nav>

                {/* Enhanced Footer CTA */}
                <motion.div 
                  className="p-6 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      href="/contact"
                      className="block w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 hover:shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* PhonePe-style Subtle Wavy Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 4" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,2 Q300,0 600,2 T1200,2" 
            stroke="url(#gradient)" 
            strokeWidth="1" 
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="50%" stopColor="hsl(var(--primary) / 0.5)" />
              <stop offset="80%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>

    </>
  );
}