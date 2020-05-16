import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Braking extends Component {
  state = {
    brakingData: [
      {
        name: "Rahesh Hudiya",
        image: "",
        fb: "https://www.facebook.com/rahesh.hudiya.3",
        lin: "https://www.linkedin.com/in/rahesh-hudiya-a55a80148",
      },
      {
        name: "Jalaj Kumar Madaan",
        image: "",
        fb: "https://www.facebook.com/jalaj.madaan",
        lin: "https://www.linkedin.com/in/jalaj-kumar-madaan-637496176",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.brakingData.map((detail, index) => {
          return (
            <Member
              name={detail.name}
              fb={detail.fb}
              linkedin={detail.lin}
            ></Member>
          );
        })}
      </div>
    );
  }
}

export default Braking;
