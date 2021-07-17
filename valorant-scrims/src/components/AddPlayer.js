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
      playerName: '',
      playerTag: '',
      currentPlayerNum: 0,
      attackerPlayer1: []
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


  handleShowAttacker = e => {
    this.setState({
      showModal: true,
      currentPlayerNum: e.target.getAttribute('mycustomattribute'), //trying to get the number of the player card to be set to "currentPlayerNum"
      modalPlayerType: 'ATTACKER'
    })
  }

  handleCloseAttacker = () => {
    this.setState({
      showModal: false
    })
  }

  setPlayerDetails = (name, tag) => {
    this.setState({
      playerName: name,
      playerTag: tag
    })
  }

  render() {
    const show = this.state.showModal
    const playerType = this.state.modalPlayerType
    const card = this.state.attackerPlayerCard
    const aplayerCard = require(`../images/${card}`).default;

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
            <div id="attackerPlayer1" onClick={this.handleShowAttacker} mycustomattribute={1}><img className="playerCard" src={attackerPlayerCard} alt='Player Card' />
            <h1 id="player1Details">{this.state.playerName}{this.state.currentPlayerNum} </h1>
            </div>

            <div id="attackerPlayer2"><img className="playerCard" src={aplayerCard} alt='Player Card' />
            <h1 id="player1Details">{this.state.playerName}</h1>
            </div>

            <div id="attackerPlayer3"><img className="playerCard" src={attackerPlayerCard} alt='Player Card' /></div>
            <div id="attackerPlayer4"><img className="playerCard" src={attackerPlayerCard} alt='Player Card' /></div>
            <div id="attackerPlayer5"><img className="playerCard" src={attackerPlayerCard} alt='Player Card' /></div>
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
            <div id="defenderPlayer1"><img className="playerCard" src={defenderPlayerCard} alt='Player Card' /></div>
            <div id="defenderPlayer2"><img className="playerCard" src={defenderPlayerCard} alt='Player Card' /></div>
            <div id="defenderPlayer3"><img className="playerCard" src={defenderPlayerCard} alt='Player Card' /></div>
            <div id="defenderPlayer4"><img className="playerCard" src={defenderPlayerCard} alt='Player Card' /></div>
            <div id="defenderPlayer5"><img className="playerCard" src={defenderPlayerCard} alt='Player Card' /></div>
          </div>
        </div>

        <div id="overlay">
            <Modal isOpen={show} className="modal"  style={{ overlay: { background: 'rgba(0, 0, 0, 0.7)' } }}  ariaHideApp={false}>
              <ModalContent playerType={playerType} handleClose={this.handleCloseAttacker} setPlayerDetails={this.setPlayerDetails}/>

            </Modal>
        </div>
      </div>
    )
  }
}

export default AddPlayer;
