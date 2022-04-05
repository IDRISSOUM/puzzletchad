import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);
var timeOut = 50;

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs)};
}

function setPageTime({navigation}) {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const getData = () => {
    if (timeOut <= remainingSecs) {
      reset();
      navigation.navigate('testVrai', { val: getRemaining(remainingSecs) });
      console.log("Temps Ecoulé: ", getRemaining(remainingSecs));
    }
  }
    
  function reset() {
    setRemainingSecs(0);
    setIsActive(false);
  }   

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    getData();
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  console.log('kkkkk', remainingSecs)

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{textAlign: 'center',}}>
          <View style={{alignItems: 'center',}}>
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
          </View>
          <Text style={{fontSize: 15, fontWeight: '800', color: 'white'}}> Pour commencez le jeu</Text>
         </View>

         <View style={{alignItems: 'center', }}>
          <Text style={{fontSize: 50, }}>👇</Text>
         </View>

          <TouchableOpacity onPress={() => {toggle(); navigation.navigate('imageTchad', { val: remainingSecs })}} style={styles.button}>
              <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Jouez'}</Text>
          </TouchableOpacity>
          
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22427CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      borderWidth: 4,
      borderColor: '#b71c1c',
      width: screen.width / 4.5,
      height: screen.width / 4.5,
      borderRadius: screen.width / 2,
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonText: {
      fontSize: 20,
      color: '#b71c1c',
      fontWeight: 'bold'
  },
  timerText: {
      color: '#fff',
      fontSize: 30,
      marginBottom: 20
  },
  buttonReset: {
      marginTop: 20,
      borderColor: "#ffc107"
  },
  buttonTextReset: {
    color: "#ffc107"
  }
});

export default setPageTime;