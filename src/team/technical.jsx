import React, { Component } from "react";
import "./common-team-component.css";
import Member from "../components/member/member";
import TeamHeading from "./team-heading";

class Tech extends Component {
  state = {
    techData: [
      {
        name: "Maanav Seth",
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
        <div className="team-heading">Technical Marketing Team</div>
        <div className="subheading-category-expanded">
          {this.state.techData.map((detail, index) => {
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

export default Tech;
