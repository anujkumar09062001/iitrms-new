import React, { Component } from "react";
import "../common-team-component.css";
import "../../components/member/member";
import Member from "../../components/member/member";

class Shutdown extends Component {
  state = {
    shutdownData: [
      {
        name: "Himanshu",
        image: "",
        fb: "https://www.facebook.com/himanshu.tanwar.18659",
        lin: "https://www.linkedin.com/mwlite/in/himanshu-h-103877137",
      },
      {
        name: "Mohit Kumar Gupta",
        image: "",
        fb: "https://www.facebook.com/profile.php?id=100013203939940",
        lin: "",
      },
      {
        name: "Gautam Raj",
        image: "",
        fb: "https://www.facebook.com/gouthamraj.vadthayvath.1",
        lin: "",
      },
      {
        name: "Sangeet Yadav",
        image: "",
        fb: "https://www.facebook.com/sangeet.yadav.505523",
        lin: "https://www.linkedin.com/in/sangeet-yadav-0aa1171a4",
      },
    ],
  };
  render() {
    return (
      <div className="subheading-category-expanded">
        {this.state.shutdownData.map((detail, index) => {
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

export default Shutdown;
