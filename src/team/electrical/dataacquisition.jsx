import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Data extends Component {
  state = {
    dataData: [
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
        {this.state.dataData.map((detail, index) => {
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

export default Data;
