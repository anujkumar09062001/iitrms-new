import React, { Component } from "react";
import Management from "./management";
import Marketing from "./marketing";
import Mechanical from "./mechanical";
import Electrical from "./electrical";
import Tech from "./technical";

class TeamCategoryDisplay extends Component {
  state = { active: "management" };
  componentDidMount = () => {
    if (this.props.match.params.teamid === "management") {
      this.setState({
        active: "management",
      });
    } else if (this.props.match.params.teamid === "marketing") {
      this.setState({
        active: "marketing",
      });
    } else if (this.props.match.params.teamid === "mechanical") {
      this.setState({
        active: "mechanical",
      });
    } else if (this.props.match.params.teamid === "electrical") {
      this.setState({
        active: "electrical",
      });
    } else if (this.props.match.params.teamid === "technical-marketing") {
      this.setState({
        active: "tech",
      });
    }
    console.log(this.props.match.params.teamid);
  };
  render() {
    return (
      <div className="qwert">
        <div className="qwerrt"></div>
        {this.state.active === "management" ? <Management></Management> : null}
        {this.state.active === "marketing" ? <Marketing></Marketing> : null}
        {this.state.active === "mechanical" ? <Mechanical></Mechanical> : null}
        {this.state.active === "electrical" ? <Electrical></Electrical> : null}
        {this.state.active === "tech" ? <Tech></Tech> : null}
      </div>
    );
  }
}

export default TeamCategoryDisplay;
