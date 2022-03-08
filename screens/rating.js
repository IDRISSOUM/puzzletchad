import React from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import Rate, { AndroidMarket } from 'react-native-rate';
const screen = Dimensions.get('window');

export default class ExamplePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rated: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={{}}>
          <Text style={styles.timerText1}>Aidez CARTOTCHAD à Grandir</Text>
         </View> 
        <TouchableOpacity onPress={()=>{
          const options = {
            AppleAppID:"2193813192",
            GooglePackageName:"com.mywebsite.myapp",
            AmazonPackageName:"com.mywebsite.myapp",
            OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp:false,
            openAppStoreIfInAppFails:true,
            fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
          }
          Rate.rate(options, (success, errorMessage)=>{
            if (success) {
              // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
              this.setState({rated:true})
            }
            if (errorMessage) {
              // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
              console.error(`Example page Rate.rate() error: ${errorMessage}`)
            }
          })
        }} style={[styles.button, styles.buttonReset]}><Text style={[styles.buttonText, styles.buttonTextReset]}>Donner une Note</Text></TouchableOpacity>
      </View>
    )
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
  timerText1: {
    color: '#fff',
    fontSize: 10,
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