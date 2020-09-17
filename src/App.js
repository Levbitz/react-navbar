import React from "react";

import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
