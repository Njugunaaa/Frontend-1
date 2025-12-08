# Elim Pentecostal Church Kenya Website

## Overview

This is a full-stack church website for Elim Pentecostal Church Kenya with a React frontend and Node.js/Express backend. The application features event and sermon management with an admin dashboard for content management. Public pages display upcoming/past events and sermons with YouTube video integration. Data is stored in JSONBin.io with image uploads to Cloudinary.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (December 2025)

- **Migrated Backend to Express.js**: Replaced Flask with Node.js/Express for better JavaScript ecosystem integration
- **JSONBin Integration**: Events and sermons stored in JSONBin.io for serverless data persistence
- **Cloudinary Integration**: Event images uploaded to Cloudinary cloud storage
- **Updated Admin Dashboard**: Full CRUD interface for managing events and sermons
- **Ministry Pages**: Added Youth Ministry, Dorcas Ministry, Ministry of Helps, Caleb Ministry, and Children Ministry pages
- **Join Us Pages**: Added Support Missions, Partner With Us, and Give Now pages

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 19** with **Vite 7** as the build tool and development server
- Single Page Application (SPA) with client-side routing via **React Router DOM**
- Runs on port 5000

**Styling Solution**
- **Tailwind CSS 4** with Vite plugin for utility-first styling
- Custom CSS variables for brand colors:
  - Primary: #7A030D (dark red)
  - Secondary: #EB3237 (bright red)
  - Background: #FDF0D5 (cream/beige)

**Animation & UI**
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for consistent iconography

**Calendar Features**
- **react-big-calendar** for interactive calendar views
- **react-calendar** for date selection
- **date-fns** and **moment** for date manipulation
- **html2canvas** for calendar download functionality

### Backend Architecture

**Framework & Setup**
- **Express.js** on Node.js running on port 8000
- **CORS** enabled for cross-origin requests
- **Multer** for handling file uploads

**Data Storage**
- **JSONBin.io**: Cloud-based JSON storage for events and sermons
  - Events bin and Sermons bin stored separately
  - RESTful API calls for CRUD operations

**Image Storage**
- **Cloudinary**: Cloud-based image hosting
  - Folder: `elim-church-events`
  - Automatic URL generation for uploaded images

### API Endpoints

**Events**
- `GET https://elim-backend-jqo7.onrender.com/api/events` - Get all events (sorted by date desc)
- `GET https://elim-backend-jqo7.onrender.com/api/events/upcoming` - Get future events
- `GET https://elim-backend-jqo7.onrender.com/api/events/past` - Get past events
- `POST https://elim-backend-jqo7.onrender.com/api/events` - Create event (protected, supports image upload)
- `PUT https://elim-backend-jqo7.onrender.com/api/events/:id` - Update event (protected)
- `DELETE https://elim-backend-jqo7.onrender.com/api/events/:id` - Delete event (protected)

**Sermons**
- `GET https://elim-backend-jqo7.onrender.com/api/sermons` - Get all sermons (sorted by date desc)
- `POST https://elim-backend-jqo7.onrender.com/api/sermons` - Create sermon (protected)
- `PUT https://elim-backend-jqo7.onrender.com/api/sermons/:id` - Update sermon (protected)
- `DELETE https://elim-backend-jqo7.onrender.com/api/sermons/:id` - Delete sermon (protected)

**Health Check**
- `GET https://elim-backend-jqo7.onrender.com/api/health` - Server health status

### Authentication

- **Method**: Custom header authentication
- **Header**: `X-ADMIN-PASSWORD`
- **Password**: `Elim@2025`
- **Protected Routes**: All POST, PUT, DELETE operations
- **Public Routes**: All GET operations

## Key Files

### Backend
- `server/index.js` - Express server with all API routes

### Frontend Configuration
- `src/config/api.js` - API base URL configuration
- `vite.config.js` - Vite configuration with proxy to backend

### Admin Panel
- `src/pages/admin/AdminLogin.jsx` - Login page
- `src/pages/admin/AdminDashboard.jsx` - Main admin dashboard
- `src/components/admin/EventsAdminPanel.jsx` - Events management
- `src/components/admin/SermonsAdminPanel.jsx` - Sermons management

### Public Pages
- `src/pages/MainPage.jsx` - Home page
- `src/pages/EventPage.jsx` - Events with calendar
- `src/pages/SermonsPage.jsx` - Sermons listing
- `src/pages/AboutUs.jsx` - About page
- `src/pages/ContactPage.jsx` - Contact page

### Ministry Pages
- `src/pages/YouthMinistryPage.jsx` - Youth Ministry
- `src/pages/DorcasMinistryPage.jsx` - Women's Ministry
- `src/pages/MinistryOfHelpsPage.jsx` - Ministry of Helps
- `src/pages/CalebMinistryPage.jsx` - Senior Adults Ministry
- `src/pages/ChildrenMinistryPage.jsx` - Children's Ministry

### Join Us Pages
- `src/pages/SupportMissionsPage.jsx` - Missions support
- `src/pages/PartnerWithUsPage.jsx` - Partnership info
- `src/pages/GiveNowPage.jsx` - Giving page

## Environment Variables (Secrets)

Required secrets in Replit:
- `CLOUDINARY_CLOUD_NAME` - Cloudinary account name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `JSONBIN_MASTER_KEY` - JSONBin master API key
- `JSONBIN_EVENTS_BIN_ID` - JSONBin bin ID for events
- `JSONBIN_SERMONS_BIN_ID` - JSONBin bin ID for sermons

## Running the Application

### Start Command
```bash
bash start.sh
```

This starts both:
- Express backend on port 8000
- Vite frontend on port 5000

### Admin Access
- **URL**: `/admin`
- **Password**: `Elim@2025`
- **Dashboard**: `/admin/dashboard`

## Preloader

The application features a branded preloader showing the Elim Pentecostal Church logo:
- Duration: 5 seconds
- Displays on initial page load
- Smooth fade-out animation

## Notes

- The Vite dev server proxies `https://elim-backend-jqo7.onrender.com/api/*` requests to the backend on port 8000
- Frontend must have `allowedHosts: true` in vite.config.js for Replit iframe access
- Ministry routes are currently commented out in App.jsx - uncomment to enable
