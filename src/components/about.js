import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
      <div>
        <img src={require('../me.jpg')} />

        <p>My name is Aly</p>
        <p>I graduated with a degree in I.T</p>
        <p>I grew up in Egypt</p>
        <p>I <span>&hearts;</span>	React</p>
      </div>
    )
  }
}
