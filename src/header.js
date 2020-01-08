import React, { Component } from "react";
import "./App.css";
import "./index.css";
import * as Ic from "react-icons/di";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
        <div>
          <Ic.DiReact className="magicReact" />
          <Ic.DiJsBadge className="magicES6" />
          <ul>
            <li className="">
              <Link to="/">Background</Link>
            </li>
            <li className="">
              <Link to="/work">Work</Link>
            </li>
            <li className="underline--magical">
            <Link to="/about">About</Link>
            </li>
          </ul>
          {/* 
        <div className="magic">

        </div> */}
        </div>
    );
  }
}
