import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./homepage/homepage";
import Team from "./team/team";
import Partners from "./partners/partners";
import Back3 from "./assets/slider3.jpg";
import FooterRms from "./components/footer/footer";
import ProjectDisplay from "./projects/projectDisplay";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/project/:id" component={ProjectDisplay} />
        <Route path="/team" component={Team} />
        <Route path="/partners" component={Partners} />
      </BrowserRouter>
      <FooterRms />
    </div>
  );
}

export default App;
