import React, { Component } from "react";
import "./member.css";
import Email from "../../assets/EMAIL.png";
import Fb from "../../assets/FACEBOOK_TEAM.png";
import Linkedin from "../../assets/LINKEDIN_TEAM.png";

export default function TeamMember(props) {
  return (
    <div className="member">
      <div className="member-image"></div>
      <div className="member-name">{props.name}</div>
      <div className="member-position">{props.position}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="member-contact">
          {props.website ? (
            <a href={props.website}>
              <img
                style={{ width: "50px", padding: "0px 10px" }}
                src={Email}
              ></img>
            </a>
          ) : (
            ""
          )}
          {props.email ? (
            <a href="mailto: {props.email}">
              <img
                style={{ width: "50px", padding: "0px 10px" }}
                src={Email}
              ></img>
            </a>
          ) : (
            ""
          )}
          {props.fb ? (
            <a href={props.fb}>
              <img
                style={{ width: "50px", padding: "0px 10px" }}
                src={Fb}
              ></img>
            </a>
          ) : (
            ""
          )}
          {props.linkedin ? (
            <a href={props.linkedin}>
              <img
                style={{ width: "50px", padding: "0px 10px" }}
                src={Linkedin}
              ></img>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
