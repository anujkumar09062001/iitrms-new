import React, { Component } from "react";
import "./navbar.css";
// import { Grid, Segment } from 'semantic-ui-react'
import Image from "../../assests/logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHam: false
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
        activeHam: true
      });
    } else {
      this.setState({
        activeHam: false
      });
    }

  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <div className="navbar-logo-container">
            <img src={Image}></img>
          </div>
        </div>
        <div
          className="navbar-navigation"
          >
          <div class="individual-option">
            <a href="#" class="link">
              HOME
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              PROJECTS
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              TEAM
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              BLOG
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              CONTACT
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              SPONSORS
            </a>
          </div>
        </div>
        <div
          className="navbar-navigation-ham"
          style={{ display: this.state.activeHam ? "flex" : "none" }}
          // style={{ display: this.state.activeHam ? "none" : "flex" }}
          >
          <div class="individual-option">
            <a href="#" class="link">
              HOME
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              PROJECTS
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              TEAM
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              BLOG
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              CONTACT
            </a>
          </div>
          <div class="individual-option">
            <a href="#" class="link">
              SPONSORS
            </a>
          </div>
        </div>
        <a
          
          onClick={this.myfunc}
        >
          <div className="dropdown" style={{marginLeft: "80vw" }}>
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
