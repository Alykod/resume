import React, { Component } from 'react';
import './App.css'
import Head from './header'
import Background from './components/background'
import About from './components/about'

class App extends Component {
  state={
    which: 'bg'
  }
  handleClick = (which) => {
    this.setState({which})
  } 
  render() {
    return (
      <div className="App">
              <Head clicked={this.handleClick}/>
     { this.state.which ==='bg' && <Background/> }
        {this.state.which === 'about' && <About />}
      </div>
    );
  }
}




export default App;
