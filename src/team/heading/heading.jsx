import React, { Component } from "react";
import "./heading.css";

export default function TeamHeading(props) {
  return (
    <div className="teamheading">
      <div className="teamheading-text">{props.text}</div>
      <div className="teamheading-line"></div>
    </div>
  );
}
