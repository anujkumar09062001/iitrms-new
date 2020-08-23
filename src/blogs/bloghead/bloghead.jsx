import React from "react";
import "./bloghead.css";

export default function Bloghead(props) {
    return (
      <div className="heading" style={{ width: "fit-content" }}>
        {/* <div style={{ filter: "blur(2px)", width: "inherit", height: "100px", backgroundColor: "white", position: "absolute" }}></div> */}
        <div className="heading-main">
          <div className="heading-green"></div>
          <div className="heading-text">{props.text}</div>
        </div>
      </div>
    );
  }