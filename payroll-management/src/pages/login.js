import React, { useState } from 'react';
import '../styles/login.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


function Login() {
  const [action,setAction] =useState("Login");
  return (
    <div className='container'>
      {/* <img src={Background} alt="Payroll Management System" /> */}
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        <div className='input'>
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Register"?<div></div>:<div className='forgot-password'><span>Forgot Password</span></div>}
      <div className='submit-container'>
        <div className={action==="login"?"submit gray":"submit"} onClick={() =>{setAction("Register")}}>Register</div>
        <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
  </div>
  )
}

export default Login