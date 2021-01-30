import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import pic from "../logo.png";
import Sidenav from "./Sidenav";

function Navbar() {
  return (
    <div className="nav-container">
       <img className="logo" src={pic} />
      <Sidenav />
     
    </div>
  );
}

export default Navbar;
