"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  Tag, Image, FileText, Video, MessageSquare, CheckCircle, Shield, Brain,
  Crown, Code, UserCheck, Search, FileCheck, Users, MessageCircle, UserPlus,
  Cloud, Laptop, Settings, Link, Database, Zap, Headphones
} from "lucide-react";
import { serviceCarouselData, ServiceCarouselItem } from "@/lib/data";

// Icon mapping for service carousel
const iconMap = {
  Tag, Image, FileText, Video, MessageSquare, CheckCircle, Shield, Brain,
  Crown, Code, UserCheck, Search, FileCheck, Users, MessageCircle, UserPlus,
  Cloud, Laptop, Settings, Link, Database, Zap, Headphones
};

// Color schemes for different service categories
const colorSchemes = {
  purple: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200" },
  orange: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200" },
  pink: { bg: "bg-pink-500", text: "text-pink-600", border: "border-pink-200" },
  teal: { bg: "bg-teal-500", text: "text-teal-600", border: "border-teal-200" }
};

interface ServiceCarouselProps {
  className?: string;
}

export default function ServiceCarousel({ className = "" }: ServiceCarouselProps) {
  const [, setHoveredCard] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredRows, setHoveredRows] = useState<boolean[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Motion values for smooth scrolling
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });

  // Handle drag interactions
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // Auto-scroll functionality for each row
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    containerRefs.current.forEach((containerRef, rowIndex) => {
      if (containerRef) {
        const interval = setInterval(() => {
          if (!isDragging && !hoveredRows[rowIndex] && containerRef) {
            const scrollAmount = 100; // Medium speed movement
            containerRef.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            
            // Reset scroll position when reaching the end
            if (containerRef.scrollLeft >= containerRef.scrollWidth - containerRef.clientWidth - 100) {
              setTimeout(() => {
                containerRef.scrollTo({ left: 0, behavior: 'smooth' });
              }, 2000);
            }
          }
        }, 2500); // Medium speed interval
        
        intervals.push(interval);
      }
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isDragging, hoveredRows]);

  const ServiceCard = ({ item, index, rowIndex }: { item: ServiceCarouselItem; index: number; rowIndex: number }) => {
    const IconComponent = iconMap[item.icon as keyof typeof iconMap];
    const colorScheme = colorSchemes[item.color as keyof typeof colorSchemes];

    return (
      <motion.div
        className="relative flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        onHoverStart={() => setHoveredCard(`${rowIndex}-${item.id}`)}
        onHoverEnd={() => setHoveredCard(null)}
      >
        {/* PhonePe-style Oval Service Card */}
        <motion.div
          className={`
            bg-white rounded-full border-2 ${colorScheme.border} 
            px-6 py-4 mx-2 cursor-pointer relative overflow-hidden
            min-w-[140px] h-[80px] flex items-center justify-center
            shadow-sm hover:shadow-lg transition-all duration-300
            phonepe-touch-target-comfortable
          `}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Colored Icon Circle */}
          <motion.div
            className={`w-12 h-12 rounded-full ${colorScheme.bg} flex items-center justify-center shadow-md`}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <IconComponent className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Service Title */}
          <div className="ml-3 flex-1 min-w-0">
            <motion.h4 
              className={`text-sm font-semibold ${colorScheme.text} truncate`}
              whileHover={{ color: "hsl(var(--primary))" }}
              transition={{ duration: 0.2 }}
            >
              {item.title}
            </motion.h4>
          </div>

          {/* Hover Effect Overlay */}
          <motion.div 
            className="absolute inset-0 bg-primary/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ 
              scale: 1, 
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          />
        </motion.div>

      </motion.div>
    );
  };

  return (
    <section className={`phonepe-section phonepe-bg-service ${className}`}>
      {/* PhonePe Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="phonepe-circular-element w-32 h-32 top-20 left-10"></div>
        <div className="phonepe-circular-element w-40 h-40 bottom-20 right-10"></div>
        <div className="phonepe-curved-shape"></div>
      </div>
      
      {/* PhonePe Background Pattern */}
      <div className="phonepe-bg-pattern-dots absolute inset-0 opacity-30"></div>

      <div className="phonepe-container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center phonepe-rhythm-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-black text-gray-900 phonepe-rhythm-4 tracking-tight">
            All Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need, right at your fingertips
          </p>
        </motion.div>

        {/* Service Carousel Rows */}
        <div className="phonepe-rhythm-16 space-y-8">
          {serviceCarouselData.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.2, duration: 0.6 }}
            >
              {/* Row Label */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {rowIndex === 0 && "Data Analytics Services"}
                  {rowIndex === 1 && "Recruitment Services"}
                  {rowIndex === 2 && "IT Services"}
                </h3>
              </div>

              {/* Horizontal Scrolling Container */}
              <div
                ref={(el) => { containerRefs.current[rowIndex] = el; }}
                className="overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseEnter={() => {
                  setHoveredRows(prev => {
                    const newHoveredRows = [...prev];
                    newHoveredRows[rowIndex] = true;
                    return newHoveredRows;
                  });
                }}
                onMouseLeave={() => {
                  handleDragEnd();
                  setHoveredRows(prev => {
                    const newHoveredRows = [...prev];
                    newHoveredRows[rowIndex] = false;
                    return newHoveredRows;
                  });
                }}
              >
                <motion.div
                  className="flex items-center"
                  style={{ x: smoothX }}
                  drag="x"
                  dragConstraints={{ left: -2000, right: 0 }}
                  dragElastic={0.1}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  {row.map((item, index) => (
                    <ServiceCard
                      key={item.id}
                      item={item}
                      index={index}
                      rowIndex={rowIndex}
                    />
                  ))}
                  
                  {/* Duplicate items for infinite scroll effect */}
                  {row.map((item, index) => (
                    <ServiceCard
                      key={`duplicate-${item.id}`}
                      item={item}
                      index={index + row.length}
                      rowIndex={rowIndex}
                    />
                  ))}
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Touch/Swipe Instructions for Mobile */}
        <motion.div 
          className="text-center mt-8 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-sm text-gray-500">
            Swipe left or right to explore more services
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
