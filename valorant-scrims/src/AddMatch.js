import React, { Component } from "react";
import './AddMatch.css';
import Navigation from './components/Navigation'
import AddPlayer from './components/AddPlayer'
import AddMap from './components/AddMap'
import ViewMatch from './components/ViewMatch'

class AddMatch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'addMatch',
      banner: 'add-match-banner2'
    }
  }

  setPage = () => {
    this.setState({
      page: 'viewMatch',
      banner: 'view-match-banner'
    })
  }

  render() {
    const bannerImage = require(`./images/${this.state.banner}.jpg`).default;

    return (
      <React.Fragment>
        <Navigation />
        <img id="bannerImage" src={bannerImage} alt="Valorant Yoru"/>

        {(() => {
          if (this.state.page === 'addMatch'){
            return (
              <React.Fragment>
                <AddPlayer />
                <AddMap setPage={this.setPage}/>
              </React.Fragment>
            )
          } else if (this.state.page === 'viewMatch'){
            return (
              <ViewMatch />
            )
          }
        })()}

      </React.Fragment>
    )
  }
}

export default AddMatch;
