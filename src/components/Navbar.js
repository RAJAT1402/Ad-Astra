import React from 'react'
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='container1'>
            <div className='navbar'>
                <div style={{display:'flex', width:'20rem'}}>
                    <img style={{paddingRight:'2%',height:"4rem"}} src={Logo}></img>
                    <div className='heading'>Ad Astra</div>
                </div>
                <div className='navbar1'>
                    <Link to="/home"><span className='text'>Home</span></Link>
                    <Link to="/aboutus"><span className='text'>About Us</span></Link>
                    <Link to="/howitworks"><span className='text'>How It Works</span></Link>

                </div>
            </div>
    </div>
  )
}

export default Navbar