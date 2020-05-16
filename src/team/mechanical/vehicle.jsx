import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Vehicle extends Component {
  state = {
    vehicleData: [
      {
        name: "Shivendru Mathur",
        image: "",
        fb: "https://www.facebook.com/ShivendruMathur",
        lin: "https://www.linkedin.com/in/shivendru-mathur-a47293184",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.vehicleData.map((detail, index) => {
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

export default Vehicle;
