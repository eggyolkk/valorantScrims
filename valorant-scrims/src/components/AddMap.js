import React, { Component } from "react";
import './AddMap.css';
import ascent from '../images/ascent.png'
import bind from '../images/bind.png'
import split from '../images/split.png'
import haven from '../images/haven.png'
import icebox from '../images/icebox.png'
import breeze from '../images/breeze.png'


class AddMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: ''
    }
  }

  selectMap = e => {
    this.setState({
      map: e.target.getAttribute('value'),
    })
  }

  render() {
    return (
      <div id="addMapContainer">
        <h1 id="playerh1">MAP DETAILS</h1>

        <img src={ascent} alt='Ascent' id="selectedMap"/>

        <div id="topRowMaps">
          <img src={ascent} alt='Ascent' className="mapPreview" onClick={this.selectMap} value='ascent' />
          <img src={bind} alt='Bind' className="mapPreview" onClick={this.selectMap} value='bind'/>
          <img src={haven} alt='Haven' className="mapPreview" onClick={this.selectMap} value='haven'/>
          <img src={split} alt='Split' className="mapPreview" onClick={this.selectMap} value='split'/>
          <img src={icebox} alt='Icebox' className="mapPreview" onClick={this.selectMap} value='icebox'/>
          <img src={breeze} alt='Breeze' className="mapPreview" onClick={this.selectMap} value='breeze'/>
        </div>

        <div id="bottomRowMaps">
        </div>

        <div id="buttonOutline">
          <div>
            <button id="addMatchButton">ADD MATCH</button>
          </div>

        </div>

      </div>
    )
  }
}

export default AddMap
