import React, { Component } from "react";
import "./team.css";
import Navbar from "../components/navbar/navbar";
import TeamHeading from "./heading/heading";
import TeamMember from "./member/member";
import Footer from "../components/footer/footer";
import Accumulator from "./electrical/accumulator";
import Battery from "./electrical/battery";
import Shutdown from "./electrical/shutdown";
import Data from "./electrical/data";
import Motor from "./electrical/motor";
import Powertrain from "./mechanical/powertrain";
import Vehicle from "./mechanical/vehicle";
import Steering from "./mechanical/steering";
import Braking from "./mechanical/braking";
import Suspension from "./mechanical/suspension";
import Structural from "./mechanical/structural";
import Aero from "./mechanical/aero";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="team">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">IIT Roorkee Motorsports TEAM</div>
          <div className="blogs-heading2">
            The people who made this possible
          </div>
        </div>
        <div className="team-members">
          <div className="team-members-faculty">
            <TeamHeading text="FACULTY ADVISORS"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Arup Kumar Das"
                position="Professor"
                website="https://www.iitr.ac.in/~ME/Das_Arup_Kumar"
              ></TeamMember>
              <TeamMember
                name="Akshay Dvivedi"
                position="Professor"
                website="https://www.iitr.ac.in/~ME/Akshay_Dvivedi"
              ></TeamMember>
              <TeamMember
                name="Prof. Pramod Agrawal"
                position="Professor"
                website="https://ee.iitr.ac.in/~EE/pramgfee"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-keyMem">
            <TeamHeading text="KEY MEMBERS"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
                email="rhudiya@me.iitr.ac.in"
                fb="https://www.facebook.com/rahesh.hudiya.3"
                linkedin="https://www.linkedin.com/in/rahesh-hudiya-a55a80148"
              ></TeamMember>
              <TeamMember
                name="Shivendru Mathur"
                position="Deputy Team Leader"
                email="smathur@me.iitr.ac.in"
                fb="https://www.facebook.com/ShivendruMathur"
                linkedin="https://www.linkedin.com/in/shivendru-mathur-a47293184"
              ></TeamMember>
              <TeamMember
                name="Omkar Raj"
                position="Mechanical Head"
                email="oraj@me.iitr.ac.in"
                fb="https://www.facebook.com/omkarraj02"
                linkedin="www.linkedin.com/in/rajomkar02"
              ></TeamMember>
              <TeamMember
                name="Mohit Gupta"
                position="Electrical Head"
                email="mgupta@ee.iitr.ac.in"
                fb="https://www.facebook.com/profile.php?id=100013203939940"
                linkedin="https://www.linkedin.com/in/mohit-kumar-gupta-26a47414a"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-electrical">
            <TeamHeading text="ELECTRICAL"></TeamHeading>
            <Accumulator></Accumulator>
            <Battery></Battery>
            <Shutdown></Shutdown>
            <Data></Data>
            <Motor></Motor>
          </div>

          <div className="team-members-mechanical">
            <TeamHeading text="MECHANICAL"></TeamHeading>
            <Powertrain></Powertrain>
            <Vehicle></Vehicle>
            <Braking></Braking>
            <Steering></Steering>
            <Suspension></Suspension>
            <Structural></Structural>
            <Aero></Aero>
          </div>

          <div className="team-members-marketing">
            <TeamHeading text="MARKETING"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
                email="rhudiya@me.iitr.ac.in"
                fb="https://www.facebook.com/rahesh.hudiya.3"
                linkedin="https://www.linkedin.com/in/rahesh-hudiya-a55a80148"
              ></TeamMember>
              <TeamMember
                name="Maanav Seth"
                position="Web Developer"
                fb="https://www.facebook.com/maanav.seth.77/"
                linkedin="https://www.linkedin.com/in/maanavseth/"
              ></TeamMember>
              <TeamMember
                name="Ajay Chhapola"
                position="Designer"
                fb="https://www.facebook.com/ajay.chhapola.7"
              ></TeamMember>
              <TeamMember
                name="Tanisha Sahu"
                position="Member"
                fb="https://www.facebook.com/tanisha390"
                linkedin="https://www.linkedin.com/in/tanisha-sahu-7b2b7a11b/"
              ></TeamMember>
              <TeamMember
                name="Yashish Khurana"
                position="Member"
                fb="https://m.facebook.com/yashish.khurana"
                linkedin="https://www.linkedin.com/in/yashish-khurana-a9b36a1a5"
              ></TeamMember>
              <TeamMember
                name="Anand Jee Choubey"
                position="Member"
                fb="https://www.facebook.com/anandjee.choubey"
                linkedin="https://www.linkedin.com/in/anand-jee-5244411a2"
              ></TeamMember>
              <TeamMember
                name="Dheeraj Bathla"
                position="Member"
                fb="https://m.facebook.com/dheeraj.bathla.9"
                linkedin="https://in.linkedin.com/in/dheeraj-bathla-b3b1091a0"
              ></TeamMember>
              <TeamMember
                name="Himank Sehgal"
                position="Member"
                fb="https://www.facebook.com/himank.sehgal.9/"
                linkedin="https://www.linkedin.com/in/himank-sehgal-43786b192/"
              ></TeamMember>
              <TeamMember
                name="Akarsh Rawat"
                position="Member"
                fb="https://www.facebook.com/akarsh.rawat.102"
                linkedin="https://www.linkedin.com/in/akarsh-rawat-646302199"
              ></TeamMember>
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

export default Team;
