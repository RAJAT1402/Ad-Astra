import React, { useState } from 'react'
import Card from './Card'
import { data } from '../data'

function OurServices() {
  
  let [index, setIndex] = useState(-1);
  
  const changeIndex = (i) =>{
    if(i == index){
      setIndex(-1);
    }else{
      setIndex(i);
    }
  }

  return (
    <div>
        <div className='header'>Our Services</div>
        <div className='cards'>
            {
                data.map( (d, i) => <Card i={i} index={index} heading={d.heading} text={d.text} color={d.color} url={d.url} fxn={changeIndex}/>)
            }
        </div>
    </div>
  )
}

export default OurServices