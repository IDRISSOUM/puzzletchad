import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    const timeout = secs
    return { mins: formatNumber(mins), secs: formatNumber(secs),  timeout: formatNumber(timeout)};
}

export default function setPage({navigation}) {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs, timeout } = getRemaining(remainingSecs);
  const [timer, setTimer] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  }

  console.log(remainingSecs)
  console.log("Vous avez depassé le temps: ", timeout)

  const reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
    setTime()
    
  }

  const setTime = () => {
    if (timeout === 20){
      setRemainingSecs(0);
      setIsActive(false);
      console.log("bon debut")
    }

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
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={() => {toggle();  navigation.navigate('imageTchad', {
       remainingSecs
      })}} style={styles.button}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Jouez'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={[styles.button, styles.buttonReset]}>
          <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
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
      width: screen.width / 4,
      height: screen.width / 4,
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
      fontSize: 50,
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

