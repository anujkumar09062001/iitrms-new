import React, { Component } from "react";
import TeamMember from "../member/member";
import "./electrical.css";

class Battery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  HandleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    return (
      <div className="battery">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Battery Management System
        </div>
        <div
          style={{ display: this.state.open ? "flex" : "none" }}
          className="team-members-members"
        >
          <TeamMember
            name="Raj Narnoli"
            position="Head"
            fb="https://www.facebook.com/rajnarnoli"
            linkedin="https://www.linkedin.com/in/raj-narnoli-aa6a0b162/"
          ></TeamMember>
          <TeamMember
            name="Mohit Kumar Gupta"
            position="Member"
            fb="https://www.facebook.com/profile.php?id=100013203939940"
            linkedin="https://www.linkedin.com/in/mohit-kumar-gupta-26a47414a"
          ></TeamMember>
          <TeamMember
            name="Roshan Raja Samuel"
            position="Member"
            fb="https://www.facebook.com/ROSHAN.RAJASAMUEL"
            linkedin="https://www.linkedin.com/in/roshan-raja-samuel-581431192"
          ></TeamMember>
          <TeamMember
            name="Aditya Sharma"
            position="Member"
            fb="https://www.facebook.com/profile.php?id=100037764519567"
            linkedin="https://www.linkedin.com/in/aditya-sharma-13ab531a2"
          ></TeamMember>
          <TeamMember
            name="Spandan Gera"
            position="Member"
            fb="https://www.facebook.com/spandan.gera.3"
          ></TeamMember>
        </div>
      </div>
    );
  }
}

export default Battery;
