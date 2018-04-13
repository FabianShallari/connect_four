import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Cell from './Cell';

export default class BoardMatrix extends Component {
  render() {
    const { cells } = this.props;
    return (
      <View style={styles.container}>
        {cells.map((column, columnIndex) => 
          <View
            key={`col-${columnIndex}`} 
            style={styles.column} >
            {column.map((cell, rowIndex) => 
              <Cell key={`cell-${columnIndex}-${rowIndex}`} 
                    color={cell}
                    isFilled={cell !== 'gray'}
              />
            )}
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },

  column: {
    padding: 8,
  }
});