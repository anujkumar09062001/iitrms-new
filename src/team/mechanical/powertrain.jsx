import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Powertrain extends Component {
  state = {
    powertrainData: [
      {
        name: "Pratikesh Thakur",
        image: "",
        fb: "https://www.facebook.com/pratikesh.thakur.5",
        lin: "https://www.linkedin.com/in/pratikesh-prakash/",
      },
      {
        name: "Rahul Panjwani",
        image: "",
        fb: "https://www.facebook.com/rahul.panjwani.984",
        lin: "https://www.linkedin.com/in/rahul-panjwani-534521191",
      },
      {
        name: "Pradyummna Kulkarni",
        image: "",
        fb: "",
        lin: "",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.powertrainData.map((detail, index) => {
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

export default Powertrain;
