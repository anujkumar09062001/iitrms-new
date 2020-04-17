import React, { Component } from "react";
import "./current.css";
import Melasta from "../../../assets/partners/melasta.svg";
import CFT from "../../../assets/partners/cft.svg";
import Goodluck from "../../../assets/partners/goodluck.svg";
import Jlcpcb from "../../../assets/partners/jlcpcb.png";
import IPG from "../../../assets/partners/ipg.svg";
import Gri from "../../../assets/partners/gri-pump.svg";
import Wilwood from "../../../assets/partners/wilwood.png";
import Simscale from "../../../assets/partners/SimScale_Logo_PNG.png";
import Gigavac from "../../../assets/partners/gigavac.png";
import BQF from "../../../assets/partners/bqf.png";

import APP from "../../../assets/partners/Anderson-Power-Products.png";
import Coroplast from "../../../assets/partners/Coroplast_Logo.png";
import PCB from "../../../assets/partners/pcb_power_logo.png";

class Current extends Component {
  state = {
    gold: [
      {
        image: Melasta,
      },
    ],
  };
  render() {
    return (
      <div className="current">
        <div className="current-gold">
          <div className="current-heading " style={{ color: "#FFB800" }}>
            GOLD
          </div>
          <div className="current-photos" style={{ paddingTop: "100px" }}>
            <img
              src={Melasta}
              className="current-photos-indiv"
              style={{ width: "300px" }}
            ></img>
          </div>
        </div>
        <div className="current-silver">
          <div className="current-heading" style={{ color: "#9d9d9d" }}>
            SILVER
          </div>
          <div className="current-photos">
            <img src={CFT} className="current-photos-indiv"></img>
            <img
              src={Goodluck}
              className="current-photos-indiv-goodluck current-photos-indiv"
            ></img>
          </div>
        </div>
        <div className="current-bronze">
          <div className="current-heading" style={{ color: "#8A4200" }}>
            BRONZE
          </div>
          <div className="current-photos">
            <img
              src={Jlcpcb}
              className="current-photos-indiv current-photos-indiv-jlcpcb"
            ></img>
            <img src={IPG} className="current-photos-indiv"></img>
            <img src={Gri} className="current-photos-indiv"></img>
            <img
              src={Wilwood}
              className="current-photos-indiv current-photos-indiv-wilwood"
            ></img>
            <img
              src={Simscale}
              className="current-photos-indiv current-photos-indiv-simscale"
            ></img>
            <img src={Gigavac} className="current-photos-indiv-gigavac"></img>
            <img
              src={BQF}
              className="current-photos-indiv current-photos-indiv-bqf"
            ></img>
            <img
              src={APP}
              className="current-photos-indiv current-photos-indiv-app"
            ></img>
            <img
              src={Coroplast}
              className="current-photos-indiv current-photos-indiv-coroplast"
            ></img>
            <img src={PCB} className="current-photos-indiv"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Current;
