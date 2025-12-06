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
import MissionsAndChurchPlantingPage from "./components/MissionsAndChurchPlanting";
import SubdomainApp from "./subdomain/SubdomainApp";
import SermonsPage from "./pages/SermonsPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

// NEW MINISTRY PAGES
import YouthMinistryPage from "./pages/YouthMinistryPage";
import DorcasMinistryPage from "./pages/DorcasMinistryPage";
import MinistryOfHelpsPage from "./pages/MinistryOfHelpsPage";
import CalebMinistryPage from "./pages/CalebMinistryPage";
import ChildrenMinistryPage from "./pages/ChildrenMinistryPage";

// NEW JOIN-US PAGES
import SupportMissionsPage from "./pages/SupportMissionsPage";
import PartnerWithUsPage from "./pages/PartnerWithUsPage";
import GiveNowPage from "./pages/GiveNowPage";

const Layout = lazy(() => import("./pages/Layout"));
const MainPage = lazy(() => import("./pages/MainPage"));
const Dashboard = lazy(() => import("./pages/Dashbaord"));

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAppReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hostname = window.location.hostname;
    const isSub =
      hostname.includes(".subdomain.") || hostname.startsWith("subdomain.");
    setIsSubdomain(isSub);
  }, []);

  const mainRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="events" element={<EventPage />} />
          <Route path="sermons" element={<SermonsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="missions"
            element={<MissionsAndChurchPlantingPage />}
          />

          {/* MINISTRIES */}
          <Route path="ministries/youth" element={<YouthMinistryPage />} />
          <Route path="ministries/dorcas" element={<DorcasMinistryPage />} />
          <Route path="ministries/helps" element={<MinistryOfHelpsPage />} />
          <Route path="ministries/caleb" element={<CalebMinistryPage />} />
          <Route path="ministries/children" element={<ChildrenMinistryPage />} />

          {/* JOIN US */}
          <Route path="join/support" element={<SupportMissionsPage />} />
          <Route path="join/join" element={<PartnerWithUsPage />} />
          <Route path="join/give" element={<GiveNowPage />} />
        </Route>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminLogin />} />
        <Route path="admin/dashboard/*" element={<AdminDashboard />} />
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
