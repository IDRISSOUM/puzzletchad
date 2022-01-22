import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Animated  } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { tutorial2Spec } from '../config/theme';
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = tutorial2Spec;

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
export default function Atlas ({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
    return(
      <SafeAreaView style={{ flex: 1 }}> 
          <Animated.FlatList
          data={data}
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          // snapToInterval={FULL_SIZE}
          decelerationRate='fast'
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true, }
          )}
          renderItem={({item, index}) => {
              const inputRange = [(index -1) * FULL_SIZE, 
                index * FULL_SIZE, 
                (index + 1) * FULL_SIZE];
                
                const translateX = scrollX.interpolate({
                  inputRange,
                  outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
                });

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [1, 1.1, 1] ,
              })
              return (
                  <TouchableOpacity onPress={() => {
                    navigation.push('Location', { item })
                  }} style={ styles.itemContainer }>
                      <Animated.Image source={{ uri: item.image }} 
                      style={[
                        StyleSheet.absoluteFillObject, 
                        // {
                        // resizeMode: 'cover', 
                        // transform: [{ scale }]
                        // } 
                      ]}
                      />
                      <Animated.Text style={[styles.location]}
                        >{item.location}</Animated.Text>
                        <View style={styles.days}>
                          <Text style={styles.daysValue}>{item.numberOfDays}</Text>
                          <Text style={styles.daysLabel}>days</Text>
                        </View>
                  </TouchableOpacity>
                  )
              }}
              />
      </SafeAreaView>
    );
    
  }

const styles = StyleSheet.create({
itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: SPACING,   
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
