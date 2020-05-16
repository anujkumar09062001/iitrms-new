import React, { Component } from "react";
import "./member.css";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.svg";

class Member extends Component {
  state = {};
  render() {
    return (
      <div className="member">
        <div className="member-image">
          <img src={this.props.image} style={{ width: "100%" }}></img>
        </div>
        <div className="member-name">{this.props.name}</div>
        <div className="member-contact">
          <a href={this.props.fb}>
            <img className="member-contact-facebook" src={Facebook}></img>
          </a>
          <a href={this.props.linkedin}>
            <img className="member-contact-instagram" src={Linkedin}></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Member;
