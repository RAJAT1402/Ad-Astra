import React from 'react'
import Card from './Card'
import { data } from '../data'
import cloud from "../Images/cloud.png"
import cloud1 from "../Images/cloud1.png"
import cloud2 from "../Images/cloud2.png"

function Part3() {
  return (
    <div className='container1'>
        <div className='header'>Our Services</div>
        <div className='cards'>
            {
                data.map( d => <Card heading={d.heading} text={d.text} color={d.color} url={d.url}/>)
            }
        </div>
        <div className='clouds'>
            <img src={cloud} className="cloud"></img>
            <img src={cloud1} className="cloud1"></img>
            <img src={cloud2} className="cloud2"></img>
        </div>
    </div>
  )
}

export default Part3