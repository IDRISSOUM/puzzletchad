
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native';


export default function SetImage (props) {
  const { route } = props;
  console.log('ggggggggg', route.params)

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    setTimeout(() => {
      props.navigation.navigate('Puzzle', {params: route.params.val});
    }, 5000);
  }
    

    console.log(props)
  
    return (
        <View style={{  }}>
          <Image 
            style={{ width: 400, height: 650, justifyContent: 'center', alignContent: 'center', paddingBottom: 2 }}
            source={require('../assets1/26.jpg')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    stretch: {
      resizeMode: 'contain'
    }
  });

