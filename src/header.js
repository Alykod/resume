import React, { Component } from 'react'
import './App.css'
import './index.css'
import * as Ic from 'react-icons/di'

export default class header extends Component {
  render() {
    return (
      <div>
         <Ic.DiReact className='magicReact'/>
         <Ic.DiJsBadge className='magicES6'/>
        <ul>
            <li className="">
            <a onClick={()=>this.props.clicked('bg')} >
            Background
            </a>
            </li>
            <li onClick={()=>this.props.clicked('about')}>
            <a href="#">
               Who Am I ? 
               </a>
            </li>
          </ul>
      </div>
    )
  }
}
