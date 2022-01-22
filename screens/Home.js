/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// const sliderWidth = Dimensions.get('window').width;
// const itemHeight = Dimensions.get('window').height;


const images = [
  'https://previews.123rf.com/images/michal812/michal8121306/michal812130600200/20531737-tchad-sur-la-carte-politique-r%C3%A9elle-mill%C3%A9sime-de-l-afrique-avec-des-drapeaux.jpg',
  'https://previews.123rf.com/images/alancotton/alancotton1501/alancotton150100158/35770882-tchad-aper%C3%A7u-incrust%C3%A9e-dans-une-carte-de-l-afrique-sur-un-fond-blanc.jpg',
  'https://media.istockphoto.com/photos/chad-women-went-out-to-find-water-picture-id1296337876?k=20&m=1296337876&s=612x612&w=0&h=k2zjuf7vu1gS3ohCqGJhFpDnl4IQYG7xmfWQabCGtCQ=',
  'https://previews.123rf.com/images/mariashmitt/mariashmitt1606/mariashmitt160600004/57588951-pays-du-tchad-avec-sa-capitale-ndjamena-en-afrique-carte-de-croquis-dessin%C3%A9s-%C3%A0-la-main-isol%C3%A9-sur-bla.jpg',
  'https://m.psecn.photoshelter.com/img-get/I00008NQUe.Uq.24/s/1200/I00008NQUe.Uq.24.jpg',
  'https://media.istockphoto.com/photos/camel-in-the-sahara-desert-picture-id177542507?k=20&m=177542507&s=612x612&w=0&h=8SJxjAG9yyTCGpYsCQAbk8h5gO2HObnVKBwMFec_etE=',
  'https://media.istockphoto.com/photos/chad-on-planet-earth-in-space-picture-id1082839054?k=20&m=1082839054&s=612x612&w=0&h=4O-k7RBIekPKNITr1QG1CI04t6VUlVDZkPiHyXfWsr4=',
  'https://media.istockphoto.com/photos/aerial-view-of-the-ennedi-massif-sahara-chad-picture-id1208662899?k=20&m=1208662899&s=612x612&w=0&h=BA1-4N9ZkzR9BB06CaIZ9eqgeoiQMtIKzQO8mdtubD4=',
  'https://as1.ftcdn.net/v2/jpg/00/28/92/28/500_F_28922828_AZ5w0ZV2eFEabq24jdfPNCQHQw1mIWrJ.jpg',
  'https://media.istockphoto.com/photos/nomad-woman-picture-id467514772?k=20&m=467514772&s=612x612&w=0&h=sRtuplYhoQ9TPwMLVDlG3sCc1YA97jpjw-22pBmnlSQ=',
];

const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export default class Accueil extends Component {
    
  render() { 
    return (
      // eslint-disable-next-line react-native/no-inline-styles
          <View style={{ flex: 10, backgroundColor: 'white'}}>
            <View style={styles.container}>
            <StatusBar hidden />
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={data}
              sliderWidth={350}
              itemWidth={200}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              renderItem={({item, index}) => {
              return(
              <View style={{ width, justifyContent: 'center', alignItems: 'center'  }}>
               <View style={{  
                 borderRadius: 18,
                 borderColor: 'white',
                 shadowColor: '#000',
                 shadowOpacity: 1,
                 shadowRadius: 20,
                 shadowOffset: {
                   width: 0,
                   height: 0,
                 },
                 
                 borderRadius: 18,
                 padding: 12,
                 
                 }}>
               <View style={{ 
                 width: ITEM_WIDTH , 
                 height: ITEM_HEIGHT ,
                 overflow: 'hidden',
                 alignItems: 'center',
                 borderRadius: 13,
                //  height: 350,
                //  height: viewportHeight * 0.50,
                
               }}>
               <Image 
                source={{ uri: item.photo }}
                style={{ 
                  width: ITEM_WIDTH, 
                  height: ITEM_HEIGHT, 
                  resizeMode: 'cover'}}
                />
               </View>
               </View>
               
          </View>  
                    
            )
          }}
        />
          
          </View>
          <View style={{ 
            flex: 0.36, 
            backgroundColor: '#22427CFF' 
            
            }}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 0.47,
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 200,
                    height: 50,
                    backgroundColor: '#FFFFFF',
                  }}
                  onPress={() => this.props.navigation.navigate('Atlas')}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      // backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Carte Interactive
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 0.4,
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                  
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 200,
                    height: 50,
                    backgroundColor: '#FFFFFF',
                    
                  }}
                  onPress={() => this.props.navigation.navigate('Puzzle')}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      // backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontFamily: 'Roboto',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Puzzle
                  </Text>
                </TouchableOpacity>
              </View>

          </View>
           
           </View>
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22427CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
