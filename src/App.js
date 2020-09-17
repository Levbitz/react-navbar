import React from "react";

import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/our-prices" component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
