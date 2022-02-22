import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated, Dimensions  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tutorial2Spec } from '../config/theme';
import Carousel from 'react-native-snap-carousel';
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = tutorial2Spec;
import { StatusBar } from 'expo-status-bar';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const { width, height } = Dimensions.get('screen');

const data =  [
  {
      key: "1",
      location: "benin",
      numberOfDays: 9,
      image: "https://previews.123rf.com/images/michal812/michal8121306/michal812130600200/20531737-tchad-sur-la-carte-politique-r%C3%A9elle-mill%C3%A9sime-de-l-afrique-avec-des-drapeaux.jpg",
      color: "#0C212D",
  },
  {
      key: "2",
      location: "cote",
      numberOfDays: 3,
      image: "https://previews.123rf.com/images/alancotton/alancotton1501/alancotton150100158/35770882-tchad-aper%C3%A7u-incrust%C3%A9e-dans-une-carte-de-l-afrique-sur-un-fond-blanc.jpg",
      color: "#F8EACE",
  },
  {
      key: "4",
      location: "gabon",
      numberOfDays: 5,
      image: "https://media.istockphoto.com/photos/chad-women-went-out-to-find-water-picture-id1296337876?k=20&m=1296337876&s=612x612&w=0&h=k2zjuf7vu1gS3ohCqGJhFpDnl4IQYG7xmfWQabCGtCQ=",
      color: "#E4E5EA",
  },
  {
      key: "5",
      location: "tunisie",
      numberOfDays: 7,
      image: "https://previews.123rf.com/images/mariashmitt/mariashmitt1606/mariashmitt160600004/57588951-pays-du-tchad-avec-sa-capitale-ndjamena-en-afrique-carte-de-croquis-dessin%C3%A9s-%C3%A0-la-main-isol%C3%A9-sur-bla.jpg",
      color: "#E4E5EA",
  },
  {
      key: "6",
      location: "egypte",
      numberOfDays: 8,
      image: "https://m.psecn.photoshelter.com/img-get/I00008NQUe.Uq.24/s/1200/I00008NQUe.Uq.24.jpg",
      color: "#E4E5EA",
  },
  {
      key: "7",
      location: "libye",
      numberOfDays: 9,
      image: "https://media.istockphoto.com/photos/camel-in-the-sahara-desert-picture-id177542507?k=20&m=177542507&s=612x612&w=0&h=8SJxjAG9yyTCGpYsCQAbk8h5gO2HObnVKBwMFec_etE=",
      color: "#E4E5EA",
  },
]
 function Accueil ({navigation}) {
    return(
        <View style={{ flex: 10, backgroundColor: 'white'}}>
            <View style={styles.container}>
            <StatusBar hidden />
            <Carousel
            layout={"default"}
            // ref={ref => this.carousel = ref}
            data={data}
            sliderWidth={350}
            itemWidth={200}
            keyExtractor={(item) => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item, index}) => {
                return (
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
                
                    }}>
                    <TouchableOpacity onPress={() => {
                        navigation.push('Location', {item});
                    }} style={ styles.itemContainer }>                       
                        <Image source={{ uri: item.image }} 
                        style={[
                            StyleSheet.absoluteFillObject,
                        ]}
                        />
                        <Text style={[styles.location]}
                            >{item.location}</Text>
                            <View style={styles.days}>
                            <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                            <Text style={styles.daysLabel}>days</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                        </View>
                     </View>
                    )
                    // console.log(item.numberOfDays)
                    
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
                  onPress={() => navigation.navigate('Atlas')}>
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
                  onPress={() => navigation.navigate('SetPage')}>
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
export default Accueil;

const styles = StyleSheet.create({
itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,   
},
container: {
    flex: 1,
    backgroundColor: '#22427CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
location: {
  fontSize: 30,
  color: '#fff',
  fontWeight: '800',
  width: ITEM_WIDTH * 0.8,
  textTransform: 'uppercase',
  position: 'absolute',
  top: SPACING,
  bottom: SPACING,
  left: SPACING,

},
days: {
  position: 'absolute',
  bottom: SPACING,
  left: SPACING,
  width: 52,
  height: 52,
  borderRadius: 26,
  backgroundColor: 'tomato',
  justifyContent: 'center',
  alignItems: 'center'

},
daysValue: {
  fontWeight: '800',
  color: '#fff',
  fontSize: 18,
},
daysLabel: {
  color: '#fff',
  fontSize: 10,
}
});
