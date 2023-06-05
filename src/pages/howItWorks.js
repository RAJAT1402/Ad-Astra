import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import MainStore from '../components/MainStore'
import HowItWorksComponent from '../components/HowItWorks'
import Cloud1 from '../components/Cloud1'
import Cloud2 from '../components/Cloud2'

function HowItWorks() {
  return (
    <>
        <Navbar />
        <MainStore />
        <Cloud1 />
        <HowItWorksComponent />
        <Cloud2 />
        <Footer />
    </>
  )
}

export default HowItWorks