import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import pic from "../logo.png";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

function Navbar() {
  return (
    <div className="nav-container">
       <img className="logo" src={pic} />
       <TopNav/>
      <Sidenav />
     
    </div>
  );
}

export default Navbar;
