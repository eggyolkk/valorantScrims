import React, { Component } from "react";
import './AddPlayer.css';

class AddPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      attackersRoundsWon: 0,
      defendersRoundsWon: 0
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

  render() {
    return (
      <div className="addPlayerContainer">
        <h1 id="playerh1">PLAYERS</h1>

        <div id="attackersContainer">
          <div id="attackersLeftSide">
            <h2 id="attackersh2">ATTACKERS</h2>
            <h3 id="attackersh3">ROUNDS WON</h3>
            <input
                id='attackersRoundsWonInput'
                type='number'
                onChange={this.updateAttaackersRoundsWon}
                placeholder='e.g. 13'
            >
            </input>
          </div>

          <div id="attackersRightSide">
            <div id="attackerPlayer1"><p className="attackerMissing">?</p></div>
            <div id="attackerPlayer2"><p className="attackerMissing">?</p></div>
            <div id="attackerPlayer3"><p className="attackerMissing">?</p></div>
            <div id="attackerPlayer4"><p className="attackerMissing">?</p></div>
            <div id="attackerPlayer5"><p className="attackerMissing">?</p></div>
          </div>
        </div>

        <div id="defendersContainer">
          <div id="defendersLeftSide">
            <h2 id="defendersh2">DEFENDERS</h2>
            <h3 id="defendersh3">ROUNDS WON</h3>
              <input
                  id='defendersRoundsWonInput'
                  type='number'
                  onChange={this.updateDefendersRoundsWon}
                  placeholder='e.g. 13'
              >
              </input>
          </div>

          <div id="defendersRightSide">
            <div id="defenderPlayer1"><p className="defenderMissing">?</p></div>
            <div id="defenderPlayer2"><p className="defenderMissing">?</p></div>
            <div id="defenderPlayer3"><p className="defenderMissing">?</p></div>
            <div id="defenderPlayer4"><p className="defenderMissing">?</p></div>
            <div id="defenderPlayer5"><p className="defenderMissing">?</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddPlayer;
