import React, { Component } from "react";
import "./App.css";
import Head from "./header";
import About from "./components/about";
import Background from "./components/background";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <Switch>
            <Route exact path="/">
              <Background />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
