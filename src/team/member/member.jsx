import React, { Component } from "react";
import "./member.css";

export default function TeamMember(props) {
  return (
    <div className="member">
      <div className="member-image"></div>
      <div className="member-name">{props.name}</div>
      <div className="member-position">{props.position}</div>
    </div>
  );
}
