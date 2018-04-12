import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Cell from './Cell.js';

const rows = 6;
const columns = 7;

export default class BoardMatrix extends Component {
  render() {
    let board = [];
    
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      let row = [];
      for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        let color = 'gray';
        const isFilled = Math.random() < 0.5 ? true : false;
        if (isFilled) {
          color = Math.random() < 0.5 ? 'red' : 'yellow';
        }

        row.push(<Cell key={columnIndex} isFilled={isFilled} color={color} />);
      }

      board.push(
        <View
          key={rowIndex} 
          style={styles.row}>
          { row }
        </View>
      );
    }

    return (
      <View>
        <View>
        { board }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});