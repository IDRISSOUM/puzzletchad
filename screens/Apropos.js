import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Share} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import Share from 'react-native-share';

// const myCustomShare = async() => {
//   const ShareOptions = {
//     message: 'This is a test message'
//   }
//   try {
//     const ShareResponse = await Share.open(ShareOptions);
//   } catch(error){
//     console.log('Error =>', error)
//   }
    
// };
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
    return (
      <View style={{ flex: 0.5, flexDirection: 'column',}}>
        <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15, }} onPress={() => this.props.navigation.navigate('Autre')}>
            <Text style={{fontSize: 18, fontFamily: "Cochin", fontStyle: 'normal'}}><Icon name="infocirlce" color="#000" size={30} /> A propos de Cato Tchad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15,}} onPress={() => this.props.navigation.navigate('Real')}>
            <Text style={{fontSize: 18, fontFamily: 'Cochin', fontStyle: 'normal', }}><Icon name="folderopen" color="#000" size={30} /> Nos Realisations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15,}} onPress={() => this.props.navigation.navigate('Site')}>
            <Text style={{fontSize: 18, fontFamily: 'Cochin', fontStyle: 'normal'}}><Icon name="earth" color="#000" size={30} /> Voir Notre Site Web</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15,}} onPress={this.onShare}>
            <Text style={{fontSize: 18, fontFamily: 'Cochin', fontStyle: 'normal'}}><Icon name="sharealt" color="#000" size={30} /> Partager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15,}} onPress={() => this.props.navigation.navigate('')}>
            <Text style={{fontSize: 18, fontFamily: 'Cochin', fontStyle: 'normal'}}><Icon name="star" color="#000" size={30} /> Evaluer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.3, borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 15, marginHorizontal: 30,}} onPress={() => this.props.navigation.navigate('')}>
            <Text style={{fontSize: 18, fontFamily: 'Cochin', fontStyle: 'normal'}}><Icon color="#000" size={30} />Version 1.0.0</Text>
          </TouchableOpacity>
        
        {/* <View style={{flex: 0.3,  borderBottomWidth: 1, borderBottomColor: '#000', }}>
          <TouchableOpacity style={{ flex: 0.5, }} onPress={() => this.props.navigation.navigate('Autre')}>
            <Text style={{fontSize: 20, fontFamily: "Cochin", fontStyle: 'italic'}}><Icon name="infocirlce" color="#000" size={30} />A propos de Cato Tchad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex:0.4, }} onPress={() => this.props.navigation.navigate('Real')}>
            <Text style={{fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic', }}><Icon name="folderopen" color="#000" size={30} />Nos Realisations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.4, }} onPress={() => this.props.navigation.navigate('Site')}>
            <Text style={{fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic'}}><Icon name="earth" color="#000" size={30} />Voir Notre Site Web</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={{flex: 0.3, borderBottomColor: '000', borderBottomWidth: 1,}}>
          <TouchableOpacity style={{ flex:0.4, }} onPress={() => this.props.navigation.navigate('Real')}>
            <Text style={{fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic', }}><Icon name="folderopen" color="#000" size={30} />Nos Realisations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 0.4, }} onPress={() => this.props.navigation.navigate('Site')}>
            <Text style={{fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic'}}><Icon name="earth" color="#000" size={30} />Voir Notre Site Web</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={{ flex: 0.3, borderBottomColor: '000', borderBottomWidth: 1, }}>
          <TouchableOpacity style={{ flex: 0.4, }} onPress={() => this.props.navigation.navigate('Site')}>
            <Text style={{fontSize: 20, fontFamily: 'Cochin', fontStyle: 'italic'}}><Icon name="earth" color="#000" size={30} />Voir Notre Site Web</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
export default Apropos;
