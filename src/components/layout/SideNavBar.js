import React from "react";
import "./layout.css";
import {Link} from'react-router-dom';

const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <i className="material-icons">close</i>
        </li>
        <Link onClick={close} to='/'><li>Home</li></Link>
        <Link onClick={close} to='/about'><li>About Me</li></Link>
        <Link onClick={close} to='/projects'><li>Projects</li></Link>
        <Link onClick={close} to='/contact'><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default SideNavBar;