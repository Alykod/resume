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
            <a href="#background">
            Background
            </a>
            </li>
            <li className="\">
            <a href="#">
               Work 
               </a>
            </li>
            <li className='underline--magical'>
                <a href='#'>
                Test
                </a>
            </li>
            <h2>
            <a href = '#'>
            Projects

            </a>
            

            </h2>
        </ul>
{/* 
        <div className="magic">

        </div> */}
      </div>
    )
  }
}
