import React from 'react'
import Hero from '../components/Hero'
import EventCountdownTimer from '../components/EventCountdownTimer'
import MinistryCards from '../components/MinistryCards'
import CommunityComponent from '../components/CommunityComponent'
import TestimonialsComponent from '../components/TestimonialsComponent'

function MainPage() {
  return (
    <section className='flex-1'>
        <Hero />
        <EventCountdownTimer />
        <MinistryCards />
        <CommunityComponent />
        <TestimonialsComponent />
    </section>
  )
}

export default MainPage