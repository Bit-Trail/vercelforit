// Dummy data for the company landing page

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  employees: number;
  clients: number;
  projects: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  officeHours: string;
}

// Company Information
export const companyInfo: CompanyInfo = {
  name: "TechFlow Solutions",
  tagline: "Transform Your Business with Cutting-Edge Technology Solutions",
  description: "We're the trusted technology partner for forward-thinking businesses. Our expert team delivers precision data annotation, strategic recruitment, and innovative IT solutions that drive real results and accelerate your digital transformation.",
  founded: 2018,
  employees: 150,
  clients: 500,
  projects: 1000
};

// Main Services
export const services: Service[] = [
  {
    id: "data-annotation",
    title: "Data Annotation & Translation",
    description: "Accelerate your AI initiatives with our precision data annotation services. We transform raw data into training-ready datasets that power smarter, more accurate machine learning models.",
    icon: "Database",
    features: [
      "99.5% Accuracy Guarantee",
      "Multi-modal Data Processing",
      "Real-time Quality Monitoring",
      "Scalable Annotation Pipeline",
      "Expert Domain Knowledge"
    ],
    href: "/data-annotation"
  },
  {
    id: "recruitment",
    title: "Strategic Talent Acquisition",
    description: "Find and secure top-tier talent that drives your business forward. Our proven recruitment strategies connect you with exceptional professionals who align with your vision and culture.",
    icon: "Users",
    features: [
      "Executive & C-Level Search",
      "Technical Talent Specialists",
      "Industry-Specific Expertise",
      "Cultural Fit Assessment",
      "90-Day Success Guarantee"
    ],
    href: "/recruitment"
  },
  {
    id: "it-services",
    title: "Digital Transformation Solutions",
    description: "Modernize your technology infrastructure with our comprehensive IT services. From cloud migration to custom development, we deliver solutions that scale with your business.",
    icon: "Laptop",
    features: [
      "Cloud-First Architecture",
      "Custom Software Development",
      "Legacy System Modernization",
      "Cybersecurity Solutions",
      "24/7 Expert Support"
    ],
    href: "/it-services"
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "Chief Technology Officer",
    content: "TechFlow Solutions revolutionized our AI development pipeline. Their data annotation accuracy of 99.5% and lightning-fast turnaround helped us launch our flagship AI product 3 months ahead of schedule, saving us $2M in development costs.",
    rating: 5,
    avatar: "/images/avatars/sarah.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Global Enterprises",
    role: "VP of Human Resources",
    content: "Finding top-tier talent in today's competitive market is challenging. TechFlow's strategic approach and deep industry connections helped us secure 5 C-level executives and 15 senior technical roles in just 6 months. Their cultural fit assessment is spot-on.",
    rating: 5,
    avatar: "/images/avatars/michael.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "StartupXYZ",
    role: "CEO & Founder",
    content: "From startup to scale-up, TechFlow has been our technology backbone. Their cloud migration strategy and custom development solutions enabled us to scale from 10 to 100 employees without a single system downtime. ROI increased by 300%.",
    rating: 5,
    avatar: "/images/avatars/emily.jpg"
  }
];

// Contact Information
export const contactInfo: ContactInfo = {
  email: "info@techflowsolutions.com",
  phone: "+91 Coming Soon",
  address: "Coming Soon",
  officeHours: "Mon-Fri: 9:00 AM - 6:00 PM"
};

// Navigation Menu Items
export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Data Annotation", href: "/data-annotation" },
  { name: "Recruitment", href: "/recruitment" },
  { name: "IT Services", href: "/it-services" },
  { name: "Contact", href: "/contact" }
];

// Statistics for Why Choose Us section
export const statistics = [
  {
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide"
  },
  {
    number: "1000+",
    label: "Projects Completed",
    description: "Successful project deliveries"
  },
  {
    number: "150+",
    label: "Expert Team",
    description: "Skilled professionals"
  },
  {
    number: "99%",
    label: "Success Rate",
    description: "Project success guarantee"
  }
];

// Why Choose Us Benefits
export const benefits = [
  {
    title: "Proven Track Record",
    description: "6+ years of delivering exceptional results with 99% client satisfaction rate and $50M+ in client value created",
    icon: "Award"
  },
  {
    title: "Always-On Support",
    description: "Dedicated success managers and 24/7 technical support ensuring your projects run smoothly around the clock",
    icon: "Clock"
  },
  {
    title: "Future-Ready Solutions",
    description: "Scalable, cloud-native solutions designed to grow with your business and adapt to tomorrow's challenges",
    icon: "TrendingUp"
  },
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols, compliance certifications, and rigorous quality assurance processes",
    icon: "Shield"
  }
];
