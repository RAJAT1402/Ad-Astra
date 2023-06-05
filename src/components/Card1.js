import React from 'react'

function Card1({heading, price, url}) {
  return (
    <div className='card1'>
        <img className="card1-img" src={url}></img>

        <div className='card1-heading'>
          <h2>
            {heading}
          </h2>
        </div>
        <hr style={{width:"70%"}}></hr>
        <div className='card1-price'>Rs. {price}</div>
        <div className='card1-buy'>BUY</div>
    </div>
  )
}
export default Card1