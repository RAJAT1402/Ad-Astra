import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import WhyWeChooseAR from '../components/WhyWeChooseAR'
import OurTeam from '../components/OurTeam'
import Cloud1 from '../components/Cloud1'
import Cloud2 from '../components/Cloud2'
import AboutusContainer from "../components/AboutusContainer.js"
import WhyAdAstra from '../components/WhyAdAstra';

function Aboutus() {
  return (
    <>
        <Navbar />
        <AboutusContainer />
        <Cloud1 />
        <WhyAdAstra />
        <WhyWeChooseAR />
        <Cloud1 />
        <OurTeam />
        <Cloud2 />
        <Footer />
    </>
  )
}

export default Aboutus