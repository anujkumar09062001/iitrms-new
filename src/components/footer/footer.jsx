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
        <br></br>
        <br></br>
        <div className="footer-left-links">
          <div>Sponsorship Brochure</div>
          <a href="www.iitr.ac.in">
            <div style={{color: "white"}}>IIT Roorkee website</div>
          </a>
          <div style={{color: "white"}}>About Formula SAE</div>
        </div>
        <div className="footer-left-follow">
          Follow us on
          <div className="footer-left-handles">
            <a href="https://www.facebook.com/iitrms.in/">
              <img style={{ padding: "0 15px 0 0 " }} src={Facebook}></img>
            </a>
            <a href="https://www.linkedin.com/company/iitrms/?originalSubdomain=in">
              <img style={{ padding: "0 15px" }} src={Linkedin}></img>
            </a>
            <a href="https://www.instagram.com/iitroorkeemotorsports/?hl=en">
              <img style={{ padding: "0 15px" }} src={Insta}></img>
            </a>
            <a href="https://twitter.com/iitrms_iitr?lang=en">
              <img style={{ padding: "0 15px" }} src={Twitter}></img>
            </a>
            <a href="https://www.youtube.com/channel/UCX5M-zh5cSpROSOE2ciV1yQ">
              <img style={{ padding: "0 15px" }} src={Youtube}></img>
            </a>
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
                <img src={Mail} style={{ padding: " 0px 20px",}}></img>
              </span>
              <div>iitrms@iitr.ac.in</div>
            </div>
            <div className="footer-details-contacts-contact">
              <span>
                <img src={Phone} style={{ padding: " 10px 20px" }}></img>
              </span>
              <div>Rahesh Hudiya - +91 73022 02065 <br></br>Shivendru Mathur - +91 99203 38488</div>
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
