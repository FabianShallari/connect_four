import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';
import BoardMatrix from './ui/BoardMatrix';
import ColumnSelector from './ui/ColumnSelector';

export default class App extends Component {
  
  state = {
    activePlayerId: 1
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labels}> 
          <PlayerLabel 
            id={1} 
            activeColor={'red'} 
            name={'Player 1'} 
            isActive={this.state.activePlayerId === 1}/> 

          <PlayerLabel 
            id={2} 
            activeColor={'yellow'} 
            name={'Player 2'} 
            isActive={this.state.activePlayerId === 2}/> 
        </View> 

        <BoardMatrix style={styles.board}/>
        <ColumnSelector />
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
  
  labels: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  board: {
    marginTop: 32,
    marginBottom: 32
  }
});
