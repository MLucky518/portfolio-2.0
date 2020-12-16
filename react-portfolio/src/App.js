import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import MyInfo from "./components/MyInfo";
import { aboutInfo, unityInfo } from "./components/util";

import { VFXProvider } from "react-vfx";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <VFXProvider>
      <Router>
        <Switch>
          <div className="App">
            <Navbar />
            <div className="top-content ">
              <Route exact path="/">
                <MyInfo />
                <About info={aboutInfo} header={"Hello World,"} />
              </Route>
              <Route exact path="/myGithub">
                <GithubInfo />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>

              <Route exact path="/mySkills">
                <Skills />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </VFXProvider>
  );
}

export default App;
