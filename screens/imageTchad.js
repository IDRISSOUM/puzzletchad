
import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, RefreshControl } from 'react-native';



class SetImage extends Component {
  _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            
        }
    }
//  Data = this.props.params.remainingSecs;
getData(){
  setTimeout(() => {
      this.props.navigation.navigate('Puzzle');
  }, 5000);
 
}

componentDidMount(){
  this._isMounted = true;
  if (this._isMounted){
    this.getData();
  }
}

componentWillUnmount() {
  this._isMounted = false;
  if(!this._isMounted){
    this.getData();
  }
  
}



render() {
  const { navigation, route, remainingSecs } = this.props;
  console.log('ggggggggg', route.params)
    return (
        <View style={{  }}>
          <Image 
            style={{ width: 400, height: 650, justifyContent: 'center', alignContent: 'center', paddingBottom: 2 }}
            source={require('../assets1/26.jpg')}
          />
        </View>
      );
      
    }
}
const styles = StyleSheet.create({
    stretch: {
      resizeMode: 'contain'
    }
  });

export default SetImage;

