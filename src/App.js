import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Blogs from "./blogs/blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/blogs" component={Blogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
