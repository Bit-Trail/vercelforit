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

// Main Services - PhonePe Style
export const services: Service[] = [
  {
    id: "data-annotation",
    title: "Data Analytics",
    description: "Build, manage & grow your data intelligence",
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
    title: "Recruitment",
    description: "Protect, plan & secure your talent pipeline",
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
    title: "IT Services",
    description: "Access quick, transparent & secure solutions",
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

// PhonePe-style Service Carousel Data
export interface ServiceCarouselItem {
  id: string;
  title: string;
  icon: string;
  color: string;
  href?: string;
}

export const serviceCarouselData: ServiceCarouselItem[][] = [
  // Row 1: Data Analytics Services
  [
    { id: "data-labeling", title: "Data Labeling", icon: "Tag", color: "purple" },
    { id: "image-annotation", title: "Image Annotation", icon: "Image", color: "orange" },
    { id: "text-classification", title: "Text Classification", icon: "FileText", color: "pink" },
    { id: "video-annotation", title: "Video Annotation", icon: "Video", color: "teal" },
    { id: "nlp-processing", title: "NLP Processing", icon: "MessageSquare", color: "purple" },
    { id: "quality-assurance", title: "Quality Assurance", icon: "CheckCircle", color: "orange" },
    { id: "data-validation", title: "Data Validation", icon: "Shield", color: "pink" },
    { id: "ml-training", title: "ML Training Data", icon: "Brain", color: "teal" }
  ],
  // Row 2: Recruitment Services
  [
    { id: "executive-search", title: "Executive Search", icon: "Crown", color: "purple" },
    { id: "tech-recruitment", title: "Tech Recruitment", icon: "Code", color: "orange" },
    { id: "c-level-hiring", title: "C-Level Hiring", icon: "UserCheck", color: "pink" },
    { id: "talent-sourcing", title: "Talent Sourcing", icon: "Search", color: "teal" },
    { id: "background-checks", title: "Background Checks", icon: "FileCheck", color: "purple" },
    { id: "cultural-fit", title: "Cultural Fit", icon: "Users", color: "orange" },
    { id: "interview-process", title: "Interview Process", icon: "MessageCircle", color: "pink" },
    { id: "onboarding", title: "Onboarding", icon: "UserPlus", color: "teal" }
  ],
  // Row 3: IT Services
  [
    { id: "cloud-migration", title: "Cloud Migration", icon: "Cloud", color: "purple" },
    { id: "custom-development", title: "Custom Development", icon: "Laptop", color: "orange" },
    { id: "cybersecurity", title: "Cybersecurity", icon: "Shield", color: "pink" },
    { id: "devops", title: "DevOps", icon: "Settings", color: "teal" },
    { id: "api-development", title: "API Development", icon: "Link", color: "purple" },
    { id: "database-management", title: "Database Management", icon: "Database", color: "orange" },
    { id: "system-integration", title: "System Integration", icon: "Zap", color: "pink" },
    { id: "tech-support", title: "24/7 Tech Support", icon: "Headphones", color: "teal" }
  ]
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

// PhonePe-style Dropdown Menu Data
export interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

export interface DropdownItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  badge?: string;
  isNew?: boolean;
}

export const dropdownSections: DropdownSection[] = [
  {
    title: "Business Solutions",
    items: [
      {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Build, manage & grow your data intelligence",
        icon: "Database",
        href: "/data-annotation",
        badge: "Popular"
      },
      {
        id: "recruitment",
        title: "Recruitment",
        description: "Protect, plan & secure your talent pipeline",
        icon: "Users",
        href: "/recruitment",
        badge: "New"
      },
      {
        id: "it-services",
        title: "IT Services",
        description: "Access quick, transparent & secure solutions",
        icon: "Laptop",
        href: "/it-services"
      },
      {
        id: "consulting",
        title: "Tech Consulting",
        description: "Strategic technology advisory services",
        icon: "Lightbulb",
        href: "/consulting",
        isNew: true
      }
    ]
  },
  {
    title: "Consumer Services",
    items: [
      {
        id: "mobile-recharge",
        title: "Mobile Recharge",
        description: "Instant mobile top-up & recharge",
        icon: "Smartphone",
        href: "/mobile-recharge"
      },
      {
        id: "bill-payments",
        title: "Bill Payments",
        description: "Pay electricity, water & gas bills",
        icon: "Receipt",
        href: "/bill-payments"
      },
      {
        id: "insurance",
        title: "Insurance",
        description: "Health, life & vehicle insurance",
        icon: "Shield",
        href: "/insurance"
      },
      {
        id: "investments",
        title: "Investments",
        description: "Mutual funds, stocks & SIP",
        icon: "TrendingUp",
        href: "/investments"
      }
    ]
  }
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
