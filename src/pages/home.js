import React from 'react'
import Navbar from "../components/Navbar"
import MainDiv from '../components/MainDiv'
import RedefineWorld from '../components/RedefineWorld'
import VideoComponent from '../components/VideoComponent'
import OurServices from '../components/OurServices'
import UserTestimonials from '../components/UserTestimonials'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Cloud1 from '../components/Cloud1'
import Cloud2 from '../components/Cloud2'

function Home() {
  return (
    <>
        <Navbar />
        <MainDiv />
        <Cloud1 />
        <RedefineWorld />
        <VideoComponent />
        <Cloud1 />
        <OurServices />
        <Cloud2 />
        <UserTestimonials />
        <Cloud1 />
        <GetInTouch />
        <Cloud2 />
        <Footer />
    </>
  )
}

export default Home