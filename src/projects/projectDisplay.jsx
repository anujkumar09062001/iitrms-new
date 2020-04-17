import React, { Component } from "react";
import Project from "./projects";
import ProjectA from "../assets/proj7.jpg";
import ProjectB from "../assets/slider3.jpg";
import ProjectC from "../assets/proj6.jpg";
import ProjectD from "../assets/proj4.jpg";

class ProjectDisplay extends Component {
  state = {
    projectImages: [
      {
        id: "0",
        image: ProjectA,
      },
      {
        id: "1",
        image: ProjectB,
      },
      {
        id: "2",
        image: ProjectC,
      },
      {
        id: "3",
        image: ProjectD,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.projectImages.map((imagesObj) => {
          // console.log(this.props.match.params.id);
          if (imagesObj.id === this.props.match.params.id) {
            return (
              <div>
                <Project
                  projectid={this.props.match.params.id}
                  image={imagesObj.image}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ProjectDisplay;
