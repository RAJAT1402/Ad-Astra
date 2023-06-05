import React from 'react'

function Card({heading, text, color, url, fxn, i, index}) {
  
  return (
    <>
      {(index != i) && 
        <div className='card' style={{backgroundColor:color}} onClick={()=>{fxn(i)}}>
          <img className="card-img" src={url}></img>
    
          <div>
              <div className='sub-heading'>{heading}</div>
              <div className='card-text'>{text}</div>
          </div>
        </div>
      }
      {(index == i) && 
        <div className='card2' style={{backgroundColor:color}}>
        <div className='sub-heading'>{heading}</div>
        <div className='card-button'>DOWNLOAD APP</div>
        <div className='card-button'>DOWNLOAD CARDS</div>
    </div>
      }
    </>
  )
}

export default Card