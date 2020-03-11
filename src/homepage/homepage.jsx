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
              <hr className="sponsors-hr"></hr>
            </a>
          </div>
        </div>
        <div className="homepage-blogs">
          <div className="homepage-blogs-heading">
            <div className="homepage-blogs-mainheading">From the Blog</div>
            <div className="homepage-blogs-seeall">
              SEE ALL VIEWS<hr className="homepage-blogs-seeall-line"></hr>
            </div>
          </div>
          <div className="homepage-blogs-allblogs">
          <div className="homepage-blogs-blog">
              <div className="homepage-blogs-category">Electrical</div>
              <div className="homepage-blogs-blog-heading">
                Our Battery management System
              </div>
            </div>
            <div className="homepage-blogs-blog">
              <div className="homepage-blogs-category">Subsystem</div>
              <div className="homepage-blogs-blog-heading">
                The Structural Subsystem
              </div>
            </div>
            <div className="homepage-blogs-blog">
              <div className="homepage-blogs-category">Subsystem</div>
              <div className="homepage-blogs-blog-heading">
                The Aerodynamic Subsystem
              </div>
            </div>
          </div>
          <div className="fbtimeline">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiitrms.in%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=211383719974958"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
        <div className="homepage-events">
          <div className="homepage-events-heading">Events</div>
          <div className="hoempage-events-all">
            <div className="hoempage-events-event">
              <div className="homepage-events-event-category">FB LIVE</div>
              <div className="homepage-events-event-date">26/02</div>
              <div className="homepage-events-event-heading">
                Heading of the event
              </div>
              <div className="homepage-events-event-description">
                Description related to the event
              </div>
            </div>
            <div className="homepage-events-event">
              <div className="homepage-events-event-category">Raceday</div>
              <div className="homepage-events-event-date">26/02</div>
              <div className="homepage-events-event-heading">
                Heading of the event
              </div>
              <div className="homepage-events-event-description">
                Description related to the event
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
