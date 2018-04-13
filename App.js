import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';
import BoardMatrix from './ui/BoardMatrix';
import ColumnSelector from './ui/ColumnSelector';
import Players from './players';
import Game, { GameStatus } from './game';


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
        {this._showAlertIfNotPlaying()}
      </View>
    );
  }

  _showAlertIfNotPlaying = () => {
    switch (this.state.status) {
      case GameStatus.draw:
        return Alert.alert(
            'Game was drawn',
            'But you can always restart again',
            [
              {text: 'Restart', onPress: this._restartGame},
            ],
            { cancelable: false }
          );
      case GameStatus.win:
        return Alert.alert(
          `Game was won by Player ${this.state.currentPlayerId}`,
          `Better luck next time Player ${this.state.currentPlayerId === 1 ? 2 : 1}`,
          [
            {text: 'Restart', onPress: this._restartGame},
          ],
          { cancelable: false }
        );
      default:
        return null;
    }
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
