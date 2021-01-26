import React, { Component } from "react";
import TeamMember from "../member/member";
import "./electrical.css";

class Data extends Component {
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
      <div className="data">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Data Acquisition System
        </div>
        <div
          style={{ display: this.state.open ? "flex" : "none" }}
          className="team-members-members"
        >
          <TeamMember
            name="Dheeraj Etta"
            position="Head"
            fb="https://www.facebook.com/profile.php?id=100018402732417"
            linkedin="https://www.linkedin.com/in/dheeraj-etta-77a61714a/"
          ></TeamMember>
          <TeamMember
            name="Tanisha Sahu"
            position="Member"
            fb="https://www.facebook.com/tanisha390"
            linkedin="https://www.linkedin.com/in/tanisha-sahu-7b2b7a11b/"
          ></TeamMember>
          <TeamMember
            name="Roshan Raja Samuel"
            position="Member"
            fb="https://www.facebook.com/ROSHAN.RAJASAMUEL"
            linkedin="https://www.linkedin.com/in/roshan-raja-samuel-581431192"
          ></TeamMember>
          <TeamMember
            name="Hrusheekesh"
            position="Member"
            fb="https://www.facebook.com/hrushee.kamsani.3"
            linkedin="https://www.linkedin.com/in/kamsani-hrusheekesh-reddy-67993318b"
          ></TeamMember>
          <TeamMember
            name="shreyank banakar"
            position="Member"
            fb=""
          ></TeamMember>
        </div>
      </div>
    );
  }
}

export default Data;
