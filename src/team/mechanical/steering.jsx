import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Steering extends Component {
  state = {
    steeringData: [
      {
        name: "Omkar Raj",
        image: "",
        fb: "https://www.facebook.com/omkarraj02",
        lin: "www.linkedin.com/in/rajomkar02",
      },
      {
        name: "Prakhar Mishra",
        image: "",
        fb: "https://www.facebook.com/prakhar.mishra.161214",
        lin: "https://www.linkedin.com/in/prakhar-mishra-409a66174",
      },
      {
        name: "Gaurav Mangla",
        image: "",
        fb: "https://www.facebook.com/gaurav.mangla.5667",
        lin: "https://www.linkedin.com/in/gaurav-mangla-516522191",
      },
      {
        name: "Kshitij Gurbhele",
        image: "",
        fb: "https://www.facebook.com/profile.php?id=100023120573887",
        lin: "https://www.linkedin.com/in/kshitij-gurbhele-640522191",
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
