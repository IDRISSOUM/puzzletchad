// Inspiration: https://dribbble.com/shots/7378780-Travel-App-Trip-Detail-Animation

import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import data from '../config/data/locations';
import { FlatList } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { SIZE, ICON_SIZE } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBack from '../components/GoBack';
const { width, height } = Dimensions.get('screen');

export const ITEM_WIDTH = width * 0.68;
export const SPACING = 20;

export default function TravelList({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      {/* <GoBack /> */}
      <Text
        style={{
          fontWeight: '800',
          margin: 15,
          textTransform: 'uppercase',
          fontSize: 10,
          marginBottom: 0,
          color: 'white'
        }}
      >
        Bienvenue sur cartotchad
      </Text>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        snapToInterval={ITEM_WIDTH + SPACING * 2}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingLeft: width - (ITEM_WIDTH - SPACING),
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({ item, index }) => {
          const s = ITEM_WIDTH + SPACING * 2;
          const inputRange = [(index - 1) * s, index * s, (index + 1) * s];
          const imageScale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
            extrapolate: 'clamp',
          });
          const headingTranslateX = scrollX.interpolate({
            inputRange,
            outputRange: [width, 0, -width],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_WIDTH * 1.5,
                margin: SPACING,
                borderRadius: 18,
                overflow: 'hidden',
              }}
              onPress={() => navigation.push('ListScreenDetails', { item })}
            >
              <SharedElement
                // id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
              >
                <Animated.Image
                  source={{ uri: item.image }}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_WIDTH * 1.5,
                    borderRadius: 18,
                    resizeMode: 'cover',
                  }}
                />
              </SharedElement>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { padding: 18, justifyContent: 'space-between' },
                ]}
              >
                <SharedElement
                  id={`item.${item.key}.location`}
                  style={{ width: ITEM_WIDTH - SPACING * 2 }}
                >
                  <Animated.Text
                    style={{
                      fontSize: 32,
                      color: 'white',
                      fontWeight: '800',
                      letterSpacing: -1,
                      textTransform: 'uppercase',
                      transform: [{ translateX: headingTranslateX }],
                    }}
                  >
                    {item.location}
                  </Animated.Text>
                </SharedElement>
                {/* <View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgb(255,134,151)',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 18,
                        color: 'white',
                        fontWeight: '800',
                      }}
                    >
                      {item.numberOfDays}
                    </Text>
                    <Text style={{ fontSize: 9, color: 'white' }}>days</Text>
                  </View>
                </View> */}
              </View>
            </TouchableOpacity>
          );
        }}
      />

        <View style={{ 
            flex: 5, 
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22427CFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
