import React, { Component } from "react";

class Drop3 extends Component {
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
            FSAE AUSTRALIA 2015
          </div>
          <div>Ranked 4th overall (EV)</div>
          <div>Ranked 2nd in Cost (EV)</div>
          <div>Ranked 4th in Design (EV)</div>
          <div>Ranked 4th in Business Presentation (EV)</div>
          <div>
            The team won the ’CAMS Inspiring Motorsports Award’ from CAMS
            Confederation of Australian Motorsports for Best Design among
            first-year electric teams.
          </div>
          <div>
            IIT Roorkee Motorsports became the highest-ranked Formula Student
            Electric Team in India after this competition till 2019.
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
            Top Speed: <span className="tech-numbers">100kmph</span> <br />
            Acceleration:{" "}
            <span className="tech-numbers">0-60kmph in 7.6 sec</span> <br />
            Range: <span className="tech-numbers">35-40 km</span> <br />
            Type of cells:{" "}
            <span className="tech-numbers">Lithium Yttrium polymer</span>
            <br />
            Battery Specs:{" "}
            <span className="tech-numbers">78.6 V, 8.6 kWh, 90Ah</span> <br />
            Motor Specs: Peak power- <span className="tech-numbers">
              30 kW
            </span>{" "}
            ; Peak Torque-<span className="tech-numbers">90 Nm</span>
            <br />
            Weight: <span className="tech-numbers">240 kg</span> <br />
            Turning radius: <span className="tech-numbers">1.2m</span>
            <br />
            Wheelbase: <span className="tech-numbers">1550 mm</span> <br />
            Frame/Chassis: AISI 1080 TIG-welded tubular frame <br />
          </div>
          <div className="technical-col"></div>
        </div>
        {/* onClick={this.HandleOpen} */}
      </div>
    );
  }
}

export default Drop3;
