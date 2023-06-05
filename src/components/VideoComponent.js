import React, { useState } from 'react'
import cloud4 from "../Images/cloud4.png";
import Image from '../Images/img2.1.png';
import Image1 from '../Images/img2.2.png'
import Image2 from "../Images/img2.3.png"
import ArrowLeft from "../Images/arrowLeft.png"
import ArrowRight from "../Images/arrowRight.png"
import Circle1 from "../Images/circle1.png"
import Circle2 from "../Images/circle2.png"

function VideoComponent() {
  let [isClicked, changeIsClicked] = useState(true);

  const onClick = ()=>{
    changeIsClicked(!isClicked);
  }

  let text = 'Explore scientific concepts hands-on, engaging multiple senses through Augmented Reality. With multi-sensory involvement at its core, learners can spark their curiosity and tackle difficult STEM concepts in fun new ways!'
  let text0 = 'Bring concepts to life in the palm of your hand!'
  let text1 = 'Designed to supplement Science and Technology curriculum. Ad Astra is a STEM platform featuring hundreds of hyper-real, AR compatible, 3D models that provide many hours of fun engaged learning.'
  let text11 = 'Follow your curiosity and enjoy our AR Adventures.'
  return (
    <div className='videoContainer' style={{ backgroundImage:`url(${cloud4})`}}>
      <img className="videoimg" src={Image}></img>
      <div className='videoContainer1'>
        <div>
          <img className="arrow" src={ArrowLeft} onClick={()=>{onClick()}}/>
        </div>
        <div>
          <img className="videoimg1" src={isClicked ? Image1 : Image2}></img>
        </div>
        <div>
          <div className='video-heading'>
            {isClicked && 'Engage with Education'}
            {!isClicked && 'Curriculum Aligned'}
          </div>
          <div className='video-text'>
            {isClicked && text}
            {!isClicked && text1}
            <br/><br/>
            {isClicked && text0}
            {!isClicked && text11}
          </div>
        </div>
        <div>
          <img className="arrow" src={ArrowRight} onClick={()=>{onClick()}}/>
        </div>
      </div>
      <div className='bottomCircle'>
        {isClicked && <div><img src={Circle2}/> <img src={Circle1}/></div>}
        {!isClicked && <div><img src={Circle1}/> <img src={Circle2}/></div>}
      </div>
    </div>
  )
}

export default VideoComponent