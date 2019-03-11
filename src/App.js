import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Head from './header'
import Background from './components/background'
class App extends Component {

  render() {
    return (
      <div className="App">
              <Head/>
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
