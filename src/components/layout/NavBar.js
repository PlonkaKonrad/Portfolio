import React from "react";
import "./layout.css";
import {Link} from'react-router-dom';


const NavBar = ({ open }) => {
  return (
    
    <nav className="nav-bar">
      
      <div onClick={open} className="nav-icon">
        <i className="material-icons">menu</i>
      </div>
      <div className="nav-logo"> <Link to='/'></Link></div>
      <div className="nav-space"/>
      <div className="nav-items">
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </nav>
    
    
  );
};

export default NavBar;