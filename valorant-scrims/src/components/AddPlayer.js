import React, { Component } from "react";
import './AddPlayer.css';
import Modal from 'react-modal'
import ModalContent from './ModalContent'
import attackerPlayerCard from '../images/attackerPlayerCard.JPG'
import defenderPlayerCard from '../images/defenderPlayerCard.JPG'

class AddPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attackersRoundsWon: 0,
      defendersRoundsWon: 0,
      showModal: false,
      modalPlayerType: '',
      attackerPlayerCard: 'attackerPlayerCard.JPG',
      players: [],
      existingPlayers: [],
      currentPlayerNum: 0
    }
  }

  updateAttackersRoundsWon = e => {
    this.setState({
      attackersRoundsWon: e.target.value
    })
  }

  updateDefendersRoundsWon = e => {
    this.setState({
      defendersRoundsWon: e.target.value
    })
  }

  handleShow = e => {
    this.setState({
      showModal: true,
      currentPlayerNum: e.target.getAttribute('num'), //trying to get the number of the player card to be set to "currentPlayerNum"
      modalPlayerType: e.target.getAttribute('playertype')
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  setPlayerDetails = (name, tag, agent) => {
    const num = this.state.currentPlayerNum
    const player = `player${num}`
    const playerListCopy = [...this.state.players]
    const existingPlayerListCopy = [...this.state.existingPlayers]

    playerListCopy.push({id: num, name: name, tag: tag, agent: agent})
    existingPlayerListCopy.push(num.toString())

    this.setState({
      attackerPlayerCard: agent + ".png",
      players: playerListCopy,
      existingPlayers: existingPlayerListCopy
    })

    for (var i in playerListCopy){
      if (parseInt(this.state.currentPlayerNum) === parseInt(playerListCopy[i].id)) {
        const currentPlayerListCopy = [{id: playerListCopy[i].id, name: playerListCopy[i].name, tag: playerListCopy[i].tag, agent: playerListCopy[i].agent}]
        this.setState({
          [player]: currentPlayerListCopy
        })
      }
    }
  }

  render() {
    const show = this.state.showModal //true or false boolean
    const playerType = this.state.modalPlayerType //'attacker' or 'defender' player (shows up in modal window)

    return (
      <div className="addPlayerContainer">
        <h1 id="playerh1">PLAYER DETAILS</h1>

        <div id="attackersContainer">
              <h2 id="attackersh2">ATTACKERS</h2>
              <h3 id="attackersh3">ROUNDS WON</h3>
              <input
                  id='attackersRoundsWonInput'
                  type='number'
                  onChange={this.updateAttaackersRoundsWon}
                  placeholder='e.g. 13'
              >
              </input>

            <div id="attackersCards">
              <div id="attackerPlayer1">
              {this.state.existingPlayers.includes('1') ? (
                this.state.player1.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={1} playertype={'ATTACKER'}/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={attackerPlayerCard} alt='Player Card' num={1} playertype={'ATTACKER'}/>}
            </div>

            <div id="attackerPlayer2">
              {this.state.existingPlayers.includes('2') ? (
                this.state.player2.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={2} playertype={'ATTACKER'}/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={attackerPlayerCard} alt='Player Card' num={2} playertype={'ATTACKER'}/>}
            </div>

            <div id="attackerPlayer3">{this.state.existingPlayers.includes('3') ? (
              this.state.player3.map((player, key) => {
                return <div>
                  <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={3} playertype={'ATTACKER'}/>
                    <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                </div>
              })
            ) : <img className="playerCard" onClick={this.handleShow} src={attackerPlayerCard} alt='Player Card' num={3} playertype={'ATTACKER'}/>}
            </div>

            <div id="attackerPlayer4">{this.state.existingPlayers.includes('4') ? (
              this.state.player4.map((player, key) => {
                return <div>
                  <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={4} playertype={'ATTACKER'}/>
                    <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                </div>
              })
            ) : <img className="playerCard" onClick={this.handleShow} src={attackerPlayerCard} alt='Player Card' num={4} playertype={'ATTACKER'}/>}
          </div>

            <div id="attackerPlayer5">
              {this.state.existingPlayers.includes('5') ? (
                this.state.player5.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={5} playertype={'ATTACKER'}/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={attackerPlayerCard} alt='Player Card' num={5} playertype={'ATTACKER'}/>}
          </div>
        </div>

        <div id="defendersContainer">
            <h2 id="defendersh2">DEFENDERS</h2>
            <h3 id="defendersh3">ROUNDS WON</h3>
              <input
                  id='defendersRoundsWonInput'
                  type='number'
                  onChange={this.updateDefendersRoundsWon}
                  placeholder='e.g. 13'
              >
              </input>

          <div id="defendersCards">
            <div id="defenderPlayer1">
              {this.state.existingPlayers.includes('6') ? (
                this.state.player6.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={6} playertype='DEFENDER'/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={defenderPlayerCard} alt='Player Card' num={6} playertype='DEFENDER'/>}
            </div>

            <div id="defenderPlayer2">
              {this.state.existingPlayers.includes('7') ? (
              this.state.player7.map((player, key) => {
                return <div>
                  <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={7} playertype='DEFENDER'/>
                    <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                </div>
              })
            ) : <img className="playerCard" onClick={this.handleShow} src={defenderPlayerCard} alt='Player Card' num={7} playertype='DEFENDER'/>}
          </div>

            <div id="defenderPlayer3">
              {this.state.existingPlayers.includes('8') ? (
                this.state.player8.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={8} playertype='DEFENDER'/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={defenderPlayerCard} alt='Player Card' num={8} playertype='DEFENDER'/>}
            </div>

            <div id="defenderPlayer4">
              {this.state.existingPlayers.includes('9') ? (
                this.state.player9.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={9} playertype='DEFENDER'/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={defenderPlayerCard} alt='Player Card' num={9} playertype='DEFENDER'/>}
            </div>

            <div id="defenderPlayer5">
              {this.state.existingPlayers.includes('10') ? (
                this.state.player10.map((player, key) => {
                  return <div>
                    <img className="playerCard" onClick={this.handleShow} src={require(`../images/${player.agent}banner.jpg`).default} alt='Player Card' num={10} playertype='DEFENDER'/>
                      <h1 className="playerDetails" key={player.id}>{player.name} #{player.tag}</h1>
                  </div>
                })
              ) : <img className="playerCard" onClick={this.handleShow} src={defenderPlayerCard} alt='Player Card' num={10} playertype='DEFENDER'/>}
            </div>
          </div>
        </div>

        <div id="overlay">
            <Modal isOpen={show} className="modal"  style={{ overlay: { background: 'rgba(0, 0, 0, 0.7)' } }}  ariaHideApp={false}>
              <ModalContent playerType={playerType} handleClose={this.handleClose} setPlayerDetails={this.setPlayerDetails}/>

            </Modal>
        </div>
      </div>
    </div>
    )
  }
}

export default AddPlayer;
