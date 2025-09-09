import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Preloader from "./components/Loading";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";

const Layout = lazy(() => import("./pages/Layout"));
const MainPage = lazy(() => import("./pages/MainPage"));

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate your app load (API, assets, etc.)
    const timer = setTimeout(() => setAppReady(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="events" element={<EventPage />} />
    </Route>
  ))

  return (
    <>
      {/* Preloader runs until BOTH app is ready & its own 5s animation is done */}
      <Preloader done={appReady} duration={5000} />

      {/* Show routes immediately behind preloader (but hidden by it) */}
      <Suspense fallback={null}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}

export default App;
