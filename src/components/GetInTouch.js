import React from 'react'
import Map from "../Images/map.png"
import Phone from "../Images/iconPhone.png"
import Fax from "../Images/iconFax.png"
import Mail from "../Images/iconMail.png"

function GetInTouch() {
  return (
    <div>
        <div className='getInTouch'>
            <div className='getInTouch-header'>Get In Touch</div>
            <div className='getInTouch-text'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</div>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Phone Number'/>
            <input placeholder='How Did You Find US'/>
            <div className='getInTouch-button'>Send</div>
            <div className='connect-container'>
                <div className='connect'>
                    <div>
                        <div><img src={Phone}/></div>
                    </div>
                    <div>
                        <div>
                            Phone
                        </div>
                        <div>
                            03 5432 1234
                        </div>
                    </div>
                </div>
                <div className='connect'>
                    <div>
                        <div><img src={Fax}/></div>
                    </div>
                    <div>
                        <div>
                            Fax
                        </div>
                        <div>
                            03 5432 1234
                        </div>
                    </div>
                </div>
                <div className='connect'>
                    <div>
                        <div><img src={Mail}/></div>
                    </div>
                    <div>
                        <div>
                            Mail
                        </div>
                        <div>
                            info@adastra.com
                        </div>
                    </div>
                </div>
            </div>
            <div><img className="map" src={Map}/></div>
        </div>
    </div>
  )
}

export default GetInTouch