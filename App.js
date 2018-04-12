import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';
import BoardMatrix from './ui/BoardMatrix';
import ColumnSelector from './ui/ColumnSelector';
import Players from './players';

export default class App extends Component {
  
  state = {
    currentPlayerId: 2
  }

  render() {

    const currentPlayer = Players[this.state.currentPlayerId];

    return (
      <View style={styles.container}>
        <PlayerLabel {...currentPlayer} /> 
        <BoardMatrix style={styles.board}/>
        <ColumnSelector {...currentPlayer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 16,
  },

  board: {
    marginTop: 32,
    marginBottom: 32
  }
});
