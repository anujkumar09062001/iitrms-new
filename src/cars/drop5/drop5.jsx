import React, { Component } from "react";

class Drop5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
    };
  }
  HandleOpen1 = () => {
    if (this.props.show == "1") {
      this.setState({ open1: !this.state.open1 });
    } else {
      this.setState({ open2: !this.state.open2 });
    }
  };
  render() {
    return (
      <div className="achievements">
        <div onClick={this.HandleOpen1} className="cars-car-achievement">
          <div className="cars-car-achievement-heading">{this.props.text}</div>
          <div className="cars-car-arrow"></div>
        </div>
        <div
          className="achievements-all"
          style={{ display: this.state.open1 ? "block" : "none" }}
        >
          <div style={{ fontSize: "28px", padding: "20px" }}>
            FSAE AUSTRALIA 2011
          </div>
          <div>1st in Fuel Economy</div>
          <div>1st Indian Team to finish final 32 lap race in Australia</div>
          <div>7th position in Cost Presentation</div>
          <div>
            The car was also exhibited in the design Pavillion of AUTO EXPO
            2012, New Delhi
          </div>
        </div>
        <div
          className="achievements-all"
          style={{
            textAlign: "left",
            display: this.state.open2 ? "block" : "none",
          }}
        >
          <div>
            Wheelbase: <span className="tech-numbers">1700mm</span> <br />
            Track Width: Front- <span className="tech-numbers">1400mm</span>;
            Rear- <span className="tech-numbers">1350mm</span> <br />
            Weight (with driver):{" "}
            <span className="tech-numbers">327 kg</span>
            Engine Used: <span className="tech-numbers">Royal Enfield 500cc Electra Unit Construction Engine</span>
            <br />
            Frame/Chassis: <span className="tech-numbers">AISI 1020 TIG-welded tubular frame</span> <br />
            Tire 20x7-13 R25B Hoosier <br />
            Suspension: Double unequal A-arm, Front Pull Rod and Rear, Push Rod actuated <br />
          </div>
          <div className="technical-col"></div>
        </div>
        {/* onClick={this.HandleOpen} */}
      </div>
    );
  }
}

export default Drop5;
