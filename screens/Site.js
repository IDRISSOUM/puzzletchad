import React, {Component, useCallback} from 'react';
import {View, Text, Button, Image, Linking, StyleSheet} from 'react-native';

const supportedURL = "https://tchadinfos.com/tchad/innovation-connaitre-la-geographie-du-tchad-a-travers-un-jeu-educatif/?fbclid=IwAR3HK1LS4vE9vyCUrjuYecXqMiIBrYN4ncT6BZDvwxsHeqrsQ6Js86D4CZY";
class Site extends Component {

  render() {
    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Je ne sais pas comment ouvrir cette URL: ${url}`);
        }
      }, [url]);
    
      return <Button title={children} onPress={handlePress} />;
    };
    
    return (
      <View style={{
        flex: 0.5,
        paddingTop: '5%'
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            alignSelf: 'center',
            borderRadius: 100,
            // maxWidth: 500,
            paddingVertical: 30,
            shadowColor: '#FFF',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
          }}
          source={require('../assets/cato_logo.jpg')}
        />
        {/* <View style={{flex: 1,  justifyContent: 'space-around'}}>
          <Text style={{fontSize: 20, fontStyle: 'italic', fontWeight: 'bold'}}>Lien vers notre site web :</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 15, fontStyle: 'normal', color: 'blue', textAlign: 'center', }}></Text>
          </TouchableOpacity>
        </View> */}
        <View style={[styles.container, {margin: '5%', paddingBottom: '3%'}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Lien vers notre site web :</Text>
        </View>
        <View style={{marginHorizontal: '25%'}}>
          <OpenURLButton url={supportedURL}>Allez sur notre site</OpenURLButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Site;