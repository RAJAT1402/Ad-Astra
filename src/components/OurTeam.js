import React from 'react'
import parth from '../Images/parth.png'
import abhinav from '../Images/abhinav.png'
import shreya from '../Images/shreya.png'
import rajat from '../Images/rajat.png'


function OurTeam() {
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
        
    </div>
  )
}

export default OurTeam