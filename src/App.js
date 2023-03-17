import React from 'react'
import Logo from "./Images/logo.png";

function App() {
  return (
    <>
        <div className='main'>
            <div className='navbar'>
                <div>
                    <img src={Logo}></img>
                    <span className='heading'>Ad Astra</span>
                </div>
                <div className='navbar1'>
                    <span className='text'>Home</span>
                    <span className='text'>Store</span>
                </div>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default App