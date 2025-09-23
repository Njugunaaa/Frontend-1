import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import AboutServices from '../components/AboutServices'
import OurHistory from '../components/OurHistory'
import WhatWeDo from '../components/WhatWeDo'
import ChurchStats from '../components/ChurchStats'
import TestimonialsComponent from '../components/TestimonialsComponent'

function AboutUs() {
  return (
    <>
        <AboutUsHero />
        <AboutServices />
        <OurHistory />
        <WhatWeDo />
        <TestimonialsComponent />
    </>
  )
}

export default AboutUs
