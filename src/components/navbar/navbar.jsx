import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { Grid, Segment } from 'semantic-ui-react'
import Image from "../../assets/logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHam: false,
    };
  }
  // dropdown1 = () => {
  //   console.log(1);
  //   var x = document.getElementsByClassName("navbar-navigation");
  //   console.log(x);
  //   x.display = "block";
  //   if(x.display === "block"){
  //     console.log(2);
  //     x.display = 'none'
  //   }
  //   else {
  //     x.display = "block"
  //   }
  // }
  myfunc = () => {
    if (this.state.activeHam === false) {
      console.log(1);
      this.setState({
        activeHam: true,
      });
    } else {
      this.setState({
        activeHam: false,
      });
    }
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none", color: "#818181" }}>
            <div className="navbar-logo-container">
              <img src={Image}></img>
            </div>
          </Link>
        </div>
        <div className="navbar-navigation">
          <div class="individual-option">
            <Link to="/" style={{ textDecoration: "none", color: "#818181" }}>
              <a className="link">HOME</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/project/0">
              <a className="link">PROJECTS</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/team">
              <a className="link">TEAM</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/">
              <a className="link">BLOG</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/">
              <a className="link">CONTACT</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/partners">
              <a className="link">SPONSORS</a>
            </Link>
          </div>
        </div>
        <div
          className="navbar-navigation-ham"
          style={{ display: this.state.activeHam ? "flex" : "none" }}
          // style={{ display: this.state.activeHam ? "none" : "flex" }}
        >
          <div class="individual-option">
            <Link to="/" style={{ textDecoration: "none", color: "#818181" }}>
              <a className="link">HOME</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/project/0">
              <a className="link">PROJECTS</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/team">
              <a className="link">TEAM</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/">
              <a className="link">BLOG</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/">
              <a className="link">CONTACT</a>
            </Link>
          </div>
          <div class="individual-option">
            <Link to="/partners">
              <a className="link">SPONSORS</a>
            </Link>
          </div>
        </div>
        <a onClick={this.myfunc}>
          <div className="dropdown" style={{ marginLeft: "80vw" }}>
            <div className="individual_bar"></div>
            <br></br>
            <div className="individual_bar"></div>
          </div>
        </a>
      </div>
    );
  }
}

export default Navbar;
