import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import LatestTourPackages from './LatestTourPackages'
import BookingPage from './BookingPage'
import InfoCards from '../components/InfoCards'
import Footer from '../components/Footer'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <InfoCards />
        <AboutUsSection />
        <LatestTourPackages />
        <Counter />
        <Testimonial />
        <Footer />
    </>
  )
}

export default Home;