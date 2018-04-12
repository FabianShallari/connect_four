import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const columns = 7;

export default class ColumnSelector extends Component {
  
  render() {
    let row = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const isColumnFull = Math.random() < 0.5 ? true : false;
      
      row.push(
        <TouchableOpacity 
          key={columnIndex}
          disabled={isColumnFull} 
          style={{padding: 8}}>
          <FontAwesome 
            name={'plus'}
            color={'blue'} 
            size={32}
            style={styles.icon}
          />
        </TouchableOpacity>
      );
    }

    return (
      <View style={[styles.container, this.props.style]}>
        { row }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});