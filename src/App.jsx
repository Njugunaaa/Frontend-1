import React, { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Preloader from "./components/Loading";

const Layout = lazy(() => import("./pages/Layout"));

function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate your app load (API, assets, etc.)
    const timer = setTimeout(() => setAppReady(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Layout />} />)
  );

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
