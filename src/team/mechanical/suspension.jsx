import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Suspension extends Component {
  state = {
    suspensionData: [
      {
        name: "Gautam Rawat",
        image: "",
        fb: "https://www.facebook.com/GautamRawat2512",
        lin: "https://www.linkedin.com/in/gautam-rawat-635935143/",
      },
      {
        name: "Ajitesh Shukla",
        image: "",
        fb: "https://facebook.com/ajitesh.shukla.7587",
        lin: "https://www.linkedin.com/in/ajitesh-shukla-201199182",
      },
      {
        name: "Isshita Patel",
        image: "",
        fb: "https://www.facebook.com/isshita99",
        lin: "https://www.linkedin.com/in/isshita-patel-414bb117a",
      },
      {
        name: "Abhinav Bhatnagar",
        image: "",
        fb: "https://www.facebook.com/abhinav.bhatnagar.543",
        lin: "https://www.linkedin.com/in/abhinav-bhatnagar-b3395a174",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.suspensionData.map((detail, index) => {
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

export default Suspension;
