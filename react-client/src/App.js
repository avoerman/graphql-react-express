import React, { Component } from 'react';
import SelectedPlayer from './components/SelectedPlayer';
import AvailablePlayers from './components/AvailablePlayers';
import Owners from './components/Owners';
import styled from 'styled-components';
import { AppContent, AppWrapper } from './components/styled/AppWrappers';

const PlayersContainer = styled.section`
  flex: 1;
  margin-right: 1em;
`;

class App extends Component {
  state = {
    selectedPlayerId: -1
  };

  handleSelectedPlayer = playerId => {
    this.setState({ selectedPlayerId: playerId });
  };

  handlePlayerDrafted = () => {
    this.setState({ selectedPlayerId: null });
  };

  render() {
    return (
      <AppWrapper>
        <h1>Fantasy Football Draft App</h1>
        <AppContent>
          <PlayersContainer>
            <SelectedPlayer
              selectedPlayerId={this.state.selectedPlayerId}
              ownerId="2"
              playerDrafted={this.handlePlayerDrafted}
            />
            <AvailablePlayers playerSelect={this.handleSelectedPlayer} />
          </PlayersContainer>

          <Owners />
        </AppContent>
      </AppWrapper>
    );
  }
}

export default App;
