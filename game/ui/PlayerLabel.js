import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default PlayerLabel = ({ color, name }) => (
  <View style={styles.container}>
    <Text style={[styles.text, {color: color}]}>
      {name}
    </Text>
    <FontAwesome name='circle' 
      size={32}
      color={color} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    paddingRight: 8,
  },

});