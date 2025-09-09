import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Layout() {
 return (
  <section className="flex flex-col min-h-screen">
    <Nav />

    {/* main content grows to fill available space */}
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </section>
);
}

export default Layout