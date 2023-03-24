import React from 'react'
import Logo from "../Images/logo.png";

function Part5() {
  return (
    <div className='container5'>
        <div>
            <img src={Logo}></img>
            <span className='heading'>Ad Astra</span>
            <div className='text5'>
                Ad Astra is a web based platform consists of 6 AR application which we offer as services will be available for download.
            </div>
        </div>
        <div>
            <div className='heading'>Quick Links</div>
            <div className='text6'>Home</div>
            <div className='text6'>Why we choose AR?</div>
            <div className='text6'>Our Services</div>
            <div className='text6'>Our Team</div>
        </div>
    </div>
  )
}

export default Part5