import React from "react";
import "./footer.css";
import Stripped from "../../assets/stripped_back3.png";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Location from "../../assets/location.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Insta from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-links">
          <div>Sponsorship Brochure</div>
          <div>IIT Roorkee wesite</div>
          <div>About Formula SAE</div>
          <div>Website Information</div>
        </div>
        <div className="footer-left-follow">
          Follow us on
          <div className="footer-left-handles">
            <img style={{ padding: "0 15px 0 0 " }} src={Facebook}></img>
            <img style={{ padding: "0 15px" }} src={Linkedin}></img>
            <img style={{ padding: "0 15px" }} src={Insta}></img>
            <img style={{ padding: "0 15px" }} src={Twitter}></img>
            <img style={{ padding: "0 15px" }} src={Youtube}></img>
          </div>
          © Copyright 2018 | Team IIT Roorkee Motorsports | All Rights Reserved
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-heading">CONTACT US</div>
        <div
          className="footer-stripped"
          style={{ opacity: "0.3", position: "absolute", zIndex: "0" }}
        >
          <img src={Stripped}></img>
        </div>
        <div className="footer-details">
          <div className="footer-details-line"></div>
          <div className="footer-details-contacts">
            <div className="footer-details-contacts-contact">
              <span>
                <img src={Mail} style={{ padding: " 0px 20px" }}></img>
              </span>
              <div>iitrms@iitr.ac.in</div>
            </div>
            <div className="footer-details-contacts-contact">
              <span>
                <img src={Phone} style={{ padding: " 0px 20px" }}></img>
              </span>
              <div>+91 73022 02065 / +91 99203 38488</div>
            </div>
            <div className="footer-details-contacts-contact">
              <span>
                <img src={Location} style={{ padding: " 0px 20px" }}></img>
              </span>
              <div>
                Mechanical & Industrial Engineering Department, IIT Roorkee,
                Uttarakhand, India. Pin: 247667
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
