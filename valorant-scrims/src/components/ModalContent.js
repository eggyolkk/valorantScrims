import React, { Component } from "react";
import './ModalContent.css';
import { Dropdown } from "semantic-ui-react";
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
      agent: 'astra',
      test: '',
      rank: '',
      ironRanks: [
        {
          key: 'Iron 1',
          text: 'IRON I',
          value: 'iron1',
          image: {avatar: true, src: require('../images/iron1.png').default}
        },
        {
          key: 'Iron 2',
          text: 'IRON II',
          value: 'iron2',
          image: {avatar: true, src: require('../images/iron2.png').default}
        },
        {
          key: 'Iron 3',
          text: 'IRON III',
          value: 'iron3',
          image: {avatar: true, src: require('../images/iron3.png').default}
        },
      ],

      bronzeRanks: [
        {
          key: 'Bronze 1',
          text: 'BRONZE I',
          value: 'bronze1',
          image: {avatar: true, src: require('../images/bronze1.png').default}
        },
        {
          key: 'Bronze 2',
          text: 'BRONZE II',
          value: 'bronze2',
          image: {avatar: true, src: require('../images/bronze2.png').default}
        },
        {
          key: 'Bronze 3',
          text: 'BRONZE III',
          value: 'bronze3',
          image: {avatar: true, src: require('../images/bronze3.png').default}
        }
      ],

      silverRanks: [
        {
          key: 'Silver 1',
          text: 'SILVER I',
          value: 'silver1',
          image: {avatar: true, src: require('../images/silver1.png').default}
        },
        {
          key: 'Silver 2',
          text: 'SILVER II',
          value: 'silver2',
          image: {avatar: true, src: require('../images/silver2.png').default}
        },
        {
          key: 'Silver 3',
          text: 'SILVER III',
          value: 'silver3',
          image: {avatar: true, src: require('../images/silver3.png').default}
        }
      ],

      goldRanks: [
        {
          key: 'Gold 1',
          text: 'GOLD I',
          value: 'gold1',
          image: {avatar: true, src: require('../images/gold1.png').default}
        },
        {
          key: 'Gold 2',
          text: 'GOLD II',
          value: 'gold2',
          image: {avatar: true, src: require('../images/gold2.png').default}
        },
        {
          key: 'Gold 3',
          text: 'GOLD III',
          value: 'gold3',
          image: {avatar: true, src: require('../images/gold3.png').default}
        }
      ],

      platinumRanks: [
        {
          key: 'Platinum 1',
          text: 'PLATINUM I',
          value: 'plat1',
          image: {avatar: true, src: require('../images/plat1.png').default}
        },
        {
          key: 'Platinum 2',
          text: 'PLATINUM II',
          value: 'plat2',
          image: {avatar: true, src: require('../images/plat2.png').default}
        },
        {
          key: 'Platinum 3',
          text: 'PLATINUM III',
          value: 'plat3',
          image: {avatar: true, src: require('../images/plat3.png').default}
        }
      ],

      diamondRanks: [
        {
          key: 'Diamond 1',
          text: 'DIAMOND I',
          value: 'diamond1',
          image: {avatar: true, src: require('../images/diamond1.png').default}
        },
        {
          key: 'Diamond 2',
          text: 'DIAMOND II',
          value: 'diamond2',
          image: {avatar: true, src: require('../images/diamond2.png').default}
        },
        {
          key: 'Diamond 3',
          text: 'DIAMOND III',
          value: 'diamond3',
          image: {avatar: true, src: require('../images/diamond3.png').default}
        }
      ]
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
    this.props.setPlayerDetails(this.state.playerName, this.state.playerTag, this.state.agent)
  }

  setRank = rank => {
    this.setState({
      rank: rank,
    })
  }

  render() {
    const agent = require(`../images/${this.state.agent}.png`).default;

    return (
      <div className="modalWindow">
        <div id="addPlayerHeader">
          <div id="addPlayerHeaderLeft">
            <h1 id="addPlayerh1">ADD PLAYER</h1>
            {this.props.playerType === 'ATTACKER' ?
              <h2 id="attackerTypeh2">{this.props.playerType}</h2>
             :
              <h2 id="defenderTypeh2">{this.props.playerType}</h2>
            }
          </div>

          <div id="addPlayerHeaderRight">
            <input
              id="playerNameInput"
              type='text'
              onChange={this.onChangePlayerName}
              placeholder="PLAYER USERNAME"
            ></input>

            <input
              id="playerTagInput"
              type='text'
              onChange={this.onChangePlayerTag}
              placeholder="PLAYER TAG"
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

        <div id="chooseRankContainer">
          <div id="chooseRankLeft">
              {this.state.rank !== '' ? (
                  <img className="rankImg" src={require(`../images/${this.state.rank}.png`).default} alt='Player Rank'/>
              ) : <img className="rankImg" src={require(`../images/iron1.png`).default} alt='Player Rank'/>
            }
          </div>

          <div id="chooseRankRight">
            <div className="rankColumn">
              <img src={require(`../images/iron1.png`).default} alt="Iron" className="rankPreview" onClick={(e) => this.setRank('iron1')}/>
              <Dropdown
                  text='IRON'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.ironRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <img src={require(`../images/bronze1.png`).default} alt="Bronze" className="rankPreview" onClick={(e) => this.setRank('bronze1')}/>
              <Dropdown
                  text='BRONZE'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.bronzeRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="rankColumn">
              <img src={require(`../images/silver1.png`).default} alt="Silver" className="rankPreview" onClick={(e) => this.setRank('silver1')}/>
              <Dropdown
                  text='SILVER'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.silverRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <img src={require(`../images/gold1.png`).default} alt="Gold" className="rankPreview" onClick={(e) => this.setRank('gold1')}/>
              <Dropdown
                  text='GOLD'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.goldRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="rankColumn">
              <img src={require(`../images/plat1.png`).default} alt="Platinum" className="rankPreview" onClick={(e) => this.setRank('plat1')}/>
              <Dropdown
                  text='PLATINUM'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.platinumRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <img src={require(`../images/diamond1.png`).default} alt="Diamond" className="rankPreview" onClick={(e) => this.setRank('diamond1')}/>
              <Dropdown
                  text='DIAMOND'
                  floating
                  labeled
                  button
                  className="rankDropdown"
                >
                <Dropdown.Menu>
                  {this.state.diamondRanks.map((option) => (
                    <Dropdown.Item key={option.value} {...option} onClick={(e) => this.setRank(option.value)}/>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="rankColumn">
              <img src={require(`../images/immortal.png`).default} alt="Immortal" className="rankPreview" onClick={(e) => this.setRank('immortal')}/>
              <h4 onClick={(e) => this.setRank('immortal')}>IMMORTAL</h4>

              <img src={require(`../images/radiant.png`).default} id="radiantRank" alt="Radiant" className="rankPreview" onClick={(e) => this.setRank('radiant')}/>
              <h4 onClick={(e) => this.setRank('radiant')}>RADIANT</h4>
            </div>
          </div>
        </div>

        <div id="buttonDiv">
          <button id="closeModalButton" onClick={this.submit}>ADD PLAYER</button>
        </div>
      </div>
    )
  }
}

export default ModalContent
