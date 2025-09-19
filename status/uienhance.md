## PhonePe-inspired UI Migration Plan

Goal: Replicate the feel and IA of PhonePe’s homepage while keeping TechFlow’s content and brand. Priority: desktop parity first, then mobile parity.

### Phase 0 — Discovery & IA (1 day)
- Audit current components: `Header`, `HeroCarousel`, `ServicesSection`, `Footer`, routes.
- Lock IA: Home, Data Annotation, Recruitment, IT Services, Contact.
- Approve color/typography direction close to PhonePe (strong primary, rounded shapes, soft shadows).

### Phase 1 — Top Navbar Parity (sticky) ✅ COMPLETED
**Completed:** January 17, 2025 at 2:30 PM
- ✅ Exact layout: left logo, center primary nav, right CTA.
- ✅ Styles: white bar, subtle shadow, rounded hover states, compact height.
- ✅ Mobile: hamburger opens right-side drawer sheet.
- ✅ Deliverables: updated `Header` with desktop nav + mobile drawer, focus states, keyboard nav.

### Phase 2 — Hero Carousel (less-than-full height) ✅ COMPLETED
**Completed:** January 17, 2025 at 3:15 PM
- ✅ Viewport height: 70–85vh responsive (smaller than full screen).
- ✅ Autoplay, infinite loop, arrows, dots; smooth easing.
- ✅ Media: image/video slides, gradient overlay, crisp headline + subcopy + dual CTAs.
- ✅ Performance: lazy-load, pause on hover, reduce motion respect.
- ✅ Deliverables: enhanced `HeroCarousel` with config props for speed, height, and autoplay.

### Phase 3 — Three Feature Cards Row ✅ COMPLETED
**Completed:** January 17, 2025 at 3:45 PM
- ✅ Replace with: Data Analytics, Recruitment, IT Services.
- ✅ Card style: elevated white cards, big friendly icon/illustration, title, one-liner, arrow affordance.
- ✅ Interaction: hover lift, ripple-like feedback, entire card clickable.
- ✅ Routing: navigate to `/data-annotation`, `/recruitment`, `/it-services`.

### Phase 4 — Visual Language ✅ COMPLETED
**Completed:** January 17, 2025 at 4:00 PM
- ✅ Tokens: primary, accent, neutrals; spacing; radii; shadows close to PhonePe's softness.
- ✅ Typography: larger headings, comfortable line-height, tighter letter-spacing for headings.
- ✅ Update `app/globals.css` variables and utilities; ensure dark-mode fallback.

### Phase 5 — Micro-interactions ✅ COMPLETED
**Completed:** January 17, 2025 at 4:15 PM
- ✅ Smooth hover and press states on nav, buttons, cards.
- ✅ Subtle entrance animations for hero text/cards (Framer Motion if needed).

### Phase 6 — Mobile Parity (0.5–1 day)
- Right-side drawer with sections and quick links.
- Responsive carousel height, touch gestures, reduced text sizes.
- Cards stack with generous spacing and tappable areas.

### Phase 7 — QA, Performance, A11y (0.5 day)
- Lighthouse: 90+ Performance/Best Practices/SEO, WCAG AA.
- Lazy-load images/video, compress assets, preconnect fonts, prefers-reduced-motion.

---

Milestones & Acceptance Criteria
- Navbar matches PhonePe structure/spacing; mobile drawer opens from right and is keyboard accessible.
- Hero carousel loops infinitely, 70–85vh height, responsive, with arrows/dots and overlay.
- Three cards mirror PhonePe’s composition and interactions; clicking routes correctly.
- Visual polish and micro-interactions feel consistent with PhonePe-style friendliness.

Nice-to-haves (post-MVP)
- Animated SVG icons or Lottie for cards.
- Section dividers with soft curves.
- Light parallax shapes behind hero.

Dependencies
- Icons/illustrations for three services
- Final copy for hero/cards

ETA: ~4–5 working days total.

---

## Phase 8 — Advanced PhonePe UI Replication Plan

