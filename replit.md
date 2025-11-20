# Church Calendar Application

## Overview

This is a React-based church calendar web application built with Vite. The application displays church events in a calendar format and allows users to download the calendar as an image. It features a static calendar component that highlights event days and provides a visual, picture-calendar style presentation of church events from the current date through June 2026.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 19.1.1** with **Vite 7.1.2** as the build tool and development server
- **Rationale**: Vite provides fast HMR (Hot Module Replacement) and optimized builds, while React 19 offers the latest features and performance improvements
- Single Page Application (SPA) architecture with client-side routing via **React Router DOM 7.8.2**

**Styling Solution**
- **Tailwind CSS 4.1.13** with the Tailwind Vite plugin for utility-first styling
- Custom CSS variables defined in theme for brand colors (primary, secondary, green, huegreen, blue)
- Google Fonts integration (Lobster font) for typography
- **Rationale**: Tailwind provides rapid UI development with utility classes while maintaining design consistency through the theme system

**Component Architecture**
- Component-based architecture following React best practices
- Key component: `EventPage.jsx` containing the static calendar implementation
- **Rationale**: Modular component structure enables code reusability and easier maintenance

**Animation & UI Enhancement**
- **Framer Motion 12.23.12** for animations and transitions
- **Lucide React 0.542.0** for consistent iconography
- **Rationale**: Framer Motion provides declarative animations with React integration, while Lucide offers a comprehensive, lightweight icon set

**Calendar Features**
- Multiple calendar libraries integrated:
  - **react-big-calendar 1.19.4** for interactive calendar views
  - **react-calendar 6.0.0** for date selection
  - **date-fns 4.1.0** and **moment 2.30.1** for date manipulation
- **html2canvas 1.4.1** for calendar download functionality (captures DOM as image)
- **Rationale**: Multiple calendar solutions provide flexibility for different UI requirements; html2canvas enables easy export without server-side rendering

### Routing & Navigation

**Client-Side Routing**
- React Router DOM handles all navigation
- Configured for SPA behavior with Vercel rewrites (all routes point to index.html)
- **Rationale**: Client-side routing provides instant navigation without page reloads

### Development & Code Quality

**Linting & Code Standards**
- ESLint 9.33.0 with React-specific plugins:
  - `eslint-plugin-react-hooks` for React Hooks rules
  - `eslint-plugin-react-refresh` for Vite fast refresh compatibility
- Custom rule: Unused variables allowed if they match pattern `^[A-Z_]` (constants)
- **Rationale**: Enforces code quality and React best practices while allowing flexibility for constants

**Development Server Configuration**
- Configured to run on `0.0.0.0:5000` (accessible from network)
- Strict port enforcement to ensure consistent development environment
- **Rationale**: Network accessibility enables testing on multiple devices; strict port prevents conflicts

### Styling System

**Theme Configuration**
- Custom CSS properties for brand colors:
  - Primary: #7A030D (dark red)
  - Secondary: #EB3237 (bright red)
  - Green: #117949
  - Hue Green: #656A1D
  - Blue: #3E3D8F
- Background: #FDF0D5 (cream/beige)
- Custom scrollbar styling (dark red theme)
- Special typography features:
  - Text stroke utility for outlined text
  - Dropcap styling for decorative first letters
- **Rationale**: Consistent brand identity through centralized theme values; custom utilities extend Tailwind for church-specific design needs

## External Dependencies

### Frontend Libraries
- **React & React DOM (19.1.1)**: Core UI framework
- **React Router DOM (7.8.2)**: Client-side routing and navigation
- **Framer Motion (12.23.12)**: Animation library for smooth transitions and interactions
- **Tailwind CSS (4.1.13)**: Utility-first CSS framework
- **Lucide React (0.542.0)**: Icon library

### Calendar & Date Utilities
- **react-big-calendar (1.19.4)**: Interactive calendar component
- **react-calendar (6.0.0)**: Date picker and calendar UI
- **date-fns (4.1.0)**: Modern date utility library
- **moment (2.30.1)**: Legacy date manipulation library (consider migrating to date-fns only)

### Image Processing
- **html2canvas (1.4.1)**: Captures DOM elements as images for download functionality

### Build Tools
- **Vite (7.1.2)**: Build tool and development server
- **@vitejs/plugin-react (5.0.0)**: React integration for Vite

### Development Tools
- **ESLint (9.33.0)**: JavaScript linting
- **TypeScript type definitions**: For React and React DOM (development only)

### Hosting & Deployment
- **Vercel**: Deployment platform (configured via vercel.json)
- Rewrites configured for:
  - SEO files (sitemap.xml, robots.txt)
  - SPA fallback routing (all routes to index.html)

### External Resources
- **Google Fonts API**: Lobster font family for custom typography