import React, { Component } from "react";
import "./drop1.css";

class Drop1 extends Component {
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
            FORMULA GREEN - 2020
          </div>
          <div>1st in Acceleration Event</div>
          <div>2nd in Acceleration Event</div>
          <div>1st in Cost Presentation</div>
          <div>3rd in Overall Competition</div>
          <div>3rd in Engineering Design Event</div>
        </div>
        <div
          className="achievements-all"
          style={{ textAlign: "left",display: this.state.open2 ? "block" : "none" }}
        >
            <div>
              Maximum power system voltage: <span className="tech-numbers">537.6V</span> <br/>
              Battery Box Energy: <span className="tech-numbers">7.1kWh</span> <br/>
              Peak motor power: <span className="tech-numbers">100kW</span> <br/>
              Peak motor torque: <span className="tech-numbers">230 Nm</span><br/>
              Maximum speed: <span className="tech-numbers">140kmph</span> <br/>
              Accelerates 0-100 kmph in <span className="tech-numbers">3.8s</span> <br/>
              Decelerates 72-0 kmph in <span className="tech-numbers">0.9s</span> <br/>
              Weight (without driver): <span className="tech-numbers">270 kg</span><br/>
              Minimum Turning Radius: <span className="tech-numbers">2.8m</span> <br/>
              In house developed Battery Management System, which can manage up
              to 16 cells and supports Passive Cell Balancing <br/>
              State of the art Data Acquisition system, from which the data acquired can be
              logged online through Wi-Fi <br/>
              Water-propelled cooling system for motor and motor controller <br/>
              Air-cooled battery box <br/>
              Bodyworks: Glass Fibre Reinforced Plastic <br/>
              Light and ergonomic carbon fibre steering wheel
            </div>
          <div className="technical-col"></div>
        </div>
        {/* onClick={this.HandleOpen} */}
      </div>
    );
  }
}

export default Drop1;
