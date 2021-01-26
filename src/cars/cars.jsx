import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import "./cars.css";
import Car from "../assets/Car.png";
import Project1 from "../assets/project1.jpeg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.jpg";
import Footer from "../components/footer/footer";
import Drop1 from "./drop1/drop1";
import Drop2 from "./drop2/drop2";
import Drop3 from "./drop3/drop3";
import Drop4 from "./drop4/drop4";
import Drop5 from "./drop5/drop5";

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="cars">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">OUR CARS</div>
          <div className="blogs-heading2">
            The exceptional results of our endless efforts
          </div>
        </div>
        <div className="cars-all">
          <div className="cars-car">
            <div className="cars-car-heading" id="rmse19">
              RMSE'19
            </div>
            <div className="cars-car-info">
              With an aim to improve the overall design and focusing on the
              electric powertrain, the team developed its third electric racecar
              RMSE19. It is ergonomically designed safe and durable for track
              racing. With a 100kW motor, RMSE19 can accelerate from 0-100kmph
              in just 3.8 seconds and reach a max. speed of 140kmph. The team
              participated in Formula Green 2020 held at Kari Motor Speedway,
              Coimbatore in February 2020.
            </div>
            <div className="cars-car-image">
              <img src={Project1} style={{ width: "100%" }}></img>
            </div>
            <Drop1 text="ACHIEVEMENTS" show="1"></Drop1>
            <Drop1 text="TECHNICAL SPECIFICATIONS" show="2"></Drop1>
          </div>
          <div className="cars-car">
            <div className="cars-car-heading" id="saber">
              SABER
            </div>
            <div className="cars-car-info">
              Being the best team among electric cars in India, we showcased our
              ability again by building a fully electric car to run across the
              tracks of Formula Green 2017 in Coimbatore. Saber, due to its
              unbeatable designing as well as awesome technical support, was
              able to beat the fastest team in competition by a gap of 31 second
              in friendly run. Panel was so impressed by its unique aero cooling
              system, cost effectiveness as well as hard work and dedication of
              Team that they gave us an Honorary entry in the next Formula Green
              Competition.
            </div>
            <div className="cars-car-image">
              <img src={Project2} style={{ width: "100%" }}></img>
            </div>
            <Drop2 text="ACHIEVEMENTS" show="1"></Drop2>
            <Drop2 text="TECHNICAL SPECIFICATIONS" show="2"></Drop2>
          </div>
          <div className="cars-car">
            <div className="cars-car-heading" id="bolt">
              BOLT
            </div>
            <div className="cars-car-info">
              With the automotive industry shifting towards electric vehicles
              and increasing climate change concerns, we developed an
              all-electric vehicle - BOLT in 2015 and participated in FSAE
              Australasia, held in Melbourne (Australia). The long term aim of
              the team was to advance the technology of electric vehicles so
              that they may become cheaper and more efficient compared to
              gasoline-powered conventional cars. The car design was finalised
              after rigorous simulation and analysis of mechanical and
              electrical systems using software like Ansys, SolidWorks, ADAMS,
              MATLAB, Labsim and Multisim. After all this hardwork and patience,
              the team finally got its reward, being number one Indian team in
              the Formula Student electric rankings.
            </div>
            <div className="cars-car-image">
              <img src={Project3} style={{ width: "100%" }}></img>
            </div>
            <Drop3 text="ACHIEVEMENTS" show="1"></Drop3>
            <Drop3 text="TECHNICAL SPECIFICATIONS" show="2"></Drop3>
          </div>
          <div className="cars-car">
            <div className="cars-car-heading" id="rmse13">
              RMS13
            </div>
            <div className="cars-car-info">
              Taking a step further from IC Engine car, the team developed a
              plug-in series hybrid electric powertrain based race car and
              successfully participated at the international level in the
              Formula Student UK held at the Silverstone F1 Racetrack, UK from
              5-7 July 2013. It was organized by the Institution of Mechanical
              Engineers (IMechE) in association with Jaguar Land Rover, Mercedes
              AMG, Shell etc. A total of 149 international teams from
              prestigious universities around the globe were registered in the
              event, and IIT Roorkee Motorsports was the only team with a hybrid
              electric vehicle in the competition.
            </div>
            <div className="cars-car-image">
              <img src={Project4} style={{ width: "100%" }}></img>
            </div>
            <Drop4 text="ACHIEVEMENTS" show="1"></Drop4>
            <Drop4 text="TECHNICAL SPECIFICATIONS" show="2"></Drop4>
          </div>
          <div className="cars-car">
            <div className="cars-car-heading" id="fiitr">
              FIITR-11
            </div>
            <div className="cars-car-info">
              With hearts filled with passion and an aim to fabricate a
              formula-style racecar, FIITR-11, our first IC engine car was
              launched in 2011. The team participated in Formula SAE Australasia
              2011 held in Melbourne in December and was the only Indian team
              among the 30 registered international teams to participate in the
              event. IIT Roorkee Motorsports became the first Indian Team to
              complete the endurance event.
            </div>
            <div className="cars-car-image">
              <img src={Project5} style={{ width: "100%" }}></img>
            </div>
            <Drop5 text="ACHIEVEMENTS" show="1"></Drop5>
            <Drop5 text="TECHNICAL SPECIFICATIONS" show="2"></Drop5>
          </div>
        </div>
        <div
          style={{ width: "100vw", height: "40px", backgroundColor: "#9D9FA8" }}
        ></div>
        <Footer />
      </div>
    );
  }
}

export default Cars;
