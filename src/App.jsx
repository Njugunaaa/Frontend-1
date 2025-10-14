import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Preloader from "./components/Loading";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import MissionsAndChurchPlantingPage from "./components/MissionsAndChurchPlanting"; // ✅ Fixed import
import SubdomainApp from "./subdomain/SubdomainApp";

const Layout = lazy(() => import("./pages/Layout"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Dashboard = lazy(() => import("./pages/Dashbaord")); // small typo fix if file name matches

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAppReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hostname = window.location.hostname;
    const isSub = hostname.includes(".subdomain.") || hostname.startsWith("subdomain.");
    setIsSubdomain(isSub);
  }, []);

  const mainRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="events" element={<EventPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* ✅ Fixed route element to match correct import */}
          <Route
            path="missions"
            element={<MissionsAndChurchPlantingPage />}
          />
        </Route>

        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  if (isSubdomain) {
    return (
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
        <SubdomainApp />
      </Suspense>
    );
  }

  return (
    <>
      <Preloader done={appReady} duration={5000} />

      <Suspense fallback={null}>
        <RouterProvider router={mainRoutes} />
      </Suspense>
    </>
  );
}

export default App;
