import React from "react";
import "./navbar.css";
// import { Grid, Segment } from 'semantic-ui-react'
import Image from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-container">
          <img src={Image}></img>
        </div>
      </div>
      <div className="navbar-navigation">
        <Link to="/">
          <div class="individual-option">HOME</div>
        </Link>
        <Link to="/">
          <div class="individual-option">PROJECTS</div>
        </Link>
        <Link to="/sponsors">
          <div class="individual-option">SPONSORS</div>
        </Link>
        <Link to="/blogs">
          <div class="individual-option">BLOG</div>
        </Link>
        <Link to="/">
          <div class="individual-option">TEAM</div>
        </Link>
        <Link to="/">
          <div class="individual-option">CONTACT</div>
        </Link>
      </div>
    </div>
  );
}
