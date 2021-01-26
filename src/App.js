import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Blogs from "./blogs/blogs";
import Sponsors from "./sponsors/sponsors";
import Team from "./team/team";
import Contact from "./contact/contact";
import Cars from "./cars/cars";
import About from "./about/about";

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
      </HashRouter>
    </div>
  );
}

export default App;
