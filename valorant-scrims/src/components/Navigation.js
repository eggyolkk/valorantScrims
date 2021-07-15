import React, { Component } from "react";
import './Navigation.css';
import logo from '../images/valorant-logo.png'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <img id="logo" src={logo} alt="Valorant Logo"/>
        <h1 className="navOption">Overview</h1>
        <h1 className="navOption">Add Match</h1>
        <h1 className="navOption">Stats</h1>
      </div>
    )
  }
}

export default Navigation;
