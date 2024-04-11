import React from 'react';
import Logo from '../assets/payroll.jpg';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt='Payroll Management System'/>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>   
            <Link to="/register">Register</Link>   
   
        </div>      
    </div>
  )
}

export default Navbar
