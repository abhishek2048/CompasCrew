import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/WhyChooseUs'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import AboutUsSection from '../components/AboutUsSection'

function AboutUsPage() {
  return (
    <>
        <Navbar />
        <div className="section-title text-center mt-10 mb-3 pb-2 w-50 mx-auto flex flex-col items-center">
          <h2 className="m-0 text-5xl  ">About <span className='text-red-500'>Us</span></h2>
        </div>
        <AboutUsSection />
        <AboutUs />
        <Testimonial />
        <Footer /> 
    </>
  )
}

export default AboutUsPage