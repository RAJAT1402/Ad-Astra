import React from 'react'
import Logo from "../Images/logo.png";
import img1 from "../Images/img1.png";
import rocket from "../Images/rocket.png";
import cloud from "../Images/cloud.png"
import cloud1 from "../Images/cloud1.png"
import cloud2 from "../Images/cloud2.png"

function Part1() {
  return (
    <div className='container1'>
            <div className='navbar'>
                <div>
                    <img src={Logo}></img>
                    <span className='heading'>Ad Astra</span>
                </div>
                <div className='navbar1'>
                    <span className='text'>Home</span>
                    <span className='text'>Store</span>
                </div>
            </div>
            
            <div className='container-main'>
                <div>
                    <img src={rocket}></img>
                    <div className='text'>
                        Making playing and learning entertaining, as well as experiencing augmented reality designed specifically for children aged 2 to 12, is simple! See and learn from thousands of 3D objects in real time.
                    </div>
                    <div className='button'>
                        DOWNLOAD
                    </div>
                </div>
                <div>
                    <img src={img1} className="img1"></img>
                </div>
            </div>

            <div className='clouds'>
            <img src={cloud} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
            </div>
        </div>
  )
}

export default Part1