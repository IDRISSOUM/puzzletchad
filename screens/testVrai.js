import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions  } from 'react-native';
const screen = Dimensions.get('window');

export default function TravelListe({navigation, route}){

  // console.log('mmm', route.params.val)

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.timerText}>{`Temps Ecoulé: ${route.params.val}s`}</Text>
      </View>

      <View style={{}}>
        <Text style={styles.timerText1}>Vous aviez repondu à:</Text>
      </View> 

      <View style={{}}>
      <TouchableOpacity onPress={() => navigation.navigate('Puzzle')}  style={[styles.button, styles.buttonReset]}>
        <Text style={[styles.buttonText, styles.buttonTextReset]}>ReJouez</Text> 
      </TouchableOpacity>
      </View> 
  
    </View>
  );
}

// export default class TravelListe extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//       return (
//         <View style={styles.container}>
//           <TouchableOpacity onPress={() => this.props.navigation.navigate('SetPage')}  style={[styles.button, styles.buttonReset]}>
//             <Text style={{fontSize: 30}}>{route.params.names}</Text>
//             <Text style={[styles.buttonText, styles.buttonTextReset]}>Retour</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     }
//   }

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
    timerText: {
      color: '#fff',
      fontSize: 30,
      marginBottom: 20
  },
    timerText1: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 20
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
    },
    buttonTextReset: {
      color: "#ffc107",
      fontWeight: 'bold',
      fontSize: 20
    }
  });
  