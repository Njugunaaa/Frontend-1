import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

function Layout() {
  return (
    <section className=''>
        <Nav />
        <section className=''>
            <Outlet />
        </section>
    </section>
  )
}

export default Layout