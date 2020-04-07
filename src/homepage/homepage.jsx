import React, { Component } from "react";
import "./homepage.css";
import Navbar from "../components/navbar/navbar";
import Back1 from "../assets/slider1.jpg";
import Back2 from "../assets/slider2.jpg";
import Back3 from "../assets/slider3.jpg";
import Back4 from "../assets/slider4.jpg";
import Back5 from "../assets/slider5.jpg";
import Back6 from "../assets/slider6.jpg";
import Back7 from "../assets/slider7.jpg";
import Back8 from "../assets/slider8.jpg";
import testimonials from "./testimonialsData.json";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backdata: 
      [
          {
              "id": 0,
              "image":Back1,
              "text":"qwertyuiop"
          },
          {
              "id": 1,
              "image":Back2,
              "text":""
          },
          {
              "id": 2,
              "image":Back3,
              "text":""
          },
          {
              "id": 3,
              "image":Back4,
              "text":""
          },
          {
              "id": 4,
              "image":Back5,
              "text":""
          },
          {
              "id": 5,
              "image":Back6,
              "text":""
          },
          {
              "id": 6,
              "image":Back7,
              "text":""
          },
          {
              "id": 7,
              "image":Back8,
              "text":""
          }
      ],
      activeIndexHome: 0,
      activeIndex: 2,
    };
  }
  leftscroll = () => {
    var i = this.state.activeIndex;
    if (i === 0) {
      i = testimonials.length - 1;
      this.setState({
        activeIndex: i
      });
    } else {
      i--;
      this.setState({
        activeIndex: i
      });
    }
  };
  rightscroll = () => {
    var i = this.state.activeIndex;
    if (i === testimonials.length - 1) {
      this.setState({
        activeIndex: 0
      });
    } else {
      i++;
      this.setState({
        activeIndex: i  
      });
    }
  };
