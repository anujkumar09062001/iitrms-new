import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Accumulator extends Component {
  state = {
    accumulatorData: [
      {
        name: "Shivam Nirmal",
        image:
          "https://drive.google.com/uc?id=13rcoGcBe-XW_eTvWUxEbxYoYixPvioLl",
        fb: "https://www.facebook.com/profile.php?id=100005453106904",
        lin: "https://www.linkedin.com/in/shivam-nirmal-446b59169",
      },
      {
        name: "Raj Narnoli",
        image:
          "https://drive.google.com/uc?export=view&id=1d7cmmACtKW7SZTpw3qFu7p-lqrfQMFnp",
        fb: "https://www.facebook.com/rajnarnoli",
        lin: "https://www.linkedin.com/in/raj-narnoli-aa6a0b162/",
      },
      {
        name: "Kodakandla Dheeraj",
        image:
          "https://drive.google.com/uc?id=143ZwdHs1uB52VUiKsXj8UpjkpBBNRYUX",
        fb: "https://www.facebook.com/kodakandla.dheeraj",
        lin: "https://www.linkedin.com/in/kodakandla-dheeraj-6095071a3",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.accumulatorData.map((detail, index) => {
          return (
            <Member
              name={detail.name}
              image={detail.image}
              fb={detail.fb}
              linkedin={detail.lin}
            ></Member>
          );
        })}
      </div>
    );
  }
}

export default Accumulator;
