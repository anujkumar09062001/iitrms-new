import React, { Component } from "react";
import "./navbar.css";
// import { Grid, Segment } from 'semantic-ui-react'
import Image from "../../assets/logo.svg";
import IITR from "../../assets/iitrlogo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "home" };
  }
  HandleActive = (str) => {
    this.setState({
      active: str,
      function() {
        console.log("here");
      },
    });
  };
  // componentDidUpdate(){
  //   console.log("here");
  // }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <div className="navbar-logo-container">
            <img src={IITR} style={{ width: "3.5vw" }}></img>
          </div>
        </div>
        {console.log(this.state.active)}
        <div className="navbar-navigation">
          <Link to="/">
            <div
              onClick={() => this.HandleActive("home")}
              class="individual-option"
              style={{
                color: this.state.active == "home" ? "#A4CC3C" : "#fff",
              }}
            >
              HOME
            </div>
          </Link>
          <Link to="/about" onClick={() => this.HandleActive("about")}>
            <div
              class="individual-option"
              style={{
                color: this.state.active == "about" ? "#A4CC3C" : "#fff",
              }}
            >
              ABOUT US
            </div>
          </Link>
          <Link to="/cars" onClick={() => this.HandleActive("cars")}>
            <div
              class="individual-option"
              style={{
                color: this.state.active == "cars" ? "#A4CC3C" : "#fff",
              }}
            >
              CARS
            </div>
          </Link>
          <Link to="/sponsors">
            <div
              class="individual-option"
              style={{
                color: this.state.active == "sponsors" ? "#A4CC3C" : "#fff",
              }}
            >
              SPONSORS
            </div>
          </Link>
          {/* <Link to="/blogs">
                <div onClickthis.HandleActive.bind(this, "blogs")} class="individual-option" style={{color: this.state.active=="blogs" ? "#A4CC3C" : "#fff"}}>BLOG</div>
              </Link> */}
          <Link to="/team">
            <div
              class="individual-option"
              style={{
                color: this.state.active == "team" ? "#A4CC3C" : "#fff",
              }}
            >
              TEAM
            </div>
          </Link>
          {/* <Link to="/contact">
            <div
              class="individual-option"
              style={{
                color: this.state.active == "contact" ? "#A4CC3C" : "#fff",
              }}
            >
              CONTACT
            </div>
          </Link> */}
        </div>
        <div className="navbar-logo2">
          <div className="navbar-logo-container2">
            <img src={Image} style={{ width: "7vw", zIndex: "-1" }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
