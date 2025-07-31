# Overview

This is a full-stack web application for an artisan crafts business built with React, Express.js, and PostgreSQL. The application serves as a showcase website for handmade crafts with a contact form system that allows potential customers to inquire about products. The frontend features a modern, responsive design with smooth scrolling navigation, product gallery, about section, and contact functionality. The backend provides REST API endpoints for handling contact form submissions and message management.

## Recent Updates (January 2025)
- **Static Site Generation**: Added build-static.js script for GitHub Pages deployment
- **SEO Optimization**: Enhanced HTML meta tags with Open Graph and Twitter cards
- **GitHub Actions**: Created automated deployment workflow for GitHub Pages
- **Deployment Ready**: Project configured for static hosting on GitHub Pages, Netlify, or Vercel

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a pink/fuchsia color scheme
- **Forms**: React Hook Form with Zod validation for robust form handling and validation
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations with PostgreSQL
- **Database Provider**: Neon Database (PostgreSQL) for serverless database hosting
- **API Design**: RESTful endpoints with JSON responses and proper error handling
- **Development**: Hot module replacement and automatic server restart during development

## Data Storage
- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **Schema Management**: Drizzle Kit for database migrations and schema updates
- **Development Storage**: In-memory storage implementation for development/testing
- **Tables**: Users table for potential authentication, ContactMessages table for form submissions

## Authentication & Authorization
- **Current State**: Basic user schema exists but no active authentication implementation
- **Session Management**: Express session configuration present but not actively used
- **Future-Ready**: Infrastructure in place for implementing user authentication when needed

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: Modern TypeScript ORM for database operations and migrations

## UI & Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Radix UI**: Low-level UI primitives for building accessible components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Build tool and development server with HMR support
- **TypeScript**: Static type checking for both frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Custom plugins for Replit development environment

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **TanStack Query**: Data fetching and caching library for API interactions

## Hosting & Deployment
- **Static Assets**: Vite-built frontend served by Express in production
- **Environment**: Configured for Node.js production deployment
- **Database**: Serverless PostgreSQL via Neon with environment-based configuration
- **GitHub Pages**: Automated deployment using GitHub Actions workflow
- **Static Build**: Custom build-static.js script generates deployable files in docs/ folder
- **SEO Ready**: Optimized HTML with meta tags, Open Graph, and Twitter cards for better social sharing