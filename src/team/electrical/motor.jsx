import React, { Component } from "react";
import TeamMember from "../member/member";
import "./electrical.css";

class Motor extends Component {
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
      <div className="motor">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Motor and Motor Controller
        </div>
        <div
          style={{ display: this.state.open ? "flex" : "none" }}
          className="team-members-members"
        >
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
    );
  }
}

export default Motor;
