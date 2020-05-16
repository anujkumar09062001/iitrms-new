import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Aero extends Component {
  state = {
    AeroData: [
      {
        name: "Utkarsh Mishra",
        image: "",
        fb: "https://www.facebook.com/Utkarsh745",
        lin: "https://www.linkedin.com/in/utkarshamishra/",
      },
      {
        name: "Amogh Tandon",
        image: "",
        fb: "https://www.facebook.com/amogh.tandon.9",
        lin: "https://www.linkedin.com/in/amogh-tandon-553603184/",
      },
      {
        name: "Paramjeet",
        image: "",
        fb: "https://m.facebook.com/paramjeetkumar.lalla",
        lin: "https://www.linkedin.com/mwlite/in/paramjeet-lalla-968a93176",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.AeroData.map((detail, index) => {
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

export default Aero;
