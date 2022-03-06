import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions  } from 'react-native';
const screen = Dimensions.get('window');

export default class TravelListe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SetPage')}  style={[styles.button, styles.buttonReset]}>
            <Text style={[styles.buttonText, styles.buttonTextReset]}>Retour</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#22427CFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: '#b71c1c',
        width: screen.width / 2,
        height: screen.width / 4,
        borderRadius: screen.width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    buttonReset: {
        marginTop: 20,
        borderColor: "#ffc107",
        justifyContent: 'center',
        borderRadius: 30,
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 2,
        padding: 10,
        width: 200,
        height: 50,
        // backgroundColor: '#FFFFFF',
    },
    buttonTextReset: {
      color: "#ffc107",
      fontWeight: 'bold',
      fontSize: 20
    }
  });
  