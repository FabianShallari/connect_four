import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerLabel from './ui/PlayerLabel';

export default class App extends Component {
  
  state = {
    activePlayerId: 1
  }

  render() {
    return (
      <View style={styles.container}> 
        <PlayerLabel 
          id={1} 
          activeColor={'blue'} 
          name={'Player 1'} 
          isActive={this.state.activePlayerId === 1}/> 

        <PlayerLabel 
          id={2} 
          activeColor={'green'} 
          name={'Player 2'} 
          isActive={this.state.activePlayerId === 2}/> 
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
