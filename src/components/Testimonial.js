import React from 'react'

function Testimonial({name, Image, designation, response}) {
  return (
    <div className='testimonial'>
        <div className='testimonial-image'><img src={Image}/></div>
        <div className='testimonial-container1'>
            <div className='testimonial-name'>{name}</div>
            <div className='testimonial-designation'>{designation}</div>
            <div>{response}</div>
        </div>
    </div>
  )
}

export default Testimonial