import React, { Component } from "react";
import "./blogs.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="blogs">
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    );
  }
}

export default Blogs;
