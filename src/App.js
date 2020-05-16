import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./homepage/homepage";
import Team from "./team/team";
import Partners from "./partners/partners";
import Back3 from "./assets/slider3.jpg";
import FooterRms from "./components/footer/footer";
import ProjectDisplay from "./projects/projectDisplay";
import Electrical from "./team/electrical";
import Management from "./team/management";
import Mechanical from "./team/mechanical";
import Marketing from "./team/marketing";
import TechMarketing from "./team/technical";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import TeamCategoryDisplay from "./team/teamcategorydisplay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/project/:id" component={ProjectDisplay} />
        <Route exact path="/team" component={Team} />
        <Route path="/partners" component={Partners} />
        <Route path="/team/:teamid" component={TeamCategoryDisplay} />
      </BrowserRouter>
      <FooterRms />
    </div>
  );
}

export default App;
