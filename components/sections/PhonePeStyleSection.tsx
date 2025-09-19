"use client";

import Link from "next/link";
import { ArrowRight, Users, Code, Database, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PhonePeStyleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const services = [
    {
      id: "recruitment-process",
      title: "Our Recruitment Process",
      description: "Strategic talent acquisition with proven methodologies and industry expertise.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      features: [
        "Executive & C-Level Search",
        "Technical Talent Specialists", 
        "Cultural Fit Assessment",
        "90-Day Success Guarantee"
      ],
      href: "/recruitment"
    },
    {
      id: "development-process", 
      title: "Our Development Process",
      description: "Agile development methodology with cutting-edge technology solutions.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      features: [
        "Cloud-First Architecture",
        "Custom Software Development",
        "Legacy System Modernization", 
        "24/7 Expert Support"
      ],
      href: "/it-services"
    },
    {
      id: "data-annotation-why",
      title: "Why Choose TechFlow for Data Annotation?",
      description: "Precision data annotation with industry-leading accuracy and scalability.",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      features: [
        "99.5% Accuracy Guarantee",
        "Multi-modal Data Processing",
        "Real-time Quality Monitoring",
        "Scalable Annotation Pipeline"
      ],
      href: "/data-annotation"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 md:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #fef3c7 50%, #fce7f3 100%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Dots pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth
          </p>
        </motion.div>

        {/* Layered Cards Container */}
        <div className="relative">
          {/* Card 1 - Background Layer */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0"
          >
            <Link href={services[0].href} className="group block">
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl ${services[0].bgColor} flex items-center justify-center mr-4`}>
                        <Users className={`w-6 h-6 ${services[0].iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {services[0].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {services[0].description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="ml-8">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 w-64">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Talent Pipeline</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Executive Search</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Technical Talent</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>Cultural Fit</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Success Rate</div>
                        <div className="text-lg font-bold text-purple-600">95%</div>
                        <div className="text-xs text-gray-500">Placement Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Card 2 - Middle Layer */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute inset-0 mt-8"
          >
            <Link href={services[1].href} className="group block">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl ${services[1].bgColor} flex items-center justify-center mr-4`}>
                        <Code className={`w-6 h-6 ${services[1].iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {services[1].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {services[1].description}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="ml-8">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 w-64">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Development</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-blue-500 mr-2" />
                          <span>Agile Methodology</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                          <span>Cloud-First</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>24/7 Support</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Projects Delivered</div>
                        <div className="text-lg font-bold text-blue-600">1000+</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Card 3 - Front Layer */}
          <motion.div 
            style={{ y: y3 }}
            className="relative mt-16"
          >
            <Link href={services[2].href} className="group block">
              <motion.div 
                className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl ${services[2].bgColor} flex items-center justify-center mr-4`}>
                        <Database className={`w-6 h-6 ${services[2].iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {services[2].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {services[2].description}
                    </p>
                    <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Visual Element */}
                  <div className="ml-8">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 w-64">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <Database className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Data Quality</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>99.5% Accuracy</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          <span>Real-time Monitoring</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Database className="w-4 h-4 text-green-500 mr-2" />
                          <span>Multi-modal</span>
                        </div>
                      </div>
                      <div className="mt-4 bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Accuracy Rate</div>
                        <div className="text-lg font-bold text-green-600">99.5%</div>
                        <div className="text-xs text-gray-500">Quality Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
