import React from "react";
import "./navbar.css"
// import { Grid, Segment } from 'semantic-ui-react'
import Image from "../../assests/logo.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
      <div className="navbar-logo-container">

          <img src={Image}></img>
      </div>
      </div>
      <div className="navbar-navigation">
        <div class="individual-option">HOME</div>
        <div class="individual-option">PROJECTS</div>
        <div class="individual-option">TEAM</div>
        <div class="individual-option">BLOG</div>
        <div class="individual-option">CONTACT</div>
        <div class="individual-option">SPONSORS</div>
      </div>
    </div>
  );
}
