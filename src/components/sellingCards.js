import React from 'react'
import { data1 } from '../data1';
import Card1 from './Card1';

function SellingCards() {
  return (
    <div className='cards' style={{justifyContent:'center'}}>
        {
            data1.map( d => <Card1 heading={d.heading} price={d.price} url={d.url}/>)
        }
    </div>
  )
}

export default SellingCards