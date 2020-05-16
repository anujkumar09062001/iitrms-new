import React, { Component } from "react";
import "./common-team-component.css";
import "./team.css";
import Member from "../components/member/member";
import TeamHeading from "./team-heading";

class Management extends Component {
  state = {
    managementData: [
      {
        name: "Rahesh Hudiya",
        image: "",
        fb: "https://www.facebook.com/rahesh.hudiya.3",
        lin: "https://www.linkedin.com/in/rahesh-hudiya-a55a80148",
      },
      {
        name: "Shivendru Mathur",
        image: "",
        fb: "https://www.facebook.com/ShivendruMathur",
        lin: "https://www.linkedin.com/in/shivendru-mathur-a47293184",
      },
      {
        name: "Omkar Raj",
        image: "",
        fb: "https://www.facebook.com/omkarraj02",
        lin: "www.linkedin.com/in/rajomkar02",
      },
      {
        name: "Mohit Gupta",
        image: "",
        fb: "",
        lin: "",
      },
    ],
  };
  render() {
    return (
      <div className="category">
        <TeamHeading></TeamHeading>
        <div className="team-heading">Management Team</div>
        <div className="subheading-category-expanded">
          {this.state.managementData.map((detail, index) => {
            return (
              <Member
                name={detail.name}
                fb={detail.fb}
                linkedin={detail.lin}
              ></Member>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Management;
