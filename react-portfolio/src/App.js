import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import MyInfo from "./components/MyInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="top-content">
          <MyInfo />
          
            <About />
          
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/myGithub">
              <GithubInfo />
            </Route>
            <Route exact path="/mySkills">
              <Skills />
            </Route>
          </Switch>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
