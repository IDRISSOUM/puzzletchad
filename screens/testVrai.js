// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet  } from 'react-native';
// import { AntDesign } from 'react-native-vector-icons/AntDesign';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { FlatList } from 'react-native-gesture-handler';
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

// const { width, height } = Dimensions.get('screen');
// const ITEM_WIDTH = width * 0.76;
// const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// export default function TravelList({navigation} {
//     return(
//         <SafeAreaView style={{flex: 1}}>
//             <FlatList 
//                 data={data}
//                 keyExtractor={item => item.key}
//                 renderItem={({item}) => {
//                     return <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>
//                         <Image source={{uri: item.image}} style={[ StyleSheet.absoluteFillObject, {resizeMode: 'cover'}]}                                                                                                    
//                     </TouchableOpacity>
//                 }}
//             />
//         </SafeAreaView>
        
//     )
// })``