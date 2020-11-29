import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import MyInfo from "./components/MyInfo";
import { aboutInfo, gitInfo,unityInfo } from "./components/util";
import Contact from "./components/Contact";
import Unity from "./components/Unity";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="top-content">
          <MyInfo />
          <Switch>
            <Route exact path="/">
              <About info={aboutInfo} header={"Hello World,"} />
            </Route>
            <Route exact path="/myGithub">
              <About info={gitInfo} header={"Git er done!"} />
            </Route>
            <Route exact path="/Unity">
              <About info={unityInfo} header={"Passion for creation"} />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/myGithub">
              <GithubInfo />
            </Route>
            <Route exact path="/mySkills">
              <Skills />
            </Route>
            <Route exact path="/Unity">
              <Unity />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
