/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

class Tempo extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, backgroundColor: '#22427CFF'}}>
        {/* <ImageBackground
          source={require('../assets/open.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          imageStyle={{ opacity: 0.2 }}
        /> */}
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 4.5, flexDirection: 'row'}}>
            <View style={{flex: 5.8, justifyContent: 'center'}}>
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 0.5,
                  resizeMode: 'cover',
                  alignSelf: 'center',
                  borderRadius: 100,
                  // maxWidth: 500,
                  paddingVertical: 70,
                }}
                source={require('../assets/cato_logo.jpg')}
              />
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontSize: 15,
                  textAlignVertical: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Cochin',
                }}>
                CARTO TCHAD est une application mobile qui {'\n'} amagazine
                toutes les cartes régionales du Tchad. {'\n'} Et de connaitre la
                géographie du Tchad en s’amusant !
              </Text>
            </View>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
              }}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontSize: 15,
                  textAlignVertical: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Cochin',
                }}>
                COPYRIGHT, Carto Tchad 2021
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }
}
export default Tempo;
