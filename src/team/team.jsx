import React, { Component } from "react";
import "./team.css";
import Navbar from "../components/navbar/navbar";
import TeamHeading from "./heading/heading";
import TeamMember from "./member/member";
import Footer from "../components/footer/footer";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="team">
        <Navbar></Navbar>
        <div className="team-choice">
          <div className="team-current">CURRENT MEMBERS</div>
          <div className="team-alumini">OUR ALUMINI</div>
        </div>
        <div className="team-members">
          <div className="team-members-keyMem">
            <TeamHeading text="KEY MEMBERS"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-faculty">
            <TeamHeading text="FACULTY ADVISORS"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="professor"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="professor"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="professor"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="professor"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-marketing">
            <TeamHeading text="MARKETING"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-mechanical">
            <TeamHeading text="MECHANICAL"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
            </div>
          </div>
          <div className="team-members-electrical">
            <TeamHeading text="ELECTRICAL"></TeamHeading>
            <div className="team-members-members">
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
              ></TeamMember>
              <TeamMember
                name="Rahesh Hudiya"
                position="Team Leader"
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
