import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import "./about.css";
import Team from "../assets/team.png";
import Compi from "../assets/competition.png";
import Footer from "../components/footer/footer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-main">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">ABOUT US</div>
          <div className="blogs-heading2">Who we are and what we do?</div>
        </div>
        <div className="about">
          <div className="about-us">
            <div className="about-heading">Introduction</div>
            <div className="about-image">
              <img src={Team} style={{ width: "100%" }} />
            </div>
            <div className="about-info">
              IIT Roorkee Motorsports is the official Formula Student Electric
              team of IIT Roorkee which participates in the world’s largest
              Inter-Collegiate Engineering competition conducted by Formula
              Society of Automotive Engineers (FSAE), by designing, fabricating
              an open-wheel formula-style electric racecar. Our passion is not
              for cars alone; it is fuelled by our desire to use engineering and
              technology to change the mobility sector in India.
              <br />
              <br />
              With the same thrill, our seniors started the team in 2010 and
              made its debut in 2011 by participating in FSAE Australasia held
              in Melbourne, Australia with an internal combustion engine car.
              The team further participated in Formula Student UK - 2013 with a
              Hybrid Car followed by FSAE Australasia in 2015 with a fully
              Electric car. Continuing with the legacy, the team participated in
              Formula Green 2020 held in Coimbatore.
              <br />
              <br />
              The team has different divisions such as Electrical, Mechanical,
              Marketing & Operations and Design & Web Development, which works
              in their respective departments.
            </div>
          </div>
          <div className="about-compi">
            <div className="about-heading">About Formula Student</div>
            <div className="about-image">
              <img src={Compi} style={{ width: "100%" }} />
            </div>
            <div className="about-info">
              Formula Society of Automotive Engineers (FSAE) is the world’s
              largest student engineering design competition which enables
              students with the unique opportunity to develop their skills in
              technical designing, manufacturing, research work, team
              management, communication and business operations such as
              budgeting and market research in a real world environment. The
              unique combination of real world pressures to meet the deadlines,
              design, fabricate, assemble, test a formula style race car and to
              make it compete at the international level requires a great deal
              of skills and helps the students build an overall personality
              while working under great deal of pressure. These skills are very
              important in the current corporate world and hence the formula
              students are highly sought after across the corporate sectors
              especially in engineering mobility industry. The Car is judged on
              the basis of Static and Dynamic events. Static events consist of
              Design, Cost and Business Presentation which enables student to
              show their Planning, marketing strategies and overall design of
              the vehicle. The dynamic events consist of Skid-pad, Acceleration,
              Autocrosss, Efficiency and Endurance. This provides teams to
              directly compete with the design and performance.
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

export default About;
