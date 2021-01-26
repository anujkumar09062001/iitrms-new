import React, { Component } from "react";
import TeamMember from "../member/member";
import "./electrical.css";

class Shutdown extends Component {
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
      <div className="shutdown">
        <div onClick={this.HandleOpen} className="team-members-sub-heading">
          Shutdown & Control Unit
        </div>
        <div
          style={{ display: this.state.open ? "flex" : "none" }}
          className="team-members-members"
        >
          <TeamMember
            name="Mohit Kumar Gupta"
            position="Member"
            fb="https://www.facebook.com/profile.php?id=100013203939940"
            linkedin="https://www.linkedin.com/in/mohit-kumar-gupta-26a47414a"
          ></TeamMember>
          <TeamMember
            name="Sangeet Yadav"
            position="Member"
            fb="https://www.facebook.com/sangeet.yadav.505523"
            linkedin="https://www.linkedin.com/in/sangeet-yadav-0aa1171a4"
          ></TeamMember>
          <TeamMember
            name="Yash Asati"
            position="Member"
            fb="https://www.facebook.com/yash.asati.77"
            linkedin="https://www.linkedin.com/in/yash-asati-b004131b4"
          ></TeamMember>
          <TeamMember
            name="Vivek"
            position="Member"
            fb="https://www.facebook.com/profile.php?id=100039483767416"
            linkedin=""
          ></TeamMember>
          <TeamMember
            name="Jaswant Singh"
            position="Member"
            fb="https://www.facebook.com/profile.php?id=100025506660917"
            linkedin="https://www.linkedin.com/in/jaswant-singh-a70058195"
          ></TeamMember>
        </div>
      </div>
    );
  }
}

export default Shutdown;
