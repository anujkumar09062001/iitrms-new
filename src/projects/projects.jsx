import React, { Component, useImperativeHandle } from "react";
import "./project.css";
import Navbar from "../components/navbar/navbar";
import ProjectDetailText from "./projectDetailText.json";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeindex: 0,
    };
  }

  render() {
    return (
      <div className="project">
        <Navbar></Navbar>

        <div className="project-categories">
          <div className="project-categories-featured">Featured</div>
          <div className="project-categories-allprojects">
            All Projects
            <div className="project-categories-allprojects-line"></div>
          </div>
        </div>
        {ProjectDetailText.map((allinfo) => {
          // console.log(this.props.image);
          if (allinfo.id === this.props.projectid) {
            // var A = this.props.image;
            return (
              <div className="project-information">
                <div
                  className="project-information-image"
                  style={{ backgroundImage: `url(${this.props.image})` }}
                ></div>
                <div className="project-text">
                  <div className="project-information-text-heading">
                    {allinfo.heading}
                  </div>
                  <div className="project-information-text-info">
                    {allinfo.text}
                  </div>
                  <div className="project-information-text-viewspecs">
                    view specs
                    <div className="project-information-text-viewspecs-line"></div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Project;
