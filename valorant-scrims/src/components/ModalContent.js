import React, { Component } from "react";
import './ModalContent.css';
import astra from '../images/astra.png'
import breach from '../images/breach.png'
import brimstone from '../images/brimstone.png'
import cypher from '../images/cypher.png'
import jett from '../images/jett.png'
import kayo from '../images/kayo.png'
import killjoy from '../images/killjoy.png'
import omen from '../images/omen.png'
import phoenix from '../images/phoenix.png'
import raze from '../images/raze.png'
import reyna from '../images/reyna.png'
import sage from '../images/sage.png'
import skye from '../images/skye.png'
import sova from '../images/sova.png'
import viper from '../images/viper.png'
import yoru from '../images/yoru.png'


class ModalContent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerName: '',
      playerTag: '',
      agent: 'astra'
    }
  }

  onChangePlayerName = e => {
    this.setState({
      playerName: e.target.value
    })
  }

  onChangePlayerTag = e => {
    this.setState({
      playerTag: e.target.value
    })
  }

  selectAgent = e => {
    this.setState({
      agent: e.target.getAttribute('value'),
    })
  }

  submit = () => {
    this.props.handleClose()
    this.props.setPlayerDetails(this.state.playerName, this.state.playerTag)
  }

  render() {
    const agent = require(`../images/${this.state.agent}.png`).default;

    return (
      <React.Fragment>
        <div id="addPlayerHeader">
          <div id="addPlayerHeaderLeft">
            <h1 id="addPlayerh1">ADD PLAYER</h1>
            <h2 id="playerTypeh2">{this.props.playerType}</h2>
          </div>

          <div id="addPlayerHeaderRight">
            <input
              id="playerNameInput"
              type='text'
              onChange={this.onChangePlayerName}
              placeholder="PLAYER'S USERNAME"
            ></input>

            <input
              id="playerTagInput"
              type='text'
              onChange={this.onChangePlayerTag}
              placeholder="PLAYER'S TAG"
            ></input>
          </div>
        </div>

        <div id="chooseAgentContainer">
          <div id="chooseAgentLeft">
            <img src={agent} alt={agent} id="selectedAgent"/>
          </div>

          <div id="chooseAgentRight">
            <h2 id="selectAgenth2">SELECT PLAYER AGENT</h2>

            <div id="topRowAgents">
              <img src={astra} alt="Astra" value="astra" onClick={this.selectAgent} className="agentOptions"/>
              <img src={breach} alt="Breach" value="breach" onClick={this.selectAgent} className="agentOptions"/>
              <img src={brimstone} alt="brimstone" value="brimstone" onClick={this.selectAgent} className="agentOptions"/>
              <img src={cypher} alt="Cypher" value="cypher" onClick={this.selectAgent} className="agentOptions"/>
              <img src={jett} alt="Jett" value="jett" onClick={this.selectAgent} className="agentOptions"/>
              <img src={kayo} alt="Kayo" value="kayo" onClick={this.selectAgent} className="agentOptions"/>
              <img src={killjoy} alt="Killjoy" value="killjoy" onClick={this.selectAgent} className="agentOptions"/>
              <img src={omen} alt="Omen" value="omen" onClick={this.selectAgent} className="agentOptions"/>
            </div>
            <div id="bottomRowAgents">
            <img src={phoenix} alt="Phoenix" value="phoenix" onClick={this.selectAgent} className="agentOptions"/>
            <img src={raze} alt="Raze" value="raze" onClick={this.selectAgent} className="agentOptions"/>
            <img src={reyna} alt="Reyna" value="reyna" onClick={this.selectAgent} className="agentOptions"/>
            <img src={sage} alt="Sage" value="sage" onClick={this.selectAgent} className="agentOptions"/>
            <img src={skye} alt="Skye" value="skye" onClick={this.selectAgent} className="agentOptions"/>
            <img src={sova} alt="Sova" value="sova" onClick={this.selectAgent} className="agentOptions"/>
            <img src={viper} alt="Viper" value="viper" onClick={this.selectAgent} className="agentOptions"/>
            <img src={yoru} alt="Yoru" value="yoru" onClick={this.selectAgent} className="agentOptions"/>
            </div>
          </div>
        </div>



        <button id="closeModalButton" onClick={this.submit}>ADD PLAYER</button>
      </React.Fragment>
    )
  }
}

export default ModalContent
