import React, { Component } from "react";
import TeamMember from "../member/member";
import "./electrical.css";

class Accumulator extends Component {
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
      <div className="accumulator">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Accumulator
        </div>
        <div
          style={{ display: this.state.open ? "flex" : "none" }}
          className="team-members-members"
        >
          <TeamMember
            name="Shivam Nirmal"
            position="Head"
            fb="https://www.facebook.com/profile.php?id=100005453106904"
            linkedin="https://www.linkedin.com/in/shivam-nirmal-446b59169"
          ></TeamMember>
          <TeamMember
            name="Raj Narnoli"
            position="Member"
            fb="https://www.facebook.com/rajnarnoli"
            linkedin="https://www.linkedin.com/in/raj-narnoli-aa6a0b162/"
          ></TeamMember>
          <TeamMember
            name="Kodakandla Dheeraj"
            position="Member"
            fb="https://www.facebook.com/kodakandla.dheeraj"
            linkedin="https://www.linkedin.com/in/kodakandla-dheeraj-6095071a3"
          ></TeamMember>
          <TeamMember
            name="Pobbati Surendra"
            position="Member"
            fb="https://www.facebook.com/surendra.sunny.786"
            linkedin="https://www.linkedin.com/in/surendra-pobbati-ba39061a8"
          ></TeamMember>
          <TeamMember
            name="Anurag Patra"
            position="Member"
            fb="https://www.facebook.com/anurag.patra.370"
            linkedin="https://www.linkedin.com/in/anurag-patra-25536b193"
          ></TeamMember>
        </div>
      </div>
    );
  }
}

export default Accumulator;
