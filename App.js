import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';
import BoardMatrix from './ui/BoardMatrix';

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

        <BoardMatrix />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
});
