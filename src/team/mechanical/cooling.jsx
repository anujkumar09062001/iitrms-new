import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Cooling extends Component {
  state = {
    coolingData: [
      {
        name: "Prakhar Mishra",
        image: "",
        fb: "https://www.facebook.com/prakhar.mishra.161214",
        lin: "https://www.linkedin.com/in/prakhar-mishra-409a66174",
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
        {this.state.coolingData.map((detail, index) => {
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

export default Cooling;
