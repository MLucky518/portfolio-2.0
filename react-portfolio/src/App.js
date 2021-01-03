import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import About from "./components/About";
import MyInfo from "./components/MyInfo";
import { aboutInfo } from "./components/util";
import Projects from "./components/Projects";

function App() {
  return (
   
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
    
  );
}

export default App;
