import React from 'react'
import cloud from "../Images/cloud.png"
import cloud1 from "../Images/cloud1.png"
import cloud2 from "../Images/cloud2.png"

function MainStore() {
  return (
    <div className='store'>  
        <div className='store-maindiv'>
            <div className='heading'>AboutUS</div>
        </div>

        <div className='clouds'>
            <img src={cloud} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
        </div>
    </div>
  )
}

export default MainStore