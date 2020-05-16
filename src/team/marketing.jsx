import React, { Component } from "react";
import "./common-team-component.css";
import Member from "../components/member/member";
import TeamHeading from "./team-heading";

class Marketing extends Component {
  state = {
    marketingData: [
      {
        name: "Rahesh Hudiya",
        image: "",
        fb: "https://www.facebook.com/rahesh.hudiya.3",
        lin: "https://www.linkedin.com/in/rahesh-hudiya-a55a80148",
      },
      {
        name: "Tanisha Sahu",
        image: "",
        fb: "https://www.facebook.com/tanisha390",
        lin: "https://www.linkedin.com/in/tanisha-sahu-7b2b7a11b/",
      },
      {
        name: "Amogh Tandon",
        image: "",
        fb: "https://www.facebook.com/amogh.tandon.9",
        lin: "https://www.linkedin.com/in/amogh-tandon-553603184/",
      },
    ],
  };
  render() {
    return (
      <div className="category">
        <TeamHeading></TeamHeading>
        <div className="team-heading">Marketing Team</div>
        <div className="subheading-category-expanded">
          {this.state.marketingData.map((detail, index) => {
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

export default Marketing;
