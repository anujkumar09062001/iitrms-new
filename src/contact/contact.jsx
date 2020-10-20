import React, { Component } from "react";
import "./contact.css";
import Navbar from "../components/navbar/navbar";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contact">
          <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">CONTACT US NOW</div>
        </div>
      </div>
    );
  }
}

export default Contact;
