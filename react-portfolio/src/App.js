import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GithubInfo from "./components/GithubInfo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import { aboutInfo } from "./components/util";
import Footer from "./components/Footer";

const routes = [
    { path: "/", name: "home", Component: Home },
    // { path: "/myGithub", name: "github-info", Component: GithubInfo },
    { path: "/projects", name: "projects", Component: Projects },
    { path: "/mySkills", name: "skills", Component: Skills },
];

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        {({ match }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={1600}
                                classNames="page"
                                unmountOnExit
                            >
                                <Switch>
                                    <div className="top-content">
                                        <Component />
                                        
                                    </div>
                                </Switch>
                            </CSSTransition>
                        )}
                    </Route>
                    
                ))}
                
                <Route exact path = "/about"><About info={aboutInfo} header={"Hello World,"} /></Route>
                {/* <Footer/> */}
            </div>
        </Router>
    );
}

export default App;

// import React from "react";
// import "./App.scss";
// import Navbar from "./components/Navbar";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
// import GithubInfo from "./components/GithubInfo";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Home from "./components/Home";
// import { TransitionGroup } from "semantic-ui-react";

// // TODO!!!!!!!! add routes to map over and make transition groups out of

// const routes = [
//   { path: "/", name: "home", Component: Home },
//   { path: "/myGithub", name: "github-info", Component: GithubInfo },
//   { path: "/projects", name: "projects", Component: Projects },
//   { path: "mySkills", name: "skills", Component: Skills },
// ];

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />

//         <Route
//           render={({ location }) => (
//             <TransitionGroup className="RTG">
//               <CSSTransition

//                 key={location.key}
//                 timeout={600}
//                 className="top-content"
//                 classNames="my-element"

//               >
//                 <div className="top-content">
//                   <Switch location={location}>
//                     <Route exact path="/">
//                       <Home />
//                     </Route>
//                     <Route exact path="/myGithub">
//                       <GithubInfo to="myGithub" />
//                     </Route>
//                     <Route exact path="/projects">
//                       <Projects />
//                     </Route>

//                     <Route exact path="/mySkills">
//                       <Skills />
//                     </Route>
//                     <Redirect from="/" to="/myGithub" />
//                   </Switch>
//                 </div>
//               </CSSTransition>
//             </TransitionGroup>
//           )}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;
