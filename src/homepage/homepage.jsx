import React, { Component } from "react";
import "./homepage.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
// import CarBackground from "../assets/car.png";
import Stripped from "../assets/stripped_back.png";
import Stripped2 from "../assets/stripped_back2.png";
import Heading from "../components/heading/heading";
import IITR from "../assets/iitrlogo.png";
import Melasta from "../assets/melasta.png";
import CFT from "../assets/cft.png";
import Goodluck from "../assets/goodluck.png";
import Jlcpcb from "../assets/jlcpcb.png";
import Pcb from "../assets/pcb.png";
import Coroplast from "../assets/coroplast.png";
import App from "../assets/app.png";
import Bqf from "../assets/bqf.png";
import Gigavac from "../assets/gigavac.png";
import Simscale from "../assets/simscale.png";
import Wilwood from "../assets/wilwood.png";
import Gri from "../assets/gripump.svg";
import Ipg from "../assets/ipg.png";
import Solidworks from "../assets/solidworks.svg";
import Facebook from "../assets/facebook2.png";
import Linkedin from "../assets/linkedin2.png";
import Insta from "../assets/Insta2.png";
import Twitter from "../assets/twitter2.png";
import Youtube from "../assets/youtube2.png";
import Car from "../assets/car.png";
import { NavHashLink as Link } from "react-router-hash-link";
import Event1 from "../assets/event 1.jpg";
import Event2 from "../assets/event 2.jpg";
import Event3 from "../assets/event 3.jpg";
import Event4 from "../assets/event 4.jpg";
import Event5 from "../assets/event 5.jpg";
import Achieve1 from "../assets/achievement_RMSE19.jpg";
import Achieve2 from "../assets/achievement_SABER.jpg";
import Achieve3 from "../assets/achievement_BOLT.jpg";
import Achieve4 from "../assets/achievement_RMS13.jpg";
import Achieve5 from "../assets/achievement_FIITR11.jpg";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollEvents: [
        {
          id: 0,
          image: Event1,
          text:
            "Despite the pandemic, Team IITRMS participated in Formula Bharat 2021 Virtuals and secured an overall 6th position amongst 23 teams (EV category).",
        },
        {
          id: 1,
          image: Event2,
          text:
            "Bagged overall 3rd place and presented the fastest accelerating car at Formula Green 2020.",
        },
        {
          id: 2,
          image: Event3,
          text:
            "Launch event of RMSE19, graced by the presence of Dr. Ajit K. Chaturvedi (Director, IIT Roorkee) and Ms. Garima Avtar (Professional Rally Racer).",
        },
        {
          id: 3,
          image: Event4,
          text:
            "Developed a realistic race car driving simulator in Thomso 2019, IIT Roorkee (Cultural Festival).",
        },
        {
          id: 4,
          image: Event5,
          text:
            "Representing our institute, we showcased our car SABER at “Manufacturing Today: Reinventing The Future” organized by Aditya Birla Group in September 2019.",
        },
      ],
      Achievements: [
        {
          id: "1",
          image: Achieve1,
        },
        {
          id: "2",
          image: Achieve2,
        },
        {
          id: "3",
          image: Achieve3,
        },
        {
          id: "4",
          image: Achieve4,
        },
        {
          id: "5",
          image: Achieve5,
        },
      ],
      achievementActive: "1",
      activeIndex: 0,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  leftscroll = () => {
    var i = this.state.activeIndex;
    if (i === 0) {
      i = this.state.scrollEvents.length - 1;
      this.setState({
        activeIndex: i,
      });
    } else {
      i--;
      this.setState({
        activeIndex: i,
      });
    }
  };
  rightscroll = () => {
    var i = this.state.activeIndex;
    if (i === this.state.scrollEvents.length - 1) {
      this.setState({
        activeIndex: 0,
      });
    } else {
      i++;
      this.setState({
        activeIndex: i,
      });
    }
  };
  handleAchieve = (str) => {
    this.setState({
      achievementActive: str,
    });
  };
  render() {
    return (
      <div className="homepage">
        <Navbar></Navbar>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundImage: `url(${Car})`,
            zIndex: "-2",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="homepage-intro">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "90vh",
              paddingTop: "15vh",
            }}
          >
            <div className="homepage-intro-box">
              <div className="homepage-intro-box-line"></div>
              <div className="homepage-intro-box-contents">
                <div className="homepage-intro-box-contents-heading1">
                  IIT ROORKEE MOTORSPORTS
                </div>
                <div className="homepage-intro-box-contents-heading2">
                  Electrifying Racing
                </div>
                <div className="homepage-intro-box-contents-heading3">
                  The official formula student racing team of IIT Roorkee.
                </div>
              </div>
            </div>
            <div className="homepage-intro-explore-box">
              <Link to="/cars">
                <div className="homepage-intro-explore">Explore Our Cars</div>
              </Link>
            </div>
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="homepage-intro-socials">
              Connect on Social Media
              <div>
                <a href="https://www.facebook.com/iitrms.in/">
                  <img src={Facebook} style={{ padding: "20px 10px" }}></img>
                </a>
                <a href="https://www.linkedin.com/company/iitrms/?originalSubdomain=in">
                  <img src={Linkedin} style={{ padding: "20px 10px" }}></img>
                </a>
                <a href="https://www.instagram.com/iitroorkeemotorsports/?hl=en">
                  <img src={Insta} style={{ padding: "20px 10px" }}></img>
                </a>
                <a href="https://twitter.com/iitrms_iitr?lang=en">
                  <img src={Twitter} style={{ padding: "20px 10px" }}></img>
                </a>
                <a href="https://www.youtube.com/channel/UCX5M-zh5cSpROSOE2ciV1yQ">
                  <img src={Youtube} style={{ padding: "20px 10px" }}></img>
                </a>
              </div>
            </div>
          </div>
        </div>

        {this.state.scrollEvents.map((recent, index) => {
          if (index == this.state.activeIndex) {
            return (
              <div className="homepage-recent">
                <img className="homepage-recent-stripped" src={Stripped}></img>
                <Heading text="RECENT EVENTS"></Heading>
                <div className="homepage-recent-scroll">
                  <div
                    className="homepage-recent-scroll-circle"
                    style={{
                      border:
                        this.state.activeIndex == 0
                          ? "3px solid white"
                          : "none",
                    }}
                  ></div>
                  <div
                    className="homepage-recent-scroll-circle"
                    style={{
                      border:
                        this.state.activeIndex == 1
                          ? "3px solid white"
                          : "none",
                    }}
                  ></div>
                  <div
                    className="homepage-recent-scroll-circle"
                    style={{
                      border:
                        this.state.activeIndex == 2
                          ? "3px solid white"
                          : "none",
                    }}
                  ></div>
                  <div
                    className="homepage-recent-scroll-circle"
                    style={{
                      border:
                        this.state.activeIndex == 3
                          ? "3px solid white"
                          : "none",
                    }}
                  ></div>
                  <div
                    className="homepage-recent-scroll-circle"
                    style={{
                      border:
                        this.state.activeIndex == 4
                          ? "3px solid white"
                          : "none",
                    }}
                  ></div>
                </div>
                <div
                  style={{ display: "flex", zIndex: "1", position: "relative" }}
                >
                  <div>
                    <div className="homepage-eventscroller">
                      <img
                        src={recent.image}
                        style={{
                          height: "100%",
                          margin: "0 auto",
                        }}
                      ></img>
                      <div className="homepage-eventscroller-description">
                        <span style={{ fontWeight: "bold" }}></span>
                        {recent.text}
                      </div>
                      <button
                        className="homepage-eventscroller-leftslide"
                        onClick={this.leftscroll}
                      >
                        <div className="arrow-left"></div>
                      </button>
                      <button
                        className="homepage-eventscroller-rightslide"
                        onClick={this.rightscroll}
                      >
                        <div className="arrow-right"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="homepage-projects">
          <img
            className="homepage-recent-stripped2 homepage-recent-stripped"
            src={Stripped2}
          ></img>
          <Heading text="OUR PROJECTS"></Heading>
          <div className="homepage-projects-allprojects">
            <div>
              <Link to="/cars#rmse19">
                <div className="homepage-projects-project1 homepage-projects-project">
                  <div className="homepage-projects-project-heading">
                    RMSE '19
                  </div>
                </div>
              </Link>
              <div style={{ display: "flex" }}>
                <Link to="/cars#bolt">
                  <div className="homepage-projects-project3 homepage-projects-project">
                    <div className="homepage-projects-project-heading">
                      BOLT
                    </div>
                  </div>
                </Link>
                <Link to="/cars#rmse13">
                  <div className="homepage-projects-project4 homepage-projects-project">
                    <div className="homepage-projects-project-heading">
                      RMS13
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/cars#saber">
                <div className="homepage-projects-project2 homepage-projects-project">
                  <div className="homepage-projects-project-heading">SABER</div>
                </div>
              </Link>
              <Link to="/cars#fiitr">
                <div className="homepage-projects-project5 homepage-projects-project">
                  <div className="homepage-projects-project-heading">
                    FIITR-11
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage-recent">
          <img className="homepage-recent-stripped" src={Stripped}></img>
          <Heading text="ACHIEVEMENTS"></Heading>
          <div style={{ display: "flex", zIndex: "1", position: "relative" }}>
            <div>
              {this.state.Achievements.map((achievement) => {
                if (this.state.achievementActive == achievement.id) {
                  return (
                    <div
                      className="homepage-achievement-eventscroller homepage-eventscroller"
                      style={{
                        backgroundImage: `url(${achievement.image})`,
                        zIndex: "-2",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    >
                      {achievement.index}
                    </div>
                  );
                }
              })}
              <div className="homepage-eventline"></div>
              <div className="homepage-achievements-cars">
                <div
                  className="homepage-achievements-cars-car"
                  onClick={() => this.handleAchieve("1")}
                  style={{ backgroundColor: this.state.achievementActive == "1" ? "#a4cc3c" : "#40455f"}}
                >
                  RMSE'19
                </div>
                <div
                  className="homepage-achievements-cars-car"
                  onClick={() => this.handleAchieve("2")}
                  style={{ backgroundColor: this.state.achievementActive == "2" ? "#a4cc3c" : "#40455f"}}
                >
                  Saber
                </div>
                <div
                  className="homepage-achievements-cars-car"
                  onClick={() => this.handleAchieve("3")}
                  style={{ backgroundColor: this.state.achievementActive == "3" ? "#a4cc3c" : "#40455f"}}
                >
                  Bolt
                </div>
                <div
                  className="homepage-achievements-cars-car"
                  onClick={() => this.handleAchieve("4")}
                  style={{ backgroundColor: this.state.achievementActive == "4" ? "#a4cc3c" : "#40455f"}}
                >
                  Car 2013
                </div>
                <div
                  className="homepage-achievements-cars-car"
                  onClick={() => this.handleAchieve("5")}
                  style={{ backgroundColor: this.state.achievementActive == "5" ? "#a4cc3c" : "#40455f"}}
                >
                  Car 2011
                </div>
              </div>
            </div>
            <div
              style={{
                display: this.state.achievementActive == "1" ? "block" : "none",
              }}
              className="homepage-achievements-allachieve"
            >
              <div className="homepage-allevents-heading">
                FORMULA GREEN<br></br>
                <span style={{ fontSize: "20px" }}>2020</span>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">1st</div>
                <div className="homepage-allevents-event-position">
                  Acceleration Event
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">
                  Business Presentation
                </div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">3rd</div>
                <div className="homepage-allevents-event-position">
                  Overall Competition
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">3rd</div>
                <div className="homepage-allevents-event-position">
                  Engg. Design Event
                </div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">
                  Cost Presentation
                </div>
              </div>
            </div>
            <div
              style={{
                display: this.state.achievementActive == "2" ? "block" : "none",
              }}
              className="homepage-achievements-allachieve"
            >
              <div className="homepage-allevents-heading">
                FORMULA GREEN<br></br>
                <span style={{ fontSize: "20px" }}>2020</span>
              </div>
              <div className="homepage-allevents-event1">
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  The only team at the competition with an air cooling system
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  Completed one lap in 2 min 17 sec beating the fastest lap of 2
                  min 48 sec in a friendly test run
                </div>
              </div>
            </div>
            <div
              style={{
                display: this.state.achievementActive == "3" ? "block" : "none",
              }}
              className="homepage-achievements-allachieve"
            >
              <div className="homepage-allevents-heading">
                FORMULA GREEN<br></br>
                <span style={{ fontSize: "20px" }}>2020</span>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">4th</div>
                <div className="homepage-allevents-event-position">
                  Overall (EV)
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">
                  Cost (EV)
                </div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">4th</div>
                <div className="homepage-allevents-event-position">
                  Design (EV)
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">4th</div>
                <div className="homepage-allevents-event-position">
                  Business Presentation (EV)
                </div>
              </div>
              <div className="homepage-allevents-event1">
                {/* <div className="homepage-allevents-event-rank">2nd</div> */}
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  The team won the ’CAMS Inspiring Motorsports Award’ from CAMS
                  Confederation of Australian Motorsports for Best Design among
                  first-year electric teams.
                </div>
              </div>
            </div>
            <div
              style={{
                display: this.state.achievementActive == "4" ? "block" : "none",
              }}
              className="homepage-achievements-allachieve"
            >
              <div className="homepage-allevents-heading">
                FORMULA GREEN<br></br>
                <span style={{ fontSize: "20px" }}>2020</span>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">1st</div>
                <div className="homepage-allevents-event-position">
                  Cost and Business Presentation among Indian Teams
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">2nd</div>
                <div className="homepage-allevents-event-position">
                  Overall as well as design among Indian Teams
                </div>
              </div>
              <div className="homepage-allevents-event1">
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  The only hybrid car in FS UK 2013
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  Winner IMechE Formula Student award of 2500 GBP
                </div>
              </div>
            </div>
            <div
              style={{
                display: this.state.achievementActive == "5" ? "block" : "none",
              }}
              className="homepage-achievements-allachieve"
            >
              <div className="homepage-allevents-heading">
                FORMULA GREEN<br></br>
                <span style={{ fontSize: "20px" }}>2020</span>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">1st</div>
                <div className="homepage-allevents-event-position">
                  Fuel Econonmy
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div className="homepage-allevents-event-rank">1st</div>
                <div className="homepage-allevents-event-position">
                  Indian team finishing the 32 lap final race in Australia
                </div>
              </div>
              <div className="homepage-allevents-event1">
                <div className="homepage-allevents-event-rank">7th</div>
                <div className="homepage-allevents-event-position">
                  Cost Preparation
                </div>
              </div>
              <div className="homepage-allevents-event2">
                <div
                  className="homepage-allevents-event-position"
                  style={{ width: "100%" }}
                >
                  The car was also exhibited in the design Pavillion of AUTO
                  EXPO 2012, New Delhi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-projects">
          <img
            className="homepage-recent-stripped2 homepage-recent-stripped"
            src={Stripped}
          ></img>
          <Heading text="OUR PROUD PARTNERS"></Heading>
          <div className="homepage-partners-allpartners">
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IITR} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Melasta} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CFT} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Goodluck} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Jlcpcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Pcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Coroplast} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={App} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Bqf} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gigavac} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Simscale} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Wilwood} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gri} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Ipg} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Solidworks} className="homepage-partners-partner"></img>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100vw", height: "40px", backgroundColor: "#9D9FA8" }}
        ></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Homepage;
