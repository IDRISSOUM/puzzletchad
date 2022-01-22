import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';



export default class Atlas extends Component {

  createTwoButtonAlert = () =>
  Alert.alert(
    "Borkou",
    "La Population de Barkou est de: 81204683263",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} style={{   padding: 1 }}>
            <Image source={require('../assets/carte_0000_Calque-1.png')} style={styles.map} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} style={{  padding: 1,  }}>
            <Image source={require('../assets/carte_0001_Calque-2.png')} style={{ width: 170, height: 100, flex: 1, marginHorizontal: -60 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} style={{   padding: 1,  }}>
            <Image source={require('../assets/carte_0002_Calque-3.png')} style={{ width: 170, height: 100, flex: 1, marginHorizontal: -1, }} />
        </TouchableOpacity>         
      </View>
    ) 
  }
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 0.3,
    backgroundColor: '#fff'
    // justifyContent: ''
  },
  map: {
    width: 180,
    height: 100,
    flex: 1,
    // justifyContent: ''
    // flexDirection: 'column'
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
});