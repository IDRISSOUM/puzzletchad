import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Share, SafeAreaView, StyleSheet, Dimensions, PixelRatio} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('screen');

class Apropos extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    console.log('qqqqqqq: ', PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').width/5),)
    console.log('bbbbbbbb: ',  Dimensions.get("screen"))
    return (

        <View style={[styles.container, {
              flexDirection: "column"
            }]}>
              <View style={{ 
                flex: 1,
                paddingTop: 25,
                margin: 5  
                // backgroundColor: "white" 
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: '#000',  }} onPress={() => this.props.navigation.navigate('Autre')}>
            <Text style={styles.imageStyle}><Icon name="infocirlce" color="#000" size={25} /> A Propos de Cato Tchad</Text>
          </TouchableOpacity>
        </View>
              <View style={{ 
                flex: 1,
                margin: 5  
                
                // backgroundColor: "white" 
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: '#000', paddingTop: -15}} onPress={() => this.props.navigation.navigate('Real')}>
            <Text style={styles.imageStyle}><Icon name="folderopen" color="#000" size={25} /> Nos Realisations</Text>
          </TouchableOpacity>
        </View>
              <View style={{ 
                flex: 1,
                margin: 5  
                // backgroundColor: "white" 
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15, }} onPress={() => this.props.navigation.navigate('Site')}>
            <Text style={styles.imageStyle}><Icon name="earth" color="#000" size={25} /> Voir Notre Site Web</Text>
          </TouchableOpacity>
        </View>
              <View style={{ 
                flex: 1,
                margin: 5  
                // backgroundColor: "white" 
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15 }} onPress={this.onShare}>
            <Text style={styles.imageStyle}><Icon name="sharealt" color="#000" size={30} /> Partager</Text>
          </TouchableOpacity>
        </View>
              <View style={{ 
                flex: 1,
                margin: 5 
                // backgroundColor: "white" 
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15 }} onPress={() => this.props.navigation.navigate('rating')}>
            <Text style={styles.imageStyle}><Icon name="star" color="#000" size={25} /> Evaluer</Text>
          </TouchableOpacity>
        </View>
              <View style={{ 
                flex: 1, 
                // backgroundColor: "white",
                margin: 25
                }} 
                >
          <TouchableOpacity style={{ borderBottomWidth: 0.5, borderBottomColor: '#000',  marginBottom: 15}} onPress={() => this.props.navigation.navigate('')}>
            <Text style={styles.imageStyle}>Version 1.0.0</Text>
          </TouchableOpacity> 
        </View>
        </View>

     
    );
  }
}
export default Apropos;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: width,
    height: height
  },
  imageStyle: {
    fontSize: 18, 
    fontFamily: 'Cochin', 
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

