import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Motor extends Component {
  state = {
    motorData: [
      {
        name: "Dheeraj Etta ",
        image: "",
        fb: "https://www.facebook.com/profile.php?id=100018402732417",
        lin: "https://www.linkedin.com/in/dheeraj-etta-77a61714a/",
      },
      {
        name: "Tanisha Sahu",
        image: "",
        fb: "https://www.facebook.com/tanisha390",
        lin: "https://www.linkedin.com/in/tanisha-sahu-7b2b7a11b/",
      },
      {
        name: "Gautam Raj",
        image: "",
        fb: "https://www.facebook.com/gouthamraj.vadthayvath.1",
        lin: "",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.motorData.map((detail, index) => {
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

export default Motor;
