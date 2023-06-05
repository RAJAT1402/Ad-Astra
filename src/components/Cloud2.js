import React from 'react'
import cloud1 from "../Images/cloud1.png"
import cloud2 from "../Images/cloud2.png"
import cloud3 from "../Images/cloud3.png"

function Cloud2() {
  return (
    <div>
        <div className='clouds'>
            <img src={cloud3} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
        </div>
    </div>
  )
}

export default Cloud2