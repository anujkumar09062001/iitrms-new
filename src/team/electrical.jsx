import React, { Component } from "react";
import "./common-team-component.css";
import "./team.css";
import TeamHeading from "./team-heading";
import Accumulator from "./electrical/accumulator";
import Battery from "./electrical/battery";
import Shutdown from "./electrical/shutdown";
import Data from "./electrical/dataacquisition";
import Motor from "./electrical/motor";

class Electrical extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "accumulator" };
  }
  handleClickCategory(a) {
    console.log(a);
    if (this.state.active != "accumulator" && a === "accumulator") {
      console.log(a);
      this.setState({
        active: "accumulator",
      });
    } else if (this.state.active != "battery" && a === "battery") {
      console.log(a);
      this.setState({
        active: "battery",
      });
    } else if (this.state.active != "shutdown" && a === "shutdown") {
      console.log(a);
      this.setState({
        active: "shutdown",
      });
    } else if (this.state.active != "data" && a === "data") {
      console.log(a);
      this.setState({
        active: "data",
      });
    } else if (this.state.active != "motor" && a === "motor") {
      console.log(a);
      this.setState({
        active: "motor",
      });
    }
  }
  render() {
    return (
      <div className="category">
        <TeamHeading></TeamHeading>
        <div className="team-heading">Electrical Team</div>
        <div className="category-subheadings">
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("accumulator");
            }}
          >
            Accumulator
            {this.state.active === "accumulator" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("battery");
            }}
          >
            Battery Management System
            {this.state.active === "battery" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("shutdown");
            }}
          >
            Shutdown & Control unit
            {this.state.active === "shutdown" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("data");
            }}
          >
            Data Acquisition System
            {this.state.active === "data" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>

          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("motor");
            }}
          >
            Motor and motor controller
            {this.state.active === "motor" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
        </div>
        {this.state.active === "accumulator" ? (
          <Accumulator></Accumulator>
        ) : null}
        {this.state.active === "battery" ? <Battery></Battery> : null}
        {this.state.active === "shutdown" ? <Shutdown></Shutdown> : null}
        {this.state.active === "data" ? <Data></Data> : null}
        {this.state.active === "motor" ? <Motor></Motor> : null}
      </div>
    );
  }
}

export default Electrical;
