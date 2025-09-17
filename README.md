# Company Landing Page Project

## 📋 Project Overview

A modern, responsive company landing page showcasing three main services with professional design, animations, and interactive elements.

## 🎯 Client Requirements

### Core Services (3 Main Navigation Tabs)
1. **Data Annotation & Translation** - AI/ML data services
2. **Recruitment** - HR and talent acquisition services  
3. **IT Services** - Technology solutions and consulting

### Technical Requirements
- ✅ **Frontend Only** - No backend required
- ✅ **Dummy Data** - Static content for demonstration
- ✅ **Animations** - Smooth transitions and micro-interactions
- ✅ **Reactive Design** - Interactive elements and hover effects
- ✅ **Responsive** - Mobile-first approach
- ✅ **Modern UI/UX** - Professional company website standards

## 🏗️ Project Structure

```
verceljs/
├── app/
│   ├── page.tsx                 # Home/Landing page
│   ├── data-annotation/         # Data Annotation & Translation page
│   ├── recruitment/             # Recruitment services page
│   ├── it-services/             # IT Services page
│   ├── contact/                 # Contact Us page
│   ├── layout.tsx               # Root layout with header/footer
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── navigation/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       └── HoverEffects.tsx
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── data.ts                  # Dummy data
└── public/
    ├── images/                  # Company images, logos
    └── icons/                   # Service icons
```

## 🎨 Design System

### Color Palette
- **Primary**: Professional blue (#2563eb)
- **Secondary**: Clean grey (#64748b)
- **Accent**: Success green (#10b981)
- **Background**: Pure white (#ffffff)
- **Text**: Dark grey (#1e293b)

### Typography
- **Headings**: Inter (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium)
- **Sizes**: 12px, 14px, 16px, 18px, 24px, 32px, 48px

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Service cards, testimonial cards
- **Forms**: Contact form with validation
- **Navigation**: Sticky header with smooth scrolling

## 📱 Page Structure

### 1. Home Page (`/`)
**Sections:**
- Hero Section (Company intro, CTA)
- Services Overview (3 main services preview)
- About Us (Company story, values)
- Why Choose Us (Benefits, statistics)
- Testimonials (Client reviews)
- Contact CTA

### 2. Data Annotation & Translation (`/data-annotation`)
**Content:**
- Service overview
- Annotation types (Image, Text, Video, Audio)
- Translation services (Languages supported)
- Process workflow
- Case studies
- Pricing tiers
- Contact form

### 3. Recruitment (`/recruitment`)
**Content:**
- Recruitment services overview
- Industries served
- Candidate screening process
- Success metrics
- Client testimonials
- Job board integration
- Contact form

### 4. IT Services (`/it-services`)
**Content:**
- Technology solutions
- Development services
- Consulting areas
- Technology stack
- Project portfolio
- Support services
- Contact form

### 5. Contact Us (`/contact`)
**Sections:**
- Contact information
- Office locations
- Contact form
- Map integration
- Social media links

## 🎭 Animations & Interactions

### Page Transitions
- Smooth route transitions
- Loading states
- Scroll-triggered animations

### Micro-interactions
- Button hover effects
- Card hover animations
- Form field focus states
- Navigation menu animations

### Scroll Animations
- Fade in on scroll
- Slide in from sides
- Staggered animations
- Parallax effects

## 📊 Dummy Data Structure

### Company Information
```typescript
interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  employees: number;
  clients: number;
  projects: number;
}
```

### Services Data
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: PricingTier[];
}
```

### Testimonials
```typescript
interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.3
- **Styling**: Tailwind CSS v4.1.13
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## 📋 Development Phases

### Phase 1: Foundation (Week 1)
- [ ] Project setup and configuration
- [ ] Design system implementation
- [ ] Basic layout and navigation
- [ ] Home page structure

### Phase 2: Content Pages (Week 2)
- [ ] Data Annotation page
- [ ] Recruitment page
- [ ] IT Services page
- [ ] Contact page

### Phase 3: Enhancements (Week 3)
- [ ] Animations and interactions
- [ ] Responsive design
- [ ] Performance optimization
- [ ] Testing and bug fixes

### Phase 4: Polish (Week 4)
- [ ] Content review and updates
- [ ] SEO optimization
- [ ] Accessibility improvements
- [ ] Final testing and deployment

## 🎯 Success Metrics

- **Performance**: Lighthouse score > 90
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Core Web Vitals optimization
- **UX**: Smooth animations, intuitive navigation
- **Responsive**: Perfect on all device sizes

## 📝 Content Guidelines

### Tone of Voice
- Professional yet approachable
- Clear and concise
- Benefit-focused
- Trust-building

### Key Messages
- Quality service delivery
- Industry expertise
- Client satisfaction
- Innovation and technology

## 🔄 Maintenance & Updates

- Regular content updates
- Performance monitoring
- Security updates
- Client feedback integration

---

## 📞 Contact Information

**Client Requirements Contact**: [To be filled]
**Project Manager**: [To be filled]
**Development Team**: [To be filled]

---

*Last Updated: [Current Date]*
*Version: 1.0*