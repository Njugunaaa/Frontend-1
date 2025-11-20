# Church Calendar Application

## Overview

This is a full-stack church management application with a React frontend and Flask backend. The application features event and sermon management with an admin dashboard for content management. Public pages display upcoming/past events and sermons with YouTube video integration. The original calendar functionality is preserved while adding dynamic content management capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 2025)

- **Added Flask Backend** (Python 3.11): RESTful API with SQLite database for events and sermons management
- **Admin Dashboard**: Full CRUD interface for managing events and sermons with password protection
- **Public Sermons Page**: Displays sermons with embedded YouTube videos
- **Enhanced Events Page**: Now shows Upcoming and Past Events sections fetched from backend
- **Authentication**: Header-based authentication (`X-ADMIN-PASSWORD: boltchurch@2025`) for admin routes
- **PDF Generation**: Download events calendar as PDF
- **File Upload**: Image upload support for event posters
- **Dual Server Setup**: Frontend (Vite on port 5000) and Backend (Flask on port 8000) running concurrently

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

## Backend Architecture

### Framework & Setup
- **Flask 3.0.0**: Python web framework for RESTful API
- **Flask-CORS 4.0.0**: Cross-Origin Resource Sharing support
- **Flask-SQLAlchemy 3.1.1**: ORM for database operations
- **Python 3.11**: Backend runtime

### Database
- **SQLite**: Lightweight relational database (`backend/database.db`)
- **Models**:
  - **Events**: id, title, description, image_path, date, time, location, category, created_at, updated_at
  - **Sermons**: id, title, speaker_or_leader, date, description, media_url, created_at, updated_at
- **Timezone**: Africa/Nairobi (UTC+3) for date comparisons

### API Endpoints

**Events**
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events (date >= today)
- `GET /api/events/past` - Get past events (date < today)
- `POST /api/events` - Create event (protected)
- `PUT /api/events/<id>` - Update event (protected)
- `DELETE /api/events/<id>` - Delete event (protected)
- `GET /api/events/pdf` - Download events calendar as PDF

**Sermons**
- `GET /api/sermons` - Get all sermons (sorted by date desc)
- `POST /api/sermons` - Create sermon (protected)
- `PUT /api/sermons/<id>` - Update sermon (protected)
- `DELETE /api/sermons/<id>` - Delete sermon (protected)

### Authentication
- **Method**: Custom header authentication
- **Header**: `X-ADMIN-PASSWORD: boltchurch@2025`
- **Protected Routes**: All POST, PUT, DELETE operations
- **Public Routes**: All GET operations

### File Upload
- **Supported Formats**: .jpg, .jpeg, .png
- **Max Size**: 8 MB
- **Storage**: `backend/static/uploads/`
- **Naming**: `<timestamp>__<random>__<filename>`

### PDF Generation
- **Library**: ReportLab 4.0.7
- **Content**: Upcoming and Past Events sections
- **Format**: Letter size with custom styling

## Admin Dashboard

### Pages
- **AdminLogin** (`/admin`): Password-based login page
- **AdminDashboard** (`/admin/dashboard`): Main admin panel with sidebar navigation
- **EventsAdminPanel**: CRUD interface for events with image upload
- **SermonsAdminPanel**: CRUD interface for sermons

### Features
- Create, read, update, delete events and sermons
- Image upload for events
- PDF download for events calendar
- Real-time data updates
- Password-protected access via localStorage

## Public Pages

### Sermons Page (`/sermons`)
- Displays all sermons in responsive grid (3 columns desktop, 1 mobile)
- YouTube video embeds with lazy loading
- Shows title, speaker, date, and description
- Responsive card-based layout

### Enhanced Events Page
- **Original Features**: Interactive calendar, static calendar download
- **New Sections**:
  - **Upcoming Events**: Card grid showing future events with images
  - **Past Events**: Grayscale card grid showing historical events
  - Real-time data from backend API

## Running the Application

### Start Both Servers
```bash
bash start.sh
```
This script starts:
- Flask backend on port 8000
- Vite frontend on port 5000

### Seed Database
```bash
cd backend && python seed_data.py
```

### Environment Variables
- `VITE_API_URL`: Backend API URL (default: http://localhost:8000)

## Admin Access
- **URL**: `/admin`
- **Password**: `boltchurch@2025`
- **Routes**: `/admin/dashboard` (Events), `/admin/dashboard/sermons` (Sermons)