import React, { Component } from "react";
import "./common-team-component.css";
import TeamHeading from "./team-heading";
import Powertrain from "./mechanical/powertrain";
import VehicleDynamics from "./mechanical/vehicle";
import Braking from "./mechanical/braking";
import Cooling from "./mechanical/cooling";
import Suspension from "./mechanical/suspension";
import Steering from "./mechanical/steering";
import Structural from "./mechanical/structural";
import Aero from "./mechanical/aerodynamics";

class Mechanical extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "powertrain" };
  }
  handleClickCategory(a) {
    console.log(a);
    if (this.state.active != "powertrain" && a === "powertrain") {
      console.log(a);
      this.setState({
        active: "powertrain",
      });
    } else if (this.state.active != "vehicle" && a === "vehicle") {
      console.log(a);
      this.setState({
        active: "vehicle",
      });
    } else if (this.state.active != "braking" && a === "braking") {
      console.log(a);
      this.setState({
        active: "braking",
      });
    } else if (this.state.active != "cooling" && a === "cooling") {
      console.log(a);
      this.setState({
        active: "cooling",
      });
    } else if (this.state.active != "suspension" && a === "suspension") {
      console.log(a);
      this.setState({
        active: "suspension",
      });
    } else if (this.state.active != "steering" && a === "steering") {
      console.log(a);
      this.setState({
        active: "steering",
      });
    } else if (this.state.active != "structural" && a === "structural") {
      console.log(a);
      this.setState({
        active: "structural",
      });
    } else if (this.state.active != "aero" && a === "aero") {
      console.log(a);
      this.setState({
        active: "aero",
      });
    }
  }
  render() {
    return (
      <div className="category">
        <TeamHeading></TeamHeading>
        <div className="team-heading">Mechanical Team</div>
        {console.log("aya hai idhar")}
        <div className="category-subheadings">
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("powertrain");
            }}
          >
            Powertrain
            {this.state.active === "powertrain" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("vehicle");
            }}
          >
            Vehicle Dynamics
            {this.state.active === "vehicle" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("braking");
            }}
          >
            Braking
            {this.state.active === "braking" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("cooling");
            }}
          >
            Cooling
            {this.state.active === "cooling" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("suspension");
            }}
          >
            Suspension
            {this.state.active === "suspension" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("steering");
            }}
          >
            Steering
            {this.state.active === "steering" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("structural");
            }}
          >
            Structural
            {this.state.active === "structural" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
          <div
            className="category-subheading"
            onClick={() => {
              this.handleClickCategory("aero");
            }}
          >
            Aerodynamics
            {this.state.active === "aero" ? (
              <div className="categories-active"></div>
            ) : null}
          </div>
        </div>
        {this.state.active === "powertrain" ? <Powertrain></Powertrain> : null}
        {this.state.active === "vehicle" ? (
          <VehicleDynamics></VehicleDynamics>
        ) : null}
        {this.state.active === "braking" ? <Braking></Braking> : null}
        {this.state.active === "cooling" ? <Cooling></Cooling> : null}
        {this.state.active === "suspension" ? <Suspension></Suspension> : null}
        {this.state.active === "steering" ? <Steering></Steering> : null}
        {this.state.active === "structural" ? <Structural></Structural> : null}
        {this.state.active === "aero" ? <Aero></Aero> : null}
      </div>
    );
  }
}

export default Mechanical;
