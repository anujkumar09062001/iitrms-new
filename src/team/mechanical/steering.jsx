import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Steering extends Component {
  state = {
    steeringData: [
      {
        name: "Shivam Nirmal",
        image: "",
        fb: "https://www.facebook.com/profile.php?id=100005453106904",
        lin: "https://www.linkedin.com/in/shivam-nirmal-446b59169",
      },
      {
        name: "Raj Narnoli",
        image: "",
        fb: "https://www.facebook.com/rajnarnoli",
        lin: "https://www.linkedin.com/in/raj-narnoli-aa6a0b162/",
      },
      {
        name: "Kodakandla Dheeraj",
        image: "",
        fb: "https://www.facebook.com/kodakandla.dheeraj",
        lin: "https://www.linkedin.com/in/kodakandla-dheeraj-6095071a3",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.steeringData.map((detail, index) => {
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

export default Steering;
