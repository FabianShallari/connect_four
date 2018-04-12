import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class PlayerLabel extends Component {

  render() {
    const color = this.props.isActive? this.props.activeColor : 'gray';

    return (
      <View style={styles.container}>
        
        <Text style={[styles.text, {color: color}]}>
          {this.props.name}
        </Text>

        <FontAwesome name='circle' 
          size={32}
          color={color} 
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 18,
    paddingRight: 8,
  },

});