import React, { Component } from "react";
import "./member.css";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/insta.svg";

class Member extends Component {
  state = {};
  render() {
    return (
      <div className="member">
        <div className="member-image"></div>
        <div className="member-name">Name</div>
        <div className="member-contact">
          <img className="member-contact-facebook" src={Facebook}></img>
          <img className="member-contact-instagram" src={Instagram}></img>
        </div>
      </div>
    );
  }
}

export default Member;
