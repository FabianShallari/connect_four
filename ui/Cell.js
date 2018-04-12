import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default class Cell extends Component {
  render() {
    const name = this.props.isFilled ? 'circle' : 'circle-o';
    const { color } =  this.props;

    return (
      <FontAwesome 
        name={name}
        size={32}
        color={color} 
        style={styles.icon}
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    padding: 8,
  }
});