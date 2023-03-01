import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custom from "./Components/Custom";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";
import './style/link.css'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/custom" component={Custom}/>
          <Route exact path="/:firstpath?/:secondpath?" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
