# Washing Machine Repair Service - Jeddah

## Overview

This is a landing page application for a washing machine repair service based in Jeddah, Saudi Arabia. The application is designed to generate leads and provide information about repair services for various washing machine and dryer brands. It features a modern, trust-focused design optimized for Arabic (RTL) layouts and mobile users seeking immediate repair assistance.

The application is built as a single-page website with multiple sections including hero, features, services, brands, and contact information, all designed to convert visitors into customers through prominent call-to-action elements and phone contact options.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter library for lightweight client-side routing. The application currently has two routes: the home page (`/`) and a 404 not-found page.

**UI Components**: Shadcn/ui component library (New York style variant) built on top of Radix UI primitives. This provides a comprehensive set of accessible, customizable components including buttons, cards, dialogs, forms, and more.

**Styling**: Tailwind CSS with custom configuration for RTL support and Arabic typography. The design system uses CSS variables for theming with a blue and white color palette emphasizing trust and professionalism. Typography uses the Cairo font family from Google Fonts, specifically chosen for excellent Arabic readability.

**State Management**: TanStack Query (React Query) for server state management and data fetching, though the current implementation is primarily static content.

**Design System**: Custom Tailwind configuration with:
- RTL-first layout (dir="rtl" on HTML element)
- Cairo font family for Arabic text
- Custom color palette with primary blue (210 85% 45%) and neutral grays
- Consistent spacing scale and border radius system
- Shadow and elevation utilities for depth

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Build Strategy**: The application uses esbuild to bundle the server code and Vite to build the client. The server is compiled to a single CommonJS file for production deployment, with selective dependency bundling to optimize cold start times.

**API Structure**: The application follows a REST API pattern with routes prefixed with `/api`. Currently minimal backend functionality with placeholder route registration in `server/routes.ts`.

**Storage Interface**: Abstracted storage layer with an `IStorage` interface currently implemented as in-memory storage (`MemStorage`). This provides basic CRUD operations for users, designed to be easily swapped with a database implementation.

**Static File Serving**: In production, the server serves the built client files from the `dist/public` directory. In development, Vite's development server handles client files with hot module replacement (HMR).

**Development Mode**: Uses Vite middleware mode for seamless integration between the Express server and Vite's development features, including HMR over WebSocket.

### Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript.

**Schema Definition**: Located in `shared/schema.ts`, currently defines a basic users table with id, username, and password fields. Uses Zod for runtime validation through drizzle-zod integration.

**Migration Strategy**: Drizzle Kit handles database migrations with configuration in `drizzle.config.ts`. Migrations are output to the `./migrations` directory.

**Database Provider**: Configured to use Neon Database's serverless PostgreSQL driver (`@neondatabase/serverless`), optimized for edge and serverless environments.

**Connection**: Database URL is expected via `DATABASE_URL` environment variable. The application throws an error if this is not configured.

### Design Philosophy

**Mobile-First**: The design prioritizes mobile users, who are the primary audience for service-based businesses. This includes a floating "Call Now" button, sticky header with prominent phone number, and responsive grid layouts.

**Conversion-Focused**: Multiple clear CTAs throughout the page, with the phone number (0554276643) prominently displayed in the header and as a floating action button.

**Trust-Building**: Professional aesthetic with 30-day guarantee messaging, same-day service promises, and clean visual hierarchy to establish credibility.

**Cultural Appropriateness**: RTL layout with Arabic-optimized typography and design patterns familiar to Middle Eastern users.

### Page Sections

The landing page includes the following sections in order:

1. **Header** - Sticky header with logo, phone number, and navigation
2. **Hero Section** - Full-width background image with main CTA and value proposition
3. **Features Grid** - 4 trust-building features (same-day service, warranty, certified technicians, all brands)
4. **Services Checklist** - List of specific repair services offered
5. **Animated Counters** - Statistics with scroll-triggered animation (10+ years, 5000+ customers, 15000+ repairs)
6. **Brands Showcase** - Grid of supported washing machine brands (Samsung, LG, Bosch, Siemens, etc.)
7. **Customer Testimonials** - 3 customer reviews with star ratings and locations
8. **Contact Form** - Service inquiry form with React Hook Form validation and Arabic error messages
9. **Service Area** - List of 12 Jeddah neighborhoods covered
10. **SEO Content** - Search-optimized content section
11. **Footer** - Contact info, quick links, and copyright

### Interactive Features

**Animated Counters**: Uses IntersectionObserver with requestAnimationFrame for smooth scroll-triggered animation. Unobserves after first trigger to prevent reset on re-scroll.

**Contact Form**: React Hook Form with Zod validation and Arabic validation messages. Fields include name (min 2 chars), phone (min 10 chars), and message (min 10 chars). Displays success toast on submission with duplicate submission guard.

**Floating WhatsApp Button**: Fixed bottom-right green button linking to WhatsApp with pre-filled Arabic message template (wa.me/966554276643).

**Floating Call Button**: Mobile-only fixed bottom-left button for direct phone calls.

## External Dependencies

### Third-Party Services

**Database**: Neon Database (serverless PostgreSQL) - configured but not yet actively used in the current implementation.

**Fonts**: Google Fonts (Cairo family) - loaded via CDN for Arabic typography.

### Key NPM Packages

**UI Framework**:
- `react` and `react-dom` - Core React framework
- `wouter` - Lightweight routing
- `@tanstack/react-query` - Server state management

**Component Library**:
- `@radix-ui/*` - Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- `class-variance-authority` - Variant-based component styling
- `cmdk` - Command menu component
- `embla-carousel-react` - Carousel/slider functionality

**Styling**:
- `tailwindcss` - Utility-first CSS framework
- `tailwind-merge` and `clsx` - Dynamic className composition

**Forms & Validation**:
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation
- `drizzle-zod` - Database schema to Zod integration

**Database & ORM**:
- `drizzle-orm` - TypeScript ORM
- `drizzle-kit` - Migration management
- `@neondatabase/serverless` - Neon PostgreSQL driver

**Server**:
- `express` - Web framework
- `tsx` - TypeScript execution for development
- `vite` - Build tool and dev server
- `esbuild` - Production bundler for server code

**Development Tools**:
- `@replit/vite-plugin-*` - Replit-specific development plugins (error overlay, cartographer, dev banner)
- `typescript` - Type system

### Asset Management

Images are stored in the `attached_assets` directory and imported via Vite's asset handling system using path aliases (`@assets/*`). The application references washing machine images for the hero background and service sections.