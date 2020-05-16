import React, { Component } from "react";
import "./team.css";
import { Link } from "react-router-dom";
import TeamHeading from "./team-heading";

class TeamCategories extends Component {
  state = {};
  render() {
    return (
      <div className="team">
        <TeamHeading></TeamHeading>
        <div className="team-heading">Our Team</div>
        <div className="team-all">
          <div className="team-management">
            <Link to="/team/management">
              <div className="team-subheading">Management</div>
            </Link>
          </div>
          <div className="team-marketing">
            <Link to="/team/marketing">
              <div className="team-subheading">Marketing</div>
            </Link>
          </div>
          <div className="team-mechanical">
            <Link to="/team/mechanical">
              <div className="team-subheading">Mechanical</div>
            </Link>
          </div>
          <div className="team-electrical">
            <Link to="/team/electrical">
              <div className="team-subheading">Electrical</div>
            </Link>
          </div>
          <div className="team-design">
            <Link to="/team/technical-marketing">
              <div className="team-subheading">Technical Marketing</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCategories;
