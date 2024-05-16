import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header = (props:any) => {
  return(
    <View style={styleSheet.header}>
      <Text  style={styleSheet.text}>💰{props.title}</Text>
    </View>
  )
}

const styleSheet = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#3c8c40'
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }


});

export default Header;