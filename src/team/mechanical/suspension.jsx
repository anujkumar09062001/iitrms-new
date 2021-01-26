import React, { Component } from "react";
import TeamMember from "../member/member";

class Suspension extends Component {
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
      <div className="suspension">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Suspension
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

export default Suspension;
