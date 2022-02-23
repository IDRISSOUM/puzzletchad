
import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native';



class SetImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        }
    }


render() {
    return (
        <View style={{  }}>
          <Image 
            style={{ width: 400, height: 650, justifyContent: 'center', alignContent: 'center', paddingBottom: 2 }}
            source={require('../assets1/26.jpg')}
          />
        </View>
      );
    }

  getData(){
    setTimeout(() => {
        this.props.navigation.navigate('Puzzle');
    }, 500);
   
 }
 
 componentDidMount(){
   this.getData();
 }
 
 componentWillUnmount() {
   this.getData();
 }

}
const styles = StyleSheet.create({
    stretch: {
      resizeMode: 'contain'
    }
  });

export default SetImage;

