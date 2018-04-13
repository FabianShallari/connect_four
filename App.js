import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';
import BoardMatrix from './ui/BoardMatrix';
import ColumnSelector from './ui/ColumnSelector';
import Players from './players';
import Game from './game';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.game = new Game();
    this.state = this.game.state;
  }

  render() {

    const { currentPlayerId } = this.state;
    const currentPlayer = Players[currentPlayerId];

    return (
      <View style={styles.container}>
        <PlayerLabel {...currentPlayer} /> 
        <BoardMatrix cells={this.state.cells}/>
        <ColumnSelector color={currentPlayer.color} 
          filledColumns={this.game.getFilledColumns()}
          onColumnSelected={this._onColumnSelected}
        />
      </View>
    );
  }

  _onColumnSelected = columnIndex => {
    this.game.playNextTurn(columnIndex);
    this.setState(this.game.state);
  }

  _restartGame = () => {
    this.game = new Game();
    this.setState(this.game.state);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 16,
  }
});
