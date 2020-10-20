import React, { Component } from "react";
import "./sponsors.css";
import Navbar from "../components/navbar/navbar";
import IITR from "../assets/iitrlogo.png";
import Melasta from "../assets/melasta.png";
import CFT from "../assets/cft.png";
import Goodluck from "../assets/goodluck.png";
import Jlcpcb from "../assets/jlcpcb.png";
import Pcb from "../assets/pcb.png";
import Coroplast from "../assets/coroplast.png";
import App from "../assets/app.png";
import Bqf from "../assets/bqf.png";
import Gigavac from "../assets/gigavac.png";
import Simscale from "../assets/simscale.png";
import Wilwood from "../assets/wilwood.png";
import Gri from "../assets/gripump.svg";
import Ipg from "../assets/ipg.png";
import Solidworks from "../assets/solidworks.svg";
import Footer from "../components/footer/footer";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sponsors">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">OUR PROUD SPONSORS</div>
          <div className="blogs-heading2">
            Companies that have helped us fuel our drive
          </div>
        </div>
        <div className="sponsors-current">
          <div className="sponsors-title">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#A4CC3C" }}>TITLE&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-title-all">
              <div className="sponsors-title-all-indiv"></div>
              <div className="sponsors-title-all-indiv"></div>
              <div className="sponsors-title-all-indiv"></div>
            </div>
          </div>
          <div className="sponsors-gold">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#ECC539" }}>GOLD&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-gold-all">
              <div className="sponsors-gold-all-indiv"></div>
              <div className="sponsors-gold-all-indiv"></div>
              <div className="sponsors-gold-all-indiv"></div>
              <div className="sponsors-gold-all-indiv"></div>
            </div>
          </div>
          <div className="sponsors-silver">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#9F9F9F" }}>SILVER&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-silver-all">
              <div className="sponsors-silver-all-indiv"></div>
              <div className="sponsors-silver-all-indiv"></div>
              <div className="sponsors-silver-all-indiv"></div>
              <div className="sponsors-silver-all-indiv"></div>
            </div>
          </div>
          <div className="sponsors-bronze">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#B97B42" }}>BRONZE&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-bronze-all">
              <div className="sponsors-bronze-all-indiv"></div>
              <div className="sponsors-bronze-all-indiv"></div>
              <div className="sponsors-bronze-all-indiv"></div>
              <div className="sponsors-bronze-all-indiv"></div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #58585C", borderRadius: "50%" }}
          ></div>
          <div className="sponsors-support">
            <div className="sponsors-support-wishtosupport">
              Wish to support us?
            </div>
            <div className="sponsors-support-brochure">
              Read our sponsordship brochure
            </div>
            <div className="sponsors-support-contact">Contact Us</div>
          </div>
          <div
            style={{ border: "1px solid #58585C", borderRadius: "50%" }}
          ></div>
        </div>
        <div className="sponsors-former">
          <div className="sponsors-indiv-heading">FORMER SPONSORS</div>
          <div className="sponsors-former-all">
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IITR} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Melasta} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CFT} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Goodluck} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Jlcpcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Pcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Coroplast} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={App} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Bqf} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gigavac} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Simscale} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Wilwood} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gri} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Ipg} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Solidworks} className="homepage-partners-partner"></img>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100vw", height: "40px", backgroundColor: "#9D9FA8" }}
        ></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Sponsors;
