import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default ColumnSelector = ({ filledColumns, color, onColumnSelected }) => (
  <View style={styles.container}>
    {filledColumns.map((filledColumn, columnIndex) => 
        <TouchableOpacity
          key={columnIndex}
          style={{padding: 8}}
          disabled={filledColumn} 
          onPress={() => onColumnSelected(columnIndex)} >
          <FontAwesome 
              name={'arrow-circle-up'}
              color={filledColumn? 'transparent': color} 
              size={32}
            />
        </TouchableOpacity>)
    }
    </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
