import React from "react";
import "./App.css";
import "./Media.css";
import LandingPage from "./components/Landing_Page/LandingPage";
import MySkills from "./components/Skills/MySkills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="main">
      <Navigation />
      <LandingPage />
      <MySkills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
