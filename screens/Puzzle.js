import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
export const { width, height} = Dimensions.get('window')

class Profil extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}><Text style={{flexDirection: 'row-reverse'}}>Chronometre</Text></View>
        <View style={styles.middle}><Text>Bonjour la famille</Text></View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 0,
    margin: 10,
  },
  top: {
    flex: 0.5,
    backgroundColor: "white",
    borderWidth: 2,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  middle: {
    flex: 5,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 2,
    backgroundColor: "pink",
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Profil;