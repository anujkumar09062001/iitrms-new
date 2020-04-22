import React, { Component } from "react";
import "./partners.css";
import Navbar from "../components/navbar/navbar";
import Current from "./partners-components/current/current";
import Former from "./partners-components/former/former";

class Partners extends Component {
  state = {
    active: "current",
  };
  handleClickCategory = (a) => {
    if (this.state.active != "current" && a === "current") {
      console.log(a);
      this.setState({
        active: "current",
      });
    } else if (this.state.active != "former" && a === "former") {
      console.log(a);
      this.setState({
        active: "former",
      });
    }
  };
  render() {
    return (
      <div className="partners">
        <Navbar></Navbar>
        <div className="partners-heading">Our Partners</div>
        <div className="partners-categories">
          <div
            className="partners-categories-current"
            onClick={() => {
              this.handleClickCategory("current");
            }}
          >
            Current
            {this.state.active === "current" ? (
              <div className="partners-categories-active"></div>
            ) : null}
          </div>
          <div
            className="partners-categories-former"
            onClick={() => {
              this.handleClickCategory("former");
            }}
          >
            Former
            {this.state.active === "former" ? (
              <div className="partners-categories-active"></div>
            ) : null}
          </div>
        </div>
        {this.state.active === "current" ? (
          <Current></Current>
        ) : (
          <Former></Former>
        )}
      </div>
    );
  }
}

export default Partners;
