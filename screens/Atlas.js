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

  createSelectButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Bienvenue à Wadi Fira avec une population comprise entre",
        // onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Retour",
        // onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", }
    ]
  );

  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 1, }}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert}>
            <Image source={require('../assets/carte_0000_Calque-1.png')} style={styles.image}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 2, }}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0001_Calque-2.png')} style={styles.image1}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 3,}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0002_Calque-3.png')} style={styles.image2}/>
        </TouchableOpacity> 
        </View>
         <View style={{flex: 0.1,}}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={require('../assets/carte_0003_Calque-4.png')} style={styles.image3} />
          </TouchableOpacity>
         </View>
        <View style={{flex: 0.1,}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0004_Calque-5.png')} style={styles.image4} />
        </TouchableOpacity>
        </View>
        
        <View style={{flex: 0.1,}}>
        <TouchableOpacity
          onPress={this.createSelectButtonAlert} >
            <Image source={require('../assets/carte_0007_Calque-8.png')} style={styles.image16}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1,}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0008_Calque-9.png')} style={styles.image6}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1,}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0009_Calque-10.png')}  style={styles.image7}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1,}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0010_Calque-11.png')}  style={styles.image8}/>
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0012_Calque-13.png')} style={styles.image9} />
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0014_Calque-15.png')}  style={styles.image10} />
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0016_Calque-17.png')}  style={styles.image11} />
        </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={require('../assets/carte_0018_Calque-19.png')}  style={styles.image12} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={require('../assets/carte_0019_Calque-20.png')}  style={styles.image13} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={require('../assets/carte_0020_Calque-21.png')}  style={styles.image14} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.1}}>
        <TouchableOpacity
          onPress={this.createTwoButtonAlert} >
            <Image source={require('../assets/carte_0021_Calque-22.png')}  style={styles.image15} />
        </TouchableOpacity> 
        </View>
      </View>
    ) 
  }
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: '#fff'
    // justifyContent: ''
    },
  map: {
    width: 100,
    height: 100,
    flex: 1,
    // justifyContent: ''
    // flexDirection: 'column'
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  image: {
    width: null,
    resizeMode: 'contain',
    height: 170,
    left: -60,
    bottom: -20
  },
  image1: {
    width: null,
    resizeMode: 'contain',
    height: 230,
    right:  29,
    bottom: 51
  },
  image2: {
    width: null,
    resizeMode: 'contain',
    height: 190,
    right: -90,
    top: -205
  },
  image3: {
    width: null,
    resizeMode: 'contain',
    height: 120,
    left: -130,
    top: -338
  },
  image4: {
    width: null,
    resizeMode: 'contain',
    height: 108,
    left: -75.9,
    top: -329
  },
  image5: {
    width: null,
    resizeMode: 'contain',
    height: 90,
    right: -65,
    top: -344
  },
  image6: {
    width: null,
    resizeMode: 'contain',
    height: 55,
    left: -152,
    top: -295
  },
  image7: {
    width: null,
    resizeMode: 'contain',
    height: 55,
    left: -105,
    top: -268
  },
  image16: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    left: -70,
    top: -430
  },
  image8: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image9: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image10: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image11: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image12: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image13: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image14: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },
  image15: {
    width: null,
    resizeMode: 'contain',
    height: 105,
    // left: -70,
    // top: -430
  },

});