import React from "react";
import Logo from "../assets/payroll.jpg";
import { Link } from "react-router-dom";
//  import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Payroll Management System" />
        <h2>PAYROLL MANAGEMENT SYSTEM</h2>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/AboutUS">AboutUS</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        {/* <button> 
              <ReorderIcon />  
            </button>   */}
      </div>
    </div>
  );
}

export default Navbar;
