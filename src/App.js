import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/Landing_Page/LandingPage";
import DocumentTitle from "react-document-title";
import MySkills from "./components/Skills/MySkills";
import NavButton from "./components/Navigation/NavButton";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  //const location = useLocation();

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
        <AnimatePresence exitBeforeEnter>
          <Switch /*location={location} key={location.pathname}*/>
            <Route path="/" exact component={LandingPage} />
            <Route path="/skills" exact component={MySkills} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
