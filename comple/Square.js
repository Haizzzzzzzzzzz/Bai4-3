import { View, Text } from 'react-native'
import React from 'react'

export default function Square(props) {
  return (
    <View 
    style = {{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.color,
        margin: 10,
    }}>
    <Text>{props.Text}</Text>
    </View>
    
  );
};
