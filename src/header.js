import React, { Component } from "react";
import "./App.css";
import "./index.css";
import * as Ic from "react-icons/di";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export default class header extends Component {
  render() {
    console.log("rerendered")
    return (
      <div>
        <Ic.DiReact className="magicReact" />
        <Ic.DiJsBadge className="magicES6" />
        <ul>
          <li className="">
            <NavLink to="/background" activeClassName="activeLink">Background</NavLink>
          </li>
          <li className="underline--magical">
            <NavLink to="/about" activeClassName="activeLink"> Who Am I ? </NavLink>
          </li>
        </ul>
        {/* <div className="magic"></div> */}
      </div>
    );
  }
}
