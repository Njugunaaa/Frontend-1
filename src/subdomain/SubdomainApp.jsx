import React, { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SubdomainLayout from "./components/SubdomainLayout";
import SubdomainMainPage from "./pages/SubdomainMainPage";
import SubdomainAboutUs from "./pages/SubdomainAboutUs";
import SubdomainContactPage from "./pages/SubdomainContactPage";

function SubdomainApp() {
  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<SubdomainLayout />}>
      <Route index element={<SubdomainMainPage />} />
      <Route path="about" element={<SubdomainAboutUs />} />
      <Route path="contact" element={<SubdomainContactPage />} />
    </Route>
  ));

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default SubdomainApp;
