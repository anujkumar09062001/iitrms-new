import React, { Component } from "react";
import "./homepage.css";
import Navbar from "../components/navbar/navbar";
import CarBackground from "../assests/car.png";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homepage">
        <Navbar></Navbar>
        <div className="intro-slider"></div>
        <div className="homepage-projects">
          <div className="homepage-projects-heading">PROJECTS</div>
          <div className="homepage-projects-images"></div>
          <div className="homepage-projects-viewall">VIEW ALL PROJECTS</div>
        </div>
      </div>
    );
  }
}

export default Homepage;