### Current State Analysis
**Completed Components:**
- ✅ Header with sticky navigation (PhonePe-style)
- ✅ Hero carousel with 75-85vh height
- ✅ Three service cards with hover effects
- ✅ PhonePe color scheme (#6739B7 primary)
- ✅ Basic animations and micro-interactions

**Gap Analysis vs PhonePe (Based on Screenshots):**
1. **Visual Hierarchy**: PhonePe uses larger, bolder typography with better spacing ✅ COMPLETED
2. **Service Card Design**: PhonePe uses elongated oval cards with thin borders, colored icon circles, and connecting elements - NOT just rounded rectangles
3. **Header Design**: Missing PhonePe's subtle wavy line below header and proper navigation styling
4. **Layout Structure**: Missing PhonePe's distinct section-based layout with horizontal service carousels
5. **Interactive Elements**: Service cards need PhonePe's specific styling with colored icon backgrounds
6. **Background Elements**: Missing PhonePe's gradient backgrounds and decorative elements
7. **Dropdown Menus**: Missing PhonePe's light purple dropdown with business/consumer sections
8. **Card Visuals**: Missing PhonePe's specific card layouts with icons, titles, and descriptions

### Phase 8.1 — Typography & Visual Hierarchy Enhancement (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 4:30 PM
**Target:** Match PhonePe's bold, confident typography
- ✅ **Headings**: Increase font weights to 800-900, reduce letter-spacing to -0.02em
- ✅ **Body Text**: Optimize line-height to 1.6, increase font-size to 18px base
- ✅ **Button Text**: Use 600 weight, proper letter-spacing
- ✅ **Responsive Scaling**: Implement PhonePe's responsive typography scale
- ✅ **Font Loading**: Added Poppins font family with full weight range (300-900)

### Phase 8.2 — Component Design System Overhaul (1 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 5:00 PM
**Target:** Exact PhonePe component styling based on screenshots
- ✅ **Service Card Redesign**: 
  - Shape: Elongated oval cards (not rectangles) with thin black borders
  - Icon Areas: Circular colored backgrounds (purple, orange, pink, grey, teal)
  - Layout: Icon on left, text on right within each card
  - Connecting Elements: Small colored circles/semi-circles between cards
  - Hover: Subtle lift with connecting element animations
- ✅ **Main Service Cards**:
  - Shape: Large rounded rectangles (24px+ border radius)
  - Shadow: Soft, diffused shadows for floating effect
  - Layout: Icon at top, title, description, arrow at bottom right
  - Colors: White background with purple accents
- ✅ **Button Redesign**:
  - Primary: White background with dark text, rounded corners
  - Secondary: Purple background with white text
  - Size variants: Proper padding for touch targets
  - Hover states: Scale 1.02, shadow enhancement
- ✅ **Header Enhancements**:
  - Add subtle wavy line below header
  - Implement dropdown menus with light purple backgrounds
  - Business/Consumer section organization

### Phase 8.3 — Advanced Animation System (1 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 6:00 PM
**Target:** PhonePe-level smooth animations based on screenshots
- ✅ **Service Carousel Animations**: 
  - Horizontal scrolling/carousel for service cards with Framer Motion
  - Smooth transitions between slides with spring physics
  - Connecting element animations (circles/semi-circles) with hover states
- ✅ **Card Interactions**:
  - Enhanced hover effects on service cards with connecting elements
  - Main service card hover with subtle lift and shadow transitions
  - Icon animations within colored circles with rotation effects
- ✅ **Dropdown Animations**:
  - Smooth dropdown menu transitions with blur effects
  - Business/Consumer section animations with staggered children
  - Enhanced mobile drawer with spring animations
- ✅ **Micro-interactions**: 
  - Button press feedback (scale 0.98) with spring physics
  - Card hover with smooth shadow transitions
  - Loading states with skeleton screens and shimmer effects
- ✅ **Performance**: GPU acceleration, CSS transforms, optimized animations
- ✅ **Accessibility**: Full prefers-reduced-motion support, high contrast mode, focus states

### Phase 8.4 — Layout & Spacing Refinement (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 6:30 PM
**Target:** PhonePe's precise spacing system
- ✅ **Section Spacing**: 120px between major sections
- ✅ **Container Max-width**: 1200px with proper padding
- ✅ **Grid System**: Implement PhonePe's 12-column grid
- ✅ **Vertical Rhythm**: Consistent spacing scale (8px base unit)
- ✅ **Mobile Optimization**: Proper touch targets (44px minimum)

### Phase 8.5 — Background & Visual Effects (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 7:00 PM
**Target:** PhonePe's visual enhancements based on screenshots
- ✅ **Gradient Backgrounds**: 
  - Hero sections: Deep purple to lavender gradient
  - Service sections: White backgrounds with subtle accents
  - Footer sections: Dark purple backgrounds
- ✅ **Decorative Elements**:
  - Subtle wavy lines below headers
  - Circular gradient elements behind carousel indicators
  - Curved purple shapes at section bottoms
- ✅ **Section Backgrounds**:
  - Alternating white and gradient backgrounds
  - Proper contrast for readability
- ✅ **Visual Hierarchy**: 
  - Clear section separation
  - Proper use of white space

### Phase 8.6 — Interactive Elements Enhancement (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 8:00 PM
**Target:** PhonePe's engaging interactions
- ✅ **Form Elements**: 
  - Floating labels with smooth animations
  - Enhanced focus states with PhonePe-style styling
  - Error state animations with shake effects
  - Success state animations with pulse effects
  - Interactive feedback with ripple effects
- ✅ **Navigation**:
  - Smooth scroll to sections with active tracking
  - Active state indicators in navigation
  - Enhanced mobile drawer with spring animations
  - Right-side smooth scroll navigation dots
- ✅ **Loading States**: 
  - Skeleton loaders with shimmer effects
  - Progress indicators with animated fills
  - Smooth content reveals with intersection observer
  - Staggered content reveals for lists
  - Button loading states with spinners

### Phase 8.7 — Mobile-First Optimization (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 9:00 PM
**Target:** Perfect mobile experience like PhonePe app
- ✅ **Touch Interactions**: 
  - Enhanced touch targets (44px minimum, 48px comfortable)
  - Swipe gestures for carousel with smooth drag feedback
  - Pull-to-refresh indicators with visual feedback
  - Mouse drag support for desktop users
  - Active states for better touch feedback
- ✅ **Performance**: 
  - Next.js Image optimization with blur placeholders
  - Lazy loading with priority for first image
  - Critical CSS inlining for mobile
  - GPU acceleration for smooth animations
  - Reduced motion on mobile for better performance
- ✅ **Responsive Design**: 
  - Mobile-first approach with proper breakpoints
  - Tablet optimization with enhanced touch targets
  - Desktop enhancements with full hover effects
  - Responsive spacing and typography scaling

### Phase 8.8 — Service Carousel Implementation (1 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 10:30 PM
**Target:** PhonePe's horizontal service carousel
- ✅ **Service Card Carousel**: 
  - Horizontal scrolling service cards (oval shapes)
  - Multiple rows of services (3 rows visible)
  - Connecting elements between cards
  - Smooth scroll animations
- ✅ **Service Categories**:
  - Cable TV, Mobile Recharge, FASTag, DTH
  - Credit Card Payment, Broadband, Gas, Electricity
  - Loan repayment, Insurance, Municipal tax, Recurring Deposit
- ✅ **Interactive Elements**:
  - Touch/swipe gestures for mobile
  - Hover effects on desktop
  - Smooth transitions between slides
- ✅ **Visual Design**:
  - Oval card shapes with thin borders
  - Colored icon circles (purple, orange, pink, grey, teal)
  - Proper spacing and alignment

### Phase 8.9 — Advanced Features Implementation (0.5 day) ✅ COMPLETED
**Completed:** January 17, 2025 at 11:00 PM
**Target:** PhonePe-level feature richness
- ✅ **Dropdown Menus**: 
  - Business/Consumer sections
  - Service listings with icons and descriptions
  - Smooth dropdown animations
- ✅ **User Experience**: 
  - Progress indicators
  - Success/error states
  - Loading animations

### Technical Implementation Details

**Color Palette (PhonePe Exact):**
```css
--primary: #6739B7 (PhonePe Purple)
--primary-light: #9A7EC9
--secondary: #E5C453 (PhonePe Yellow)
--accent: #E57255 (PhonePe Orange)
--info: #46BDDF (PhonePe Blue)
--success: #4CAF50
--warning: #FF9800
--error: #F44336
```

**Typography Scale:**
```css
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 18px
--font-size-lg: 20px
--font-size-xl: 24px
--font-size-2xl: 32px
--font-size-3xl: 40px
--font-size-4xl: 48px
--font-size-5xl: 64px
```

**Spacing System:**
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
```

**Animation Timing:**
```css
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms
--easing-smooth: cubic-bezier(0.4, 0, 0.2, 1)
--easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Success Metrics
- **Visual Fidelity**: 95% match with PhonePe's design
- **Performance**: Lighthouse score 90+ across all metrics
- **Accessibility**: WCAG AA compliance
- **Mobile Experience**: Smooth 60fps animations
- **User Engagement**: Improved interaction rates

### Dependencies
- High-quality icons/illustrations for services
- Optimized images and videos
- Font licensing (Uni Neue or similar)
- Animation libraries (Framer Motion)

### Timeline
**Total Duration:** 6-7 days
- Phase 8.1: Day 1 (Typography) ✅ COMPLETED - January 17, 2025 at 4:30 PM
- Phase 8.2: Day 2 (Component Design System) ✅ COMPLETED - January 17, 2025 at 5:00 PM
- Phase 8.3: Day 3 (Advanced Animations) ✅ COMPLETED - January 17, 2025 at 6:00 PM
- Phase 8.4: Day 4 (Layout & Spacing) ✅ COMPLETED - January 17, 2025 at 6:30 PM
- Phase 8.5: Day 5 (Background & Visual Effects) ✅ COMPLETED - January 17, 2025 at 7:00 PM
- Phase 8.6: Day 6 (Interactive Elements) ✅ COMPLETED - January 17, 2025 at 8:00 PM
- Phase 8.7: Day 7 (Mobile Optimization)
- Phase 8.8-8.9: Day 7 (Service Carousel + Advanced Features)
- Testing & Refinement: Day 8

**Priority Order:** 8.1 ✅ → 8.2 ✅ → 8.3 ✅ → 8.4 ✅ → 8.5 ✅ → 8.6 ✅ → 8.7 → 8.8 → 8.9

---

## Phase 9 — Post-Implementation Refinements (Based on changesRequired.md)

### Current Issues Identified
Based on the updated requirements and image comparisons with PhonePe:

**a/ Topbar/Navbar Issues:**
- "Get Started" button not required
- Services dropdown needs restructuring: 3 separate dropdown items instead of single "Services" dropdown
- Each dropdown should have individual category lists (Data Annotation, Recruitment, IT Services)

**b/ Hero Carousel Issues:**
- Current carousel doesn't match PhonePe's simple, clean design
- Too many scroll indicators (horizontal + vertical) - only horizontal needed
- Big circles instead of simple dots/small rectangles
- Need PhonePe-style scroll icons and navigation

**c/ Service Cards Issues:**
- Mix of circle/pill and card elements - should be cards only
- Images and headers need size reduction
- Typography is too bold/large (over-typography issue)

**d/ Services Carousel Issues:**
- Moving too fast
- Need slow movement with pause on hover
- Resume movement when mouse leaves
- Add scroll feature as alternative

**e/ Unnecessary Sections:**
- "Advanced Features Demo" section - remove completely
- "Why Choose TechFlow Solutions?" section - remove completely

**f/ Footer Issues:**
- Text visibility poor
- Need background gradient for better readability

### Phase 9.1 — Navbar Refinement (0.5 day)
**Target:** Clean PhonePe-style navigation
- Remove "Get Started" button from top navbar
- Restructure dropdown menus:
  - Replace single "Services" dropdown with 3 separate dropdown items
  - Data Annotation dropdown with category lists
  - Recruitment dropdown with category lists  
  - IT Services dropdown with category lists
- Implement PhonePe-style dropdown styling and animations

### Phase 9.2 — Hero Carousel Redesign (0.5 day)
**Target:** Exact PhonePe carousel design
- Remove vertical scroll indicators
- Implement horizontal-only navigation
- Replace big circles with simple dots/small rectangles
- Add PhonePe-style scroll icons
- Simplify carousel controls to match PhonePe's clean design
- Ensure carousel height and proportions match PhonePe

### Phase 9.3 — Service Cards Simplification (0.5 day)
**Target:** Clean card-only design
- Remove all circle/pill elements from service cards
- Keep only card-based design with images and headers
- Reduce typography size and boldness
- Fix over-typography issues
- Ensure cards match PhonePe's clean, minimal style

### Phase 9.4 — Services Carousel Speed Control (0.5 day)
**Target:** Smooth, controlled carousel movement
- Implement slow carousel movement
- Add pause on hover functionality
- Resume movement when mouse leaves area
- Add scroll feature as alternative navigation
- Ensure smooth transitions and user control

### Phase 9.5 — Section Cleanup (0.25 day)
**Target:** Remove unnecessary content
- Remove "Advanced Features Demo" section completely
- Remove "Why Choose TechFlow Solutions?" section completely
- Clean up any related components and imports
- Ensure page flow remains smooth after removals

### Phase 9.6 — Footer Enhancement (0.25 day)
**Target:** Improved footer readability
- Enhance text visibility with better contrast
- Add background gradient for better readability
- Ensure footer matches PhonePe's styling
- Test footer across different screen sizes

### Success Criteria for Phase 9
- Navbar matches PhonePe's clean dropdown structure
- Hero carousel has PhonePe's simple navigation style
- Service cards are clean and typography-appropriate
- Services carousel moves smoothly with user control
- Unnecessary sections removed without breaking layout
- Footer is highly readable with proper contrast

### Timeline for Phase 9
**Total Duration:** 2.5 days
- Phase 9.1: Day 1 Morning (Navbar Refinement)
- Phase 9.2: Day 1 Afternoon (Hero Carousel Redesign)  
- Phase 9.3: Day 2 Morning (Service Cards Simplification)
- Phase 9.4: Day 2 Afternoon (Services Carousel Speed Control)
- Phase 9.5: Day 3 Morning (Section Cleanup)
- Phase 9.6: Day 3 Afternoon (Footer Enhancement)
- Testing & Final Refinement: Day 4

**Priority Order:** 9.1 → 9.2 → 9.3 → 9.4 → 9.5 → 9.6

---

## Phase 10 — Service Pages UI Enhancement Plan

### Current Status Analysis
**Root Page (`/`)** - ✅ **COMPLETED**
- Uses PhonePe-style components: `HeroCarousel`, `ServicesSection`, `ServiceCarousel`, `AboutSection`
- Has PhonePe styling classes and animations
- Fully enhanced with PhonePe design system

**Service Pages** - 🔄 **IN PROGRESS**
1. **`/data-annotation`** - ✅ **COMPLETED** - PhonePe styling applied
2. **`/it-services`** - ❌ **NEED ENHANCEMENT** - Basic design, needs PhonePe styling  
3. **`/recruitment`** - ❌ **NEED ENHANCEMENT** - Basic design, needs PhonePe styling
4. **`/contact`** - ❌ **NEED ENHANCEMENT** - Has some enhancements but could be improved

### Phase 10.1 — Data Annotation Page Enhancement (1 day) ✅ COMPLETED
**Completed:** January 18, 2025 at 12:00 PM
**Target:** Apply PhonePe design system to data annotation page
- ✅ **Hero Section Enhancement:**
  - Added PhonePe-style particle system and floating elements
  - Implemented gradient backgrounds with PhonePe colors
  - Added PhonePe-style decorative elements (circular shapes, curved elements)
  - Enhanced typography with PhonePe font weights and spacing
- ✅ **Service Cards Redesign:**
  - Converted to PhonePe-style oval cards with colored icon circles
  - Added hover effects with lift and shadow transitions
  - Implemented connecting elements between cards
  - Used PhonePe color scheme (purple, orange, pink, teal)
- ✅ **Process Workflow Enhancement:**
  - Added PhonePe-style numbered circles with animations
  - Implemented staggered reveal animations
  - Added PhonePe-style background patterns
- ✅ **CTA Section Enhancement:**
  - Applied PhonePe-style button designs
  - Added gradient backgrounds
  - Implemented PhonePe-style spacing and typography

### Phase 10.2 — IT Services Page Enhancement (1 day) ✅ COMPLETED
**Completed:** January 18, 2025 at 1:30 PM
**Target:** Apply PhonePe design system to IT services page
- ✅ **Hero Section Enhancement:**
  - Added PhonePe-style particle system and floating elements
  - Implemented gradient backgrounds with PhonePe colors
  - Added PhonePe-style decorative elements
  - Enhanced typography with PhonePe font weights and spacing
- ✅ **Services Overview Enhancement:**
  - Converted to PhonePe-style oval cards with colored icon circles
  - Added hover effects with lift and shadow transitions
  - Implemented connecting elements between service cards
  - Used PhonePe color scheme (purple, orange, pink, teal)
- ✅ **Technology Stack Section:**
  - Converted to PhonePe-style card layout
  - Added colored icon circles and hover effects
  - Implemented PhonePe-style background patterns
  - Used PhonePe color scheme (blue, green, purple)
- ✅ **Process Section Enhancement:**
  - Added PhonePe-style numbered circles with animations
  - Implemented staggered reveal animations
  - Added PhonePe-style background patterns
  - Added connecting elements between process steps
- ✅ **Why Choose Us Section:**
  - Converted to PhonePe-style card layout
  - Added colored icon circles and hover effects
  - Implemented PhonePe-style spacing and typography
- ✅ **CTA Section Enhancement:**
  - Applied PhonePe-style button designs
  - Added gradient backgrounds
  - Implemented PhonePe-style spacing and typography

### Phase 10.3 — Recruitment Page Enhancement (1 day)
**Target:** Apply PhonePe design system to recruitment page
- **Hero Section Enhancement:**
  - Add PhonePe-style particle system and floating elements
  - Implement gradient backgrounds with PhonePe colors
  - Add PhonePe-style decorative elements
  - Enhance typography with PhonePe font weights and spacing
- **Services Overview Enhancement:**
  - Convert to PhonePe-style oval cards with colored icon circles
  - Add hover effects with lift and shadow transitions
  - Implement connecting elements between service cards
  - Use PhonePe color scheme
- **Success Metrics Section:**
  - Add PhonePe-style animated counters
  - Implement gradient backgrounds
  - Add PhonePe-style decorative elements
- **Recruitment Process Enhancement:**
  - Add PhonePe-style numbered circles with animations
  - Implement staggered reveal animations
  - Add PhonePe-style background patterns

### Phase 10.4 — Contact Page Enhancement (0.5 day)
**Target:** Enhance contact page with PhonePe design system
- **Hero Section Enhancement:**
  - Add PhonePe-style particle system and floating elements
  - Implement gradient backgrounds with PhonePe colors
  - Add PhonePe-style decorative elements
- **Contact Form Enhancement:**
  - Enhance floating labels with PhonePe styling
  - Add PhonePe-style form animations
  - Implement PhonePe-style button designs
- **FAQ Section Enhancement:**
  - Add PhonePe-style card layouts
  - Implement staggered reveal animations
  - Add PhonePe-style background patterns
- **CTA Section Enhancement:**
  - Apply PhonePe-style button designs
  - Add gradient backgrounds
  - Implement PhonePe-style spacing and typography

### Phase 10.5 — Mobile Optimization for Service Pages (0.5 day)
**Target:** Ensure all service pages are mobile-optimized
- **Responsive Design:**
  - Ensure proper mobile breakpoints
  - Optimize touch targets for mobile
  - Implement mobile-first approach
- **Performance Optimization:**
  - Add lazy loading for images
  - Optimize animations for mobile
  - Implement reduced motion support
- **Touch Interactions:**
  - Enhance touch feedback
  - Implement swipe gestures where appropriate
  - Add proper active states

### Success Criteria for Phase 10
- All service pages match PhonePe design system
- Consistent visual hierarchy across all pages
- Smooth animations and micro-interactions
- Mobile-optimized experience
- Performance scores maintained
- Accessibility standards met

### Timeline for Phase 10
**Total Duration:** 4 days
- Phase 10.1: Day 1 (Data Annotation Page Enhancement)
- Phase 10.2: Day 2 (IT Services Page Enhancement)
- Phase 10.3: Day 3 (Recruitment Page Enhancement)
- Phase 10.4: Day 4 Morning (Contact Page Enhancement)
- Phase 10.5: Day 4 Afternoon (Mobile Optimization)
- Testing & Final Refinement: Day 5

**Priority Order:** 10.1 → 10.2 → 10.3 → 10.4 → 10.5

### Dependencies
- PhonePe design system components already implemented
- Color palette and typography system established
- Animation system (Framer Motion) already configured
- Mobile optimization patterns already established

### Technical Requirements
- Maintain existing functionality while enhancing UI
- Ensure all pages are responsive and accessible
- Implement consistent PhonePe styling across all pages
- Optimize performance for all service pages
- Test across different devices and browsers
