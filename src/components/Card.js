import React from 'react'

function Card({heading, text, color, url}) {
  return (
    <div className='card' style={{backgroundColor:color}}>
        <div>
            <img className="card-img" src={url}></img>
        </div>
        <div>
            <div className='sub-heading'>{heading}</div>
            <div className='card-text'>{text}</div>
        </div>
    </div>
  )
}

export default Card