import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Head from './header'
import About from './components/about'
import Background from './components/background'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div className="App">
              <Head/>
              <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
              <Background/>
        {/* <header className="App-header">
          <h1>test</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
      </div>
    );
  }
}




export default App;
