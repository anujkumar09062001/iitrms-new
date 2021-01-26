import React, { Component } from "react";

class Drop4 extends Component {
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
            FORMULA STUDENT UK 2013
          </div>
          <div>The only hybrid car in FS UK 2013</div>
          <div>Winner IMechE Formula Student award of 2500 GBP</div>
          <div>1st in Cost and Business Presentation among Indian Teams</div>
          <div>2nd overall as well as design among Indian Teams</div>
        </div>
        <div
          className="achievements-all"
          style={{
            textAlign: "left",
            display: this.state.open2 ? "block" : "none",
          }}
        >
          <div>
            Wheelbase: <span className="tech-numbers">1550mm</span> <br />
            Track Width: Front- <span className="tech-numbers">1325mm</span>;
            Rear- <span className="tech-numbers">1275mm</span> <br />
            Weight (without driver):{" "}
            <span className="tech-numbers">300 kg</span>
            <br />
            Weight Distribution: ( Front :Rear){" "}
            <span className="tech-numbers">52:48</span> <br />
            Battery Specs:{" "}
            <span className="tech-numbers">
              72V, 48Ah battery with chassis nominal power around 8kW
            </span>
            <br />
            Engine Type:{" "}
            <span className="tech-numbers">
              Bajaj Discover 125 cc Carburetor engine
            </span>{" "}
            <br />
            Compression Ratio: <span className="tech-numbers">9.8:1</span>{" "}
            <br />
            Peak Engine RPM: <span className="tech-numbers">8000</span> <br />
            Motor: <span className="tech-numbers">
              Motenergy ME0913 BLDC
            </span>{" "}
            <br />
            Motor Power:{" "}
            <span className="tech-numbers">
              12kW continuous, 30kW peak
            </span>{" "}
            <br />
            Frame/Chassis:{" "}
            <span className="tech-numbers">
              AISI 1020 TIG-welded tubular frame
            </span>{" "}
            <br />
          </div>
          <div className="technical-col"></div>
        </div>
        {/* onClick={this.HandleOpen} */}
      </div>
    );
  }
}

export default Drop4;