leftscrollHome = () => {
  var i = this.state.activeIndexHome;
  if (i === 0) {
    i = testimonials.length - 1;
    this.setState({
      activeIndexHome: i
    });
  } else {
    i--;
    this.setState({
      activeIndexHome: i
    });
  }
};
rightscrollHome = () => {
  var i = this.state.activeIndexHome;
  if (i === this.state.backdata.length - 1) {
    this.setState({
      activeIndexHome: 0
    });
  } else {
    i++;
    this.setState({
      activeIndexHome: i
    });
  }
};
render(){
 ;     return (
      <div className="homepage">
        
        {/* {this.state.backdata.map((introDetail,index)=>{
          if(index === this.state.activeIndexHome){
            return(
              <div>
              <button
              className="homepage-projects-leftslide"
                onClick={this.leftscrollHome}
                >
                <div className="arrow-left"></div>
                </button>
                <button
                className="homepage-projects-rightslide"
                onClick={this.rightscrollHome}
                >
                <div className="arrow-right"></div>
                </button>
                <div className="intro-slider" style={{backgroundImage: `url(${introDetail.image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>"oDetail.id}</div>
                </div>)
              }
            })} */}
        <div className="intro-slider">
            <Navbar></Navbar>
          <AwesomeSlider>
            <div className="sliderphoto" data-src={Back1} />
            <div className="sliderphoto" data-src={Back2} />
            <div className="sliderphoto" data-src={Back3} />
            <div className="sliderphoto" data-src={Back4} />
            <div className="sliderphoto" data-src={Back5} />
            <div className="sliderphoto" data-src={Back6} />
            <div className="sliderphoto" data-src={Back7} />
            <div className="sliderphoto" data-src={Back8} />
          </AwesomeSlider>
        </div>

        
        <div className="homepage-projects">
          
          <div className="homepage-heading">PROJECTS</div>
          <div className="homepage-projects-images" >
            <div className="homepage-projects-image-row">
              <div className="homepage-projects-image1"><a className="projects-image" ></a></div>
              <div className="homepage-projects-image2"><a className="projects-image"></a></div>
            </div>
            <div className="homepage-projects-image-row">
              <div className="homepage-projects-image3"><a className="projects-image"></a></div>
              <div className="homepage-projects-image4"><a className="projects-image"></a></div>
            </div>
          </div>
          <div className="homepage-projects-viewall">VIEW ALL PROJECTS</div>
        </div>
        <div className="homepage-testimonials">
          <button
            className="homepage-testimonials-leftslide"
            onClick={this.leftscroll}
          >
            <div className="arrow-left"></div>
          </button>
          <button
            className="homepage-testimonials-rightslide"
            onClick={this.rightscroll}
          >
            <div className="arrow-right"></div>
          </button>
          <div className="homepage-heading">TESTIMONIALS</div>
          {testimonials.map((testiDetail, index) => {
            if (index === this.state.activeIndex) {
              return (
                <div className="homepage-testimonials-content">
                  <div className="homepage-testimonials-firstpart">
                    <div className="homepage-testimonials-identity">
                      <div className="homepage-testimonials-photo"></div>
                      <div className="homepage-testimonials-name">
                        {testiDetail.name}
                      </div>
                      <div className="homepage-testimonials-post">
                        {testiDetail.post}
                      </div>
                    </div>
                    <div className="homepage-testimonials-comment">
                      {testiDetail.comment}{" "}
                    </div>
                    {/* <div className="homepage-testimonials-button"></div> */}
                  </div>
                </div>
              );
            }
          })}
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
            <a><div className="homepage-blogs-seeall">
              SEE ALL VIEWS<hr className="homepage-blogs-seeall-line"></hr>
            </div></a>
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
        </div>
        <div className="homepage-events">
          <div className="homepage-events-heading">Events</div>
          <div className="homepage-events-all">
            <div className="homepage-events-event">
              <div className="homepage-events-event-category">FB LIVE</div>
              <div className="homepage-events-event-individual">
                <div className="homepage-events-event-date">26/02</div>
                <div className="homepage-events-event-content">
                  <div className="homepage-events-event-heading">
                    Heading of the event
                  </div>
                  <br></br>
                  <div className="homepage-events-event-description">
                    Description related to the event
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage-events-event">
              <div className="homepage-events-event-category">Raceday</div>
              <div className="homepage-events-event-individual">
                <div className="homepage-events-event-date">26/02</div>
                <div className="homepage-events-event-content">
                  <div className="homepage-events-event-heading">
                    Heading of the event
                  </div>
                  <br></br>
                  <div className="homepage-events-event-description">
                    Description related to the event
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fbtimeline">
            <iframe
              class="fb_iframe"
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
        <div className="homepage-contact">
          <div className="homepage-contact-intro">
            <div className="homepage-contact-readytotalk">Ready To Talk?</div>
            <br></br>
            <div className="homepage-contact-scheduletalk">
              SCHEDULE A TALK OR JUST SAY HELLO
            </div>
          </div>
          <div className="inputfields">
            <form className="homepage-contact-form">
              <input
                type="text"
                className="inputbox"
                name="fname"
                placeholder="Full Name*"
              ></input>
              <br></br>
              <input
                type="text"
                className="inputbox"
                name="fname"
                placeholder="Email Address*"
              ></input>
              <br></br>
              <input
                type="text"
                className="inputbox"
                name="fname"
                placeholder="Phone Number"
              ></input>
            </form>
            <form className="homepage-contact-form">
              <input
                type="text"
                className="messagebox"
                name="fname"
                placeholder="write your message here..."
              ></input>
            </form>
          </div>
          {/* <div className="homepage-contact-submitline">
            <div className="homepage-contact-box"></div>
            <div className="homepage-contact-checkbox">
              Sign me up for latest news, events and more
            </div>
          </div> */}
        </div>
        <div className="homepage-map">
          <div className="homepage-map-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13839.94632857758!2d77.8938889!3d29.8646608!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1584076190527!5m2!1sen!2sin"
              width="100%"
              height="540"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="homepage-map-address">
            <div className="homepage-map-home-heading">HOME</div>
            <div className="map-address">
              Mechanical & Industrial Engineering Department, IIT Roorkee 247667
              , Uttarakhand, India
            </div>
            <div className="map-phone">
              <span id="phone">P </span>
              <span>+91 9451039813</span>
            </div>
            <div className="map-phone">
              <span id="phone">M </span>
              <span>+91 9451039813</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
