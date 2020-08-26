import React, { Component } from "react";
import "./blogs.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Stripped from "../assets/stripped1.png";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names_mech: [
        {
          id: 1,
          text: "POWERTRAIN MACHINING",
          date: "20th January, 2020",
        },
        {
          id: 2,
          text: "POWERTRAIN MACHINING",
          date: "20th January, 2020",
        },
        {
          id: 3,
          text: "AERO MANUFACTURING",
          date: "1st December, 2019",
        },
        {
          id: 4,
          text: "POWERTRAIN MACHINING",
          date: "20th January, 2020",
        },
        {
          id: 5,
          text: "SUSPENSION DESIGN",
          date: "26th July, 2020",
        },
        {
          id: 6,
          text: "DATA AQUISITION",
          date: "20th January, 2020",
        },
        {
          id: 7,
          text: "MOTOR CONTROLLER'19",
          date: "20th January, 2020",
        },
        {
          id: 8,
          text: "BMS DESIGN",
          date: "1st December, 2019",
        },
        {
          id: 9,
          text: "BMS ASSEMBLY",
          date: "20th January, 2020",
        },
        {
          id: 10,
          text: "PCB DESIGN",
          date: "26th July, 2020",
        },
      ],
      names_ele: [
        {
          id: 1,
          text: "DATA AQUISITION",
          date: "20th January, 2020",
        },
        {
          id: 2,
          text: "MOTOR CONTROLLER'19",
          date: "20th January, 2020",
        },
        {
          id: 3,
          text: "BMS DESIGN",
          date: "1st December, 2019",
        },
        {
          id: 4,
          text: "BMS ASSEMBLY",
          date: "20th January, 2020",
        },
        {
          id: 5,
          text: "PCB DESIGN",
          date: "26th July, 2020",
        },
      ],
      active_mech: 1,
      active_ele: 1,
      active_submech: 1,
      active_subele: 1,
    };
  }
  // handleLeftToggle = () => {
  //   //  if()
  // };

  // handleRightToggle = () => {
  //   // var a = this.state.names_mech.length / 5;
  //   // console.log(a);
  //   var a = 3;
  //   var change = this.state.active_mech;
  //   if (this.state.active_mech != a) {
  //     this.setState({
  //       active_mech: change + 1,
  //     });
  //   }
  // };
  render() {
    return (
      <div className="blogs">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">TECHNICAL BLOGS</div>
          <div className="blogs-heading2">
            Articles written by our team members
          </div>
        </div>
        <div className="blogs-mechanical">
          <div className="blogs-mechanical-stripped">
            <img src={Stripped}></img>
          </div>
          <div className="blogs-mechanical-heading">MECHANICAL SYSTEM</div>
          <div>
            {" "}
            <p
              className="blogs-mechanical-intro"
              style={{ paddingBottom: "0px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              faucibus id ultrices lectus eget fames. Ultricies lorem amet
              ullamcorper amet. Nunc vitae nibh id ut viverra non. Nec, interdum
              aliquam maecenas pellentesque tristique sodales. Egestas pulvinar
              ac sodales dui malesuada at nulla viverra. Ut quis ut eget
              sagittis sit id eu semper. Sem facilisi amet, augue integer.
              Rutrum congue urna fringilla orci arcu facilisis. Nulla proin cras
              faucibus gravida velit. Mauris morbi leo, et, tristique adipiscing
              dignissim habitasse lectus nisl. Et aenean id tincidunt vestibulum
              purus.
            </p>
            <p className="blogs-mechanical-intro" style={{ paddingTop: "0px" }}>
              Viverra at mollis fermentum et libero cras. Posuere est urna
              egestas ut libero arcu. Placerat praesent sed bibendum eget etiam
              mauris. Aliquet purus dolor, sed vitae in parturient. A volutpat
              fusce ullamcorper sed nibh etiam turpis accumsan. Dolor commodo
              venenatis, adipiscing quisque sit venenatis.
            </p>
          </div>
          {this.state.names_mech.map((name) => {
            console.log(this.state.active_mech)
            if (name.id < (this.state.active_mech*5)) {
              return (
                <div className="blogs-mechanical-category">
                  <div className="blogs-mechanical-category-line1"></div>
                  <div style={{ display: "flex", width: "800px" }}>
                    <div className="blogs-mechanical-category-name">
                      {name.text}
                    </div>
                    <div className="blogs-mechanical-category-line2"></div>
                    <div className="blogs-mechanical-category-dates">
                      {name.date}
                    </div>
                  </div>
                  <div className="blogs-mechanical-category-more">
                    <div className="blogs-mechanical-category-seemore">
                      See more{" "}
                    </div>{" "}
                    <div className="blogs-mechanical-category-arrow"> </div>{" "}
                  </div>
                </div>
              );
            }
          })}
          <div className="blogs-mechanical-pages">
            <div
              className="blogs-mechanical-pages-toggle"
              // onClick={this.handleLeftToggle(1)}
            >
              Previous
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="blogs-mechanical-pages-number"
                // onClick={this.handleLeftToggle(1)}
              >
                1
              </div>
              <div
                className="blogs-mechanical-pages-number"
                // onClick={this.handleLeftToggle(2)}
              >
                2
              </div>
              <div
                className="blogs-mechanical-pages-number"
                // onClick={this.handleLeftToggle(3)}
              >
                3
              </div>
              <div
                className="blogs-mechanical-pages-number"
                // onClick={this.handleLeftToggle(4)}
              >
                4
              </div>
            </div>
            <div
              className="blogs-mechanical-pages-toggle"
              // onClick={this.handleRightToggle()}
            >
              Next
            </div>
          </div>
        </div>
        <hr style={{ width: "75%", color: "#eee" }}></hr>
        <div className="blogs-mechanical">
          <div className="blogs-mechanical-stripped">
            <img src={Stripped}></img>
          </div>
          <div className="blogs-mechanical-heading">ELECTRICAL SYSTEM</div>
          <div>
            {" "}
            <p
              className="blogs-mechanical-intro"
              style={{ paddingBottom: "0px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              faucibus id ultrices lectus eget fames. Ultricies lorem amet
              ullamcorper amet. Nunc vitae nibh id ut viverra non. Nec, interdum
              aliquam maecenas pellentesque tristique sodales. Egestas pulvinar
              ac sodales dui malesuada at nulla viverra. Ut quis ut eget
              sagittis sit id eu semper. Sem facilisi amet, augue integer.
              Rutrum congue urna fringilla orci arcu facilisis. Nulla proin cras
              faucibus gravida velit. Mauris morbi leo, et, tristique adipiscing
              dignissim habitasse lectus nisl. Et aenean id tincidunt vestibulum
              purus.
            </p>
            <p className="blogs-mechanical-intro" style={{ paddingTop: "0px" }}>
              Viverra at mollis fermentum et libero cras. Posuere est urna
              egestas ut libero arcu. Placerat praesent sed bibendum eget etiam
              mauris. Aliquet purus dolor, sed vitae in parturient. A volutpat
              fusce ullamcorper sed nibh etiam turpis accumsan. Dolor commodo
              venenatis, adipiscing quisque sit venenatis.
            </p>
          </div>
          {this.state.names_ele.map((name) => (
            <div className="blogs-mechanical-category">
              <div className="blogs-mechanical-category-line1"></div>
              <div style={{ display: "flex", width: "800px" }}>
                <div className="blogs-mechanical-category-name">
                  {name.text}
                </div>
                <div className="blogs-mechanical-category-line2"></div>
                <div className="blogs-mechanical-category-dates">
                  {name.date}
                </div>
              </div>
              <div className="blogs-mechanical-category-more">
                <div className="blogs-mechanical-category-seemore">
                  See more{" "}
                </div>{" "}
                <div className="blogs-mechanical-category-arrow"> </div>{" "}
              </div>
            </div>
          ))}
          <div className="blogs-mechanical-pages">
            <div className="blogs-mechanical-pages-toggle">Previous</div>
            <div style={{ display: "flex" }}>
              <div className="blogs-mechanical-pages-number">1</div>
              <div className="blogs-mechanical-pages-number">2</div>
              <div className="blogs-mechanical-pages-number">3</div>
              <div className="blogs-mechanical-pages-number">4</div>
            </div>
            <div className="blogs-mechanical-pages-toggle">Next</div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Blogs;
