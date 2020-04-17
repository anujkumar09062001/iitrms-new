import React, { Component } from "react";
import "./team.css";
import Navbar from "../components/navbar/navbar";
import Member from "../components/member/member";

class Team extends Component {
  state = {};
  render() {
    return (
      <div className="team">
        <Navbar></Navbar>
        <div className="team-heading">Our Team</div>
        <div className="team-management">
          <div className="team-subheading">Management</div>
          <div className="team-allmembers">
            <Member></Member>
            <Member></Member>
            <Member></Member>
            <Member></Member>
            <Member></Member>
          </div>
        </div>
        <div className="team-marketing">
          <div className="team-subheading">Marketing</div>
        </div>
        <div className="team-design">
          <div className="team-subheading">Design</div>
        </div>
        <div className="team-mechanical">
          <div className="team-subheading">Mechanical</div>
        </div>
        <div className="team-electrical">
          <div className="team-subheading">Electrical</div>
        </div>
      </div>
    );
  }
}

export default Team;
