import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default Cell = ({color, isFilled}) => (
  <FontAwesome 
        name={isFilled? 'circle': 'circle-o'}
        size={32}
        color={color}
      />
)