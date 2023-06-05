import React from 'react'
import img1 from "../Images/img1.png";
import rocket from "../Images/rocket.png";
import Cloud1 from './Cloud1';

function MainDiv() {
  return (
    <div className='container1'>
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

        {/* <Cloud1 /> */}
    </div>
  )
}

export default MainDiv