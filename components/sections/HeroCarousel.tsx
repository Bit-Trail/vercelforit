"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  alt?: string;
}

interface HeroCarouselProps {
  height?: 'small' | 'medium' | 'large';
  autoplaySpeed?: number;
  enableAutoplay?: boolean;
  enableInfiniteLoop?: boolean;
}

const carouselItems: CarouselItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/images/phonepe1.webp',
    title: 'AI-Powered Data Solutions',
    description: 'Transform your data into actionable insights with our cutting-edge AI and machine learning technologies.',
    alt: 'AI Data Solutions'
  },
  {
    id: '2',
    type: 'image',
    src: '/images/phonepe2.webp',
    title: 'Strategic Talent Acquisition',
    description: 'Find the right talent for your organization with our comprehensive recruitment and executive search services.',
    alt: 'Recruitment Services'
  },
  {
    id: '3',
    type: 'image',
    src: '/images/phonepe3.webp',
    title: 'Digital Transformation',
    description: 'Accelerate your business growth with our comprehensive IT services and technology consulting.',
    alt: 'IT Services'
  },
  {
    id: '4',
    type: 'image',
    src: '/images/phonepe4.webp',
    title: 'Cloud Infrastructure',
    description: 'Scale your operations with our cloud migration and infrastructure management services.',
    alt: 'Cloud Services'
  }
];


export default function HeroCarousel({ 
  height = 'medium', 
  autoplaySpeed = 4000, 
  enableAutoplay = true, 
  enableInfiniteLoop = true 
}: HeroCarouselProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(enableAutoplay);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Touch interaction states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered || !enableAutoplay || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (enableInfiniteLoop) {
          return prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === carouselItems.length - 1 ? prevIndex : prevIndex + 1;
        }
      });
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, enableAutoplay, enableInfiniteLoop, autoplaySpeed, prefersReducedMotion]);

  const goToPrevious = () => {
    if (enableInfiniteLoop) {
      setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (enableInfiniteLoop) {
      setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex === carouselItems.length - 1 ? currentIndex : currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch event handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    setDragOffset(diff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    setTouchStart(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || !isDragging) return;
    
    const diff = touchStart - e.clientX;
    setDragOffset(diff);
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Prevent default drag behavior
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentItem = carouselItems[currentIndex];

  // Height configuration based on props - PhonePe style
  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-[60vh]';
      case 'large':
        return 'h-[70vh]';
      case 'medium':
      default:
        return 'h-[65vh] sm:h-[70vh] lg:h-[75vh]';
    }
  };

  return (
    <section className="phonepe-bg-hero">
      {/* PhonePe Particle System */}
      <div className="phonepe-particles">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="phonepe-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* PhonePe Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="phonepe-floating-element w-80 h-80 -top-40 -right-40 blur-3xl"></div>
        <div className="phonepe-floating-element w-80 h-80 -bottom-40 -left-40 blur-3xl"></div>
        <div className="phonepe-floating-element w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>
      
      {/* PhonePe Gradient Overlays */}
      <div className="phonepe-overlay-gradient"></div>
      <div className="phonepe-overlay-radial"></div>

      {/* Full-bleed wrapper */}
      <div className="relative z-10 max-w-none px-0 py-0">
        <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Carousel */}
          <div 
            ref={carouselRef}
            className={`relative w-screen ${getHeightClass()} overflow-hidden shadow-2xl hover-lift hover-glow transition-all duration-500 select-none`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
              setDragOffset(0);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onDragStart={handleDragStart}
            style={{
              transform: isDragging ? `translateX(${dragOffset * 0.1}px)` : 'translateX(0)',
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
          >
            {/* Media Content */}
            <div className="relative w-full h-full overflow-hidden">
              {currentItem.type === 'video' ? (
                <video
                  className="w-full h-full object-cover transition-opacity duration-700"
                  poster="/images/video-poster.jpg"
                  controls
                  preload="metadata"
                  playsInline
                  key={currentItem.id}
                >
                  <source src={currentItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt || currentItem.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  priority={currentIndex === 0}
                  sizes="100vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              )}
              
            </div>

            {/* PhonePe-style Navigation Controls - Simple and clean */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* PhonePe-style Play/Pause Button - Simple and minimal */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-all duration-300"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-white" />
              ) : (
                <Play className="h-4 w-4 text-white" />
              )}
            </button>
          </div>


          {/* PhonePe-style Progress Indicators - Simple dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex justify-center space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
