import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Structural extends Component {
  state = {
    structuralData: [
      {
        name: "Omkar Raj",
        image: "",
        fb: "https://www.facebook.com/omkarraj02",
        lin: "www.linkedin.com/in/rajomkar02",
      },
      {
        name: "Rishabh Bakshi",
        image: "",
        fb: "https://www.facebook.com/rishabhbakshi99",
        lin: "https://www.linkedin.com/mwlite/in/rishabh-bakshi-6497b3174",
      },
      {
        name: "Balasivakumar",
        image: "",
        fb: "https://www.facebook.com/Balasiva04.5811",
        lin: "https://in.linkedin.com/in/balasivakumar-mangali-5a5732173",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.structuralData.map((detail, index) => {
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

export default Structural;
