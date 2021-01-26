import React, { Component } from "react";

class Drop2 extends Component {
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
            FORMULA GREEN - 2017
          </div>
          <div>The only team at the competition with an air cooling system</div>
          <div>Completed one lap in 2 min 17 sec beating the fastest lap of 2 min 48 sec in a friendly test run</div>
        </div>
        <div
          className="achievements-all"
          style={{ textAlign: "left",display: this.state.open2 ? "block" : "none" }}
        >
            <div>
              Maximum power system voltage: <span className="tech-numbers">91.2V</span> <br/>
              DC Nominal Power-system voltage: <span className="tech-numbers">76.8V</span> <br/>
              DC Control-system voltage: <span className="tech-numbers">12V DC, 24V DC, 5V DC</span> <br/>
              Accumulator configuration: <span className="tech-numbers">24 S1P</span><br/>
              Total Accumulator Capacity: <span className="tech-numbers">90AH</span> <br/>
              Motor type: <span className="tech-numbers">Brushless DC Motor</span> <br/>
              Number of motors: <span className="tech-numbers">1</span> <br/>
              Maximum combined motor power: <span className="tech-numbers">30KW</span><br/>
              Continuous motor power: <span className="tech-numbers">12KW</span> <br/>
              Peak stall torque: <span className="tech-numbers">90Nm</span> <br/>
            </div>
          <div className="technical-col"></div>
        </div>
        {/* onClick={this.HandleOpen} */}
      </div>
    );
  }
}

export default Drop2;
