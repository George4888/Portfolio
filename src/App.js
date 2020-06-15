import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/Landing_Page/LandingPage";
import DocumentTitle from "react-document-title";
import MySkills from "./components/Skills/MySkills";
import NavButton from "./components/Navigation/NavButton";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="main">
        <DocumentTitle title="Web Dev Portfolio"></DocumentTitle>
        <div className="navigation">
          <Link to="/">
            <NavButton name="Home" />
          </Link>
          <Link to="/skills">
            <NavButton name="Skills" />
          </Link>
          <Link to="/portfolio">
            <NavButton name="Portfolio" />
          </Link>
          <Link to="/contact">
            <NavButton name="Contact" />
          </Link>
        </div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/skills" exact component={MySkills} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
