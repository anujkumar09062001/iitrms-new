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
          <div className="homepage-heading">PROJECTS</div>
          <div className="homepage-projects-images"></div>
          <div className="homepage-projects-viewall">VIEW ALL PROJECTS</div>
        </div>
        <div className="homepage-testimonials">
          <div className="homepage-heading">TESTIMONIALS</div>
          <div className="homepage-testimonials-content">
            <div className="homepage-testimonials-firstpart">
              <div className="homepage-testimonials-identity">
                <div className="homepage-testimonials-photo"></div>
                <div className="homepage-testimonials-name">Hero Alom</div>
                <div className="homepage-testimonials-post">Star</div>
              </div>
              <div className="homepage-testimonials-comment">
                "comments in the center"{" "}
              </div>
              {/* <div className="homepage-testimonials-button"></div> */}
            </div>
          </div>
        </div>
        <div className="homepage-sponsors">
          <div className="homepage-heading">SPONSORS</div>
          <div className="homepage-sponsors-all">
            <div className="homepage-sponsors-golden">
              <div className="gold-heading">GOLD</div>
              <div className="colored-sponsors"></div>
            </div>
            <div className="homepage-sponsors-silver">
              <div className="silver-heading">SILVER</div>
              <div className="colored-sponsors"></div>
            </div>
            <div className="homepage-sponsors-bronze">
              <div className="bronze-heading">BRONZE</div>
              <div className="colored-sponsors"></div>
            </div>
          </div>
          <div className="homepage-sponsors-viewall">
            <a className="homepage-hyperlink" href="#">
            VIEW ALL SPONSORS
            <hr></hr>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
