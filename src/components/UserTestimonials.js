import React from 'react'
import Testimonial from './Testimonial'
import Image1 from '../Images/img4.1.png'
import Image2 from '../Images/img4.2.png'
import Image3 from '../Images/img4.3.png'
import Image4 from '../Images/img4.4.png'

function UserTestimonials() {
  return (
    <div className='background-purple'>
    <div className='userHeader'>User Testimonials</div>
    <div className='testimonial-container'>
      <Testimonial Image={Image4} name="Theo Champion" designation="Back-end developer at MyDodow" response="As a parent, I appreciate Ad Astra's apps for their focus on critical thinking and problem-solving. They challenge my child in a stimulating and enjoyable way."/>
      <Testimonial Image={Image2} name="Agnes Remi" designation="Back-end developer at MyDodow" response="Thanks to Ad Astra, my daughter's math skills have improved dramatically. The app's step-by-step lessons and practice exercises have made a real difference."/>
      <Testimonial Image={Image3} name="Roman Atwoods" designation="Back-end developer at MyDodow" response="Ad Astra's apps have sparked my son's curiosity about the world. He loves exploring different subjects through the interactive content and educational videos."/>
      <Testimonial Image={Image1} name="Martin Goutry" designation="Back-end developer at MyDodow" response="Ad Astra's apps have made learning fun and interactive for my child. They can't get enough of the engaging activities and games!"/>
      <Testimonial Image={Image2} name="Agnes Remi" designation="Back-end developer at MyDodow" response="Thanks to Ad Astra, my daughter's math skills have improved dramatically. The app's step-by-step lessons and practice exercises have made a real difference."/>
    </div>
    </div>
  )
}

export default UserTestimonials