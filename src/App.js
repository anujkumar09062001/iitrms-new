import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./homepage/homepage";
import Back3 from "./assets/slider3.jpg";
import FooterRms from "./components/footer/footer";
import ProjectDisplay from "./projects/projectDisplay";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage}/>
        <Route path="/project/:id" component={ProjectDisplay}/> 
      </BrowserRouter>
      <FooterRms/> 
      {/* <Project projectid="0" source={Back3}></Project> */}
    </div>
  );
}

export default App;
