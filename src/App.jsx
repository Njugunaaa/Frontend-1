import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Preloader from "./components/Loading";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import EnhancedCommunityPage from "./components/ChurchOutreachComponent";
import SubdomainApp from "./subdomain/SubdomainApp";

const Layout = lazy(() => import("./pages/Layout"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Dashbaord = lazy(() => import('./pages/Dashbaord'));

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    // Simulate your app load (API, assets, etc.)
    const timer = setTimeout(() => setAppReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Detect if we're on a subdomain
    const hostname = window.location.hostname;
    const isSubdomain = hostname.includes('.subdomain.') || hostname.startsWith('subdomain.');
    setIsSubdomain(isSubdomain);
  }, []);

  const mainRoutes = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="events" element={<EventPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="community" element={<EnhancedCommunityPage />} />
    </Route>
    <Route path="dashboard" element={<Dashbaord />} />
    </Route>
  ));

  if (isSubdomain) {
    return (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <SubdomainApp />
      </Suspense>
    );
  }

  return (
    <>
      {/* Preloader runs until BOTH app is ready & its own 5s animation is done */}
      <Preloader done={appReady} duration={5000} /> 

      {/* Show routes immediately behind preloader (but hidden by it) */}
      <Suspense fallback={null}>
        <RouterProvider router={mainRoutes} />
      </Suspense>
    </>
  );
}

export default App;
