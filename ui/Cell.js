import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default class Cell extends Component {
  
  render() {
    const { color, isFilled } =  this.props;
    return (
      <FontAwesome 
        name={isFilled? 'circle': 'circle-o'}
        size={32}
        color={color}
      />
    )
  }
}