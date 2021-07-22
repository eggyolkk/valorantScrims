import React, { Component } from "react";
import './AddMatch.css';
import bannerImage from './images/add-match-banner2.jpg'
import Navigation from './components/Navigation'
import AddPlayer from './components/AddPlayer'
import AddMap from './components/AddMap'

class AddMatch extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <img id="bannerImage" src={bannerImage} alt="Valorant Yoru"/>
        <AddPlayer />
        <AddMap />
      </React.Fragment>
    )
  }
}

export default AddMatch;
