import React from 'react'
import parth from '../Images/parth.png'
import abhinav from '../Images/abhinav.png'
import shreya from '../Images/shreya.png'
import rajat from '../Images/rajat.jpg'
import cloud1 from "../Images/cloud1.png"
import cloud2 from "../Images/cloud2.png"
import cloud3 from "../Images/cloud3.png"

function Part4() {
  return (
    <div>
        <div className='header'>
                Our Team
        </div>
        <div className='images'>
            <div>
                <img className="img" src={parth}></img>
                <div className='name'>Parth Jain</div>
            </div>
            <div>
                <img className="img" src={abhinav}></img>
                <div className='name'>Abhinav Goel</div>
            </div>
            <div>
                <img className="img" src={shreya}></img>
                <div className='name'>Shreya Jindal</div>
            </div>
            <div>
                <img className="img" src={rajat}></img>
                <div className='name'>Rajat Gupta</div>
            </div>
        </div>
        <div className='clouds'>
            <img src={cloud3} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
        </div>
    </div>
  )
}

export default Part4