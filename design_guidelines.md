# Design Guidelines: Washing Machine Repair Service Landing Page (Arabic/RTL)

## Design Approach
**Service Industry Reference-Based**: Drawing from successful service business landing pages (HomeAdvisor, TaskRabbit) combined with local Middle Eastern design preferences that emphasize trust, accessibility, and immediate action.

## Core Design Principles
- **Trust-First Design**: Professional, clean aesthetic that builds credibility
- **Conversion-Focused**: Multiple clear CTAs with prominent phone number placement
- **Mobile-Primary**: Given service business nature, optimize for mobile users seeking immediate help
- **Cultural Appropriateness**: RTL layout with design patterns familiar to Arabic-speaking users

## Typography System
**Font Family**: Cairo (Google Fonts) - excellent Arabic readability and modern feel

**Hierarchy**:
- Hero Headline: 3xl/4xl (mobile) to 5xl/6xl (desktop), bold weight
- Section Headings: 2xl to 4xl, semibold
- Service Items/Features: lg to xl, medium weight
- Body Text: base to lg, regular weight
- Phone Number (Header): xl to 2xl, bold - highly prominent
- CTA Buttons: lg to xl, semibold

**Line Heights**: Generous spacing (1.6-1.8) for Arabic text readability

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Section padding: py-12 (mobile) to py-20 (desktop)
- Horizontal padding: px-4 to px-8

**Grid Patterns**:
- Features: 2-column grid on desktop, single column mobile
- Brands: 3-4 column grid (desktop), 2 columns (tablet), 1 column (mobile)
- Services Checklist: 2 columns (desktop), single column (mobile)

## Component Library

### Header (Sticky)
- Transparent overlay initially, solid white background on scroll
- Logo text on right (RTL), phone number on left with icon
- Height: 16-20 units
- Mobile: Simplified with just logo and phone

### Hero Section
- **Image**: Use provided blue washing machines background (Untitledgg-1536x637.png)
- Full viewport height (90vh) with overlay for text legibility
- Centered content with large headline + subheadline
- Primary CTA button with blurred background (backdrop-blur-sm with white/10 or blue/20 background)
- Phone number integration below CTA

### Features Cards
- 2-card layout showcasing "30-Day Guarantee" and "Same-Day Service"
- Icon + Title + Description format
- Background: Light blue tint (blue-50) with white cards or white section with subtle shadows
- Icons: Use shield icon for guarantee, clock/lightning for same-day service

### Services Checklist
- Grid layout with checkmark icons
- Each service problem as a separate item
- Background: White or very light gray
- Use provided content text listing washing machine problems

### Brands Showcase
- Visual section using provided washing machines image (Image-of-clothes-washing-machine.jpg)
- Text overlay or side-by-side layout listing supported brands
- Logos or text: Whirlpool, Maytag, Samsung, GE, Ariston (extracted from content)

### Visual CTA Sections
- Integrate provided CTA graphics (dfg-1536x567.png showing phone number)
- Full-width sections with alternating backgrounds
- Use images as visual anchors with text overlay or adjacent content

### SEO Content Area
- Single column, max-w-4xl
- All provided Arabic keyword text
- Structured with subheadings for scannability
- Light background to distinguish from other sections

### Footer
- 2-3 column layout (desktop), stacked (mobile)
- Contact information prominent
- Phone number large and clickable
- Operating hours, service areas
- Copyright and simple navigation links

### Floating Call Button (Mobile Only)
- Fixed position at bottom-right (RTL consideration: bottom-left)
- Circular or pill-shaped button
- Phone icon + "اتصل الآن" text
- Blue background with white text
- Size: 14-16 units height, adequate width
- Shadow for depth, pulse animation subtle

## Images Strategy

**Provided Images Usage**:
1. **Hero Background**: Untitledgg-1536x637.png (blue washing machines) - full-width, overlay for contrast
2. **Machines Showcase**: Image-of-clothes-washing-machine.jpg - brands/services section
3. **CTA Graphics**: dfg-1536x567.png - integrate as visual section mid-page for conversion boost

**Image Treatment**:
- Hero: Subtle overlay (dark blue/20-30% opacity) for text readability
- All images: Optimize for web, lazy loading except hero
- Aspect ratios maintained, no distortion

## Accessibility & RTL Considerations
- All text direction: RTL (`dir="rtl"`)
- Mirrored layout: navigation right to left, icons flip appropriately
- High contrast between text and backgrounds
- Clickable areas minimum 44x44px (especially phone numbers)
- Focus states on all interactive elements
- Semantic HTML structure for screen readers

## Trust & Conversion Elements
- Phone number appears minimum 4 times: Header, Hero, CTA sections, Footer, Floating button
- "10+ years experience" prominently displayed
- "30-day guarantee" highlighted with visual emphasis
- Customer-facing language emphasizing reliability and speed
- Social proof area for testimonials (if available later)

## Responsive Breakpoints
- Mobile: < 768px (priority design)
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Mobile Optimizations**:
- Larger tap targets for phone number
- Floating call button always visible
- Simplified navigation
- Single-column layouts
- Reduced text sizes appropriately

## Page Flow
1. Hero with immediate CTA
2. Trust builders (Features: Guarantee + Same-day)
3. Services offered (Checklist of problems)
4. Visual CTA section (using provided graphics)
5. Brands/machines showcase
6. SEO content area
7. Final CTA before footer
8. Comprehensive footer

This creates natural progression from awareness → trust → action with multiple conversion opportunities throughout the scroll journey.