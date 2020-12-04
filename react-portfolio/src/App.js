import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import MyInfo from "./components/MyInfo";
import { aboutInfo, gitInfo, unityInfo } from "./components/util";
import Contact from "./components/Contact";
import { VFXProvider } from "react-vfx";

function App() {
  return (
    <VFXProvider>
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
                <GithubInfo />
              </Route>
              <Route exact path="/Unity">
                <About info={unityInfo} header={"Passion for creation"} />
              </Route>

              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/mySkills">
                <Skills />
              </Route>
            </Switch>
          </div>
          <div className="content">
            <Switch>
              
            </Switch>
          </div>
        </div>
      </Router>
    </VFXProvider>
  );
}

export default App;
