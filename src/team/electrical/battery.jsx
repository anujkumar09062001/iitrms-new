import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Battery extends Component {
  state = {
    batteryData: [
      {
        name: "Raj Narnoli",
        image: "",
        fb: "https://www.facebook.com/rajnarnoli",
        lin: "https://www.linkedin.com/in/raj-narnoli-aa6a0b162/",
      },
      {
        name: "Mohit Kumar Gupta",
        image: "",
        fb: "https://www.facebook.com/profile.php?id=100013203939940",
        lin: "",
      },
      {
        name: "Roshan Raja Samuel",
        image: "",
        fb: "https://www.facebook.com/ROSHAN.RAJASAMUEL",
        lin: "https://www.linkedin.com/in/roshan-raja-samuel-581431192",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.batteryData.map((detail, index) => {
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

export default Battery;
