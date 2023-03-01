import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custom from "./Components/Custom";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/custom">Custom</Link>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/custom" component={Custom}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
