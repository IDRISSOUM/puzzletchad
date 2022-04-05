import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, Alert} from 'react-native';
// export const { width, height} = Dimensions.get('window');
const { width, height } = Dimensions.get('screen');
import PropTypes from "prop-types";

class Profile2 extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedFruits: [],
      is_Active: 0,
      choice: 0,
      refresh: false,
      images: [
        {
          id: 0,
          region: require('../assets2/0.png'),
          ville: 'Tiberti',
          suggestions: [
            {
              id: 0,
              label: 'Tiberti'
            },
            {
              id:1,
              label: 'Borkou'
            },
            {
              id:3,
              label: 'Ennedi-Est'
            },
            {
              id:5,
              label: 'Barh El Gazel'
            },

          ]
          },

          {
          id: 1,
          region: require('../assets2/1.png'),
          ville: 'Borkou',
          suggestions: [
            {
              id: 0,
              label: 'Ennedi-Est'
            },
            {
              id:1,
              label: 'Borkou'
            },
            {
              id:3,
              label: 'Tiberti'
            },
            {
              id:5,
              label: 'Barh El Gazel'
            },

          ]
          },

          {
          id: 2,
          region: require('../assets2/2.png'),
          ville: 'Ennedi-Ouest',
          suggestions: [
            {
              id: 0,
              label: 'Kanem'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:2,
              label: 'Ennedi-Ouest'
            },
            {
              id:5,
              label: 'Ennedi-Est'
            },
          ]
          },

          {
          id: 3,
          region: require('../assets2/3.png'),
          ville: 'Ennedi-Est',
          suggestions: [
            {
              id: 0,
              label: 'N\'Djamena'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:3,
              label: 'Ennedi-Est'
            },
            {
              id:5,
              label: 'Bartha'
            },
          ]
          },

          {
          id: 4,
          region: require('../assets2/4.png'),
          ville: 'Kanem',
          suggestions: [
            {
              id: 0,
              label: 'Guéra'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:3,
              label: 'Ouaddaï'
            },
            {
              id:4,
              label: 'Kanem'
            },
          ]
          },

          {
          id: 5,
          region: require('../assets2/5.png'),
          ville: 'Barh El Gazel',
          suggestions: [
            {
              id: 0,
              label: 'Guéra'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:5,
              label: 'Barh El Gazel'
            },
            {
              id:3,
              label: 'Kanem'
            },
          ]
          },

          {
          id: 6,
          region: require('../assets2/6.png'),
          ville: 'Bartha',
          suggestions: [
            {
              id: 0,
              label: 'Kanem'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:6,
              label: 'Bartha'
            },
          ]
          },

          {
          id: 7,
          region: require('../assets2/7.png'),
          ville: 'Wadi Fira',
          suggestions: [
            {
              id: 0,
              label: 'Kanem'
            },
            {
              id:7,
              label: 'Wadi Fira'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:5,
              label: 'Bartha'
            },
          ]
          },

          {
          id: 8,
          region: require('../assets2/8.png'),
          ville: 'Ouaddaï',
          suggestions: [
            {
              id: 0,
              label: 'Kanem'
            },
            {
              id:8,
              label: 'Ouaddaï'
            },
            {
              id:3,
              label: 'Ennedi-Est'
            },
            {
              id:5,
              label: 'Bartha'
            },
          ]
          },

          {
          id: 9,
          region: require('../assets2/9.png'),
          ville: 'Lac',
          suggestions: [
            {
              id: 9,
              label: 'Lac'
            },
            {
              id:1,
              label: 'Hadjer-Lamis'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:5,
              label: 'Bartha'
            },
          ]
          },
        
          {
          id: 10,
          region: require('../assets2/10.png'),
          ville: 'Hadjer-Lamis',
          suggestions: [
            {
              id: 0,
              label: 'Lac'
            },
            {
              id:1,
              label: 'Borkou'
            },
            {
              id:10,
              label: 'Hadjer-Lamis'
            },
            {
              id:5,
              label: 'Bartha'
            },
          ]
          },

          {
          id: 11,
          region: require('../assets2/11.png'),
          ville: 'N\'Djamena',
          suggestions: [
            {
              id: 0,
              label: 'Lac'
            },
            {
              id:11,
              label: 'N\'Djamena'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:5,
              label: 'Kanem'
            },
          ]
          },

          {
          id: 12,
          region: require('../assets2/12.png'),
          ville: 'Guéra',
          suggestions: [
            {
              id: 12,
              label: 'Guéra'
            },
            {
              id:1,
              label: 'Ennedi-Ouset'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:5,
              label: 'N\'Djamena'
            },
          ]
          },

          {
          id: 13,
          region: require('../assets2/13.png'),
          ville: 'Sila',
          suggestions: [
            {
              id: 13,
              label: 'Sila'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:3,
              label: 'Tiberti'
            },
            {
              id:5,
              label: 'Kanem'
            },
          ]
          },

          {
          id: 14,
          region: require('../assets2/14.png'),
          ville: 'Chari-Baguirmi',
          suggestions: [
            {
              id: 0,
              label: 'Kanem'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:14,
              label: 'Chari-Baguirmi'
            },
            {
              id:5,
              label: 'Borkou'
            },
          ]
          },

          {
          id: 15,
          region: require('../assets2/15.png'),
          ville: 'Moyen-Chari',
          suggestions: [
            {
              id: 15,
              label: 'Moyen-Chari'
            },
            {
              id:1,
              label: 'Lac'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:5,
              label: 'Ouaddaï'
            },
          ]
          },

          {
          id: 16,
          region: require('../assets2/16.png'),
          ville: 'Salamat',
          suggestions: [
            {
              id: 0,
              label: 'Barh El Gazel'
            },
            {
              id:1,
              label: 'Mayo-Kebbi Est'
            },
            {
              id:16,
              label: 'Salamat'
            },
            {
              id:5,
              label: 'Ouaddaï'
            },
          ]
          },

          {
          id: 17,
          region: require('../assets2/17.png'),
          ville: 'Mayo-Kebbi Est',
          suggestions: [
            {
              id: 0,
              label: 'Lac'
            },
            {
              id:1,
              label: 'Mayo-Kebbi Ouest'
            },
            {
              id:3,
              label: 'Barh El Gazel'
            },
            {
              id:17,
              label: 'Mayo-Kebbi Est'
            },
          ]
          },

          {
          id: 18,
          region: require('../assets2/18.png'),
          ville: 'Tandjilé',
          suggestions: [
            {
              id: 18,
              label: 'Tandjilé'
            },
            {
              id:1,
              label: 'Mayo-Kebbi'
            },
            {
              id:3,
              label: 'Kanem'
            },
            {
              id:5,
              label: 'Tiberti'
            },
          ]
          },

          {
          id: 19,
          region: require('../assets2/19.png'),
          ville: 'Mandoul',
          suggestions: [
            {
              id: 19,
              label: 'Mandoul'
            },
            {
              id:1,
              label: 'Ennedi-Ouest'
            },
            {
              id:3,
              label: 'Logone Oriental'
            },
            {
              id:5,
              label: 'Mayo-Kebbi Ouest'
            },
          ]
          },

          {
          id: 20,
          region: require('../assets2/20.png'),
          ville: 'Mayo-Kebbi Ouest',
          suggestions: [
            {
              id: 20,
              label: 'Mayo-Kebbi Ouest'
            },
            {
              id:1,
              label: 'Ennedi-Est'
            },
            {
              id:3,
              label: 'Logone Oriental'
            },
            {
              id:5,
              label: 'Tiberti'
            },
          ]
          },

          {
          id: 21,
          region: require('../assets2/21.png'),
          ville: 'Logone Occidental',
          suggestions: [
            {
              id: 0,
              label: 'Logone Oriental'
            },
            {
              id:1,
              label: 'Ennedi-Est'
            },
            {
              id:21,
              label: 'Logone Occidental'
            },
            {
              id:5,
              label: 'Tiberti'
            },
          ]
          },

          {
          id: 22,
          region: require('../assets2/22.png'),
          ville: 'Logone Oriental',
          suggestions: [
            {
              id: 0,
              label: 'Logone Occidental'
            },
            {
              id:1,
              label: 'Ennedi-Est'
            },
            {
              id:22,
              label: 'Logone Oriental'
            },
            {
              id:5,
              label: 'Tiberti'
            },
          ]
          },
        ],
    } 
   
  }

refresh() {
  this.setState({
      refresh: !this.state.refresh,
  })
}

incrementIsActive = (id) => {
  if(this.state.is_Active < 22 && id === this.state.is_Active){
    Alert.alert("Reponse", "Bonne Reponse")
    this.setState({
      is_Active: this.state.is_Active + 1
    })
  } else {
    Alert.alert("Reponse", "mauvaise Reponse")
  }
  
}
  getData(){
      this.state.images.map((item, key) => {
        setTimeout(() => {
          this.setState({
            [item.id]:item.name
           
          })
        }, 5000)
       })
    
 }
 componentDidUpdate(prevProps) {
   this.getData;
      }

componentDidMount(){
    this.getData;
    // toggle()
}
 
componentWillUnmount() {
    this.getData;
}

  render() {
    // const { navigation, route } = this.props;
    // console.log('ggggggggg', route.params)    
    return (
      <View style={styles.container}>
        <View style={styles.top}><Text style={{flexDirection: 'row-reverse'}}></Text></View>
        <View style={styles.middle}>
          <View style={{flexDirection: 'row', flex: 1, marginTop: '-7.5%', marginLeft: '2%'}}>

        <View>
          <TouchableOpacity onPress={this.region0Alert} >
            <Image source={this.state.images[0].region} style={[styles.image0, {right: -76, bottom: -27, }, this.state.images[0].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={this.region1Alert}>
            <Image source={this.state.images[1].region} style={[styles.image1, { top: 74, left: -30 }, this.state.images[1].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity
          onPress={this.region2Alert} >
            <Image source={this.state.images[2].region} style={[styles.image2, { left: -85, bottom: -101.9 }, this.state.images[2].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
        </TouchableOpacity> 
        </View>

        <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[3].region} style={[styles.image3, { left: -95.3, bottom: -121.99 }, this.state.images[3].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[4].region} style={[styles.image4, { left: -397, bottom: -224.9 }, this.state.images[4].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[5].region} style={[styles.image5, { left: -429, bottom: -241.5 }, this.state.images[5].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
             <Image source={this.state.images[6].region} style={[styles.image6, { left: -460, bottom: -245 }, this.state.images[6].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[7].region} style={[styles.image7, { left: -469.9, bottom: -248.4 }, this.state.images[7].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[8].region} style={[styles.image8, { left: -557.5, bottom: -294 }, this.state.images[8].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[9].region} style={[styles.image9, { left: -815, bottom: -290 }, this.state.images[9].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[10].region} style={[styles.image10, { left: -845.8, bottom: -323.6 }, this.state.images[10].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[11].region} style={[styles.image11, { left: -950, bottom: -335.4 }, this.state.images[11].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[12].region} style={[styles.image12, { left: -862, bottom: -333.6 }, this.state.images[12].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[13].region} style={[styles.image13, { left: -873.6, bottom: -333 }, this.state.images[13].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>
         
         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[14].region} style={[styles.image14, { left: -1107, bottom: -351 }, this.state.images[14].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[15].region} style={[styles.image15, { left: -1112.3, bottom: -404.5 }, this.state.images[15].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[16].region} style={[styles.image16, { left: -1144.9, bottom: -360.9 }, this.state.images[16].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[17].region} style={[styles.image17, { left: -1369.9, bottom: -387 }, this.state.images[17].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[18].region} style={[styles.image18, { left: -1394.8, bottom: -414.5 }, this.state.images[18].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[19].region} style={[styles.image19, { left: -1410.9, bottom: -432 }, this.state.images[19].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[20].region} style={[styles.image20, { left: -1530.9, bottom: -421 }, this.state.images[20].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[21].region} style={[styles.image21, { left: -1539, bottom: -443 }, this.state.images[21].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
         </View>

         <View>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.images[22].region} style={[styles.image22, { left: -1579.9, bottom: -445 }, this.state.images[22].id === this.state.is_Active ? {backgroundColor: 'red'}:{}]}/>
          </TouchableOpacity>
        </View>
        </View>
      </View>
          <View style={styles.bottom}>
            <View style={styles.FlatListContainer}>
            <FlatList
                data={this.state.images[this.state.is_Active].suggestions} // set render data in flatlist
                numColumns={2} 
                columnWrapperStyle={styles.row}
                keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string 
                renderItem={({ item }) =>
                  <TouchableOpacity  color={item ? '#FFFFFF' : 'red'} //  color of TouchableOpacity will change according to selection

                    style={
                      item
                        // style when button is selected
                        ? {
                          margin: 5, 
                          borderRadius: 5, 
                          backgroundColor: 'red',
                          justifyContent: 'center',
                          borderRadius: 30,
                          shadowOpacity: 0.29,
                          shadowRadius: 4.65,
                          elevation: 2,
                          padding: 10,
                          width: 150,
                          height: 35,
                          backgroundColor: 'red',
                        }
                        // style when button is unSelected
                        : {
                          margin: 5, 
                          borderRadius: 2, 
                          // backgroundColor: 'red',
                          justifyContent: 'center',
                          borderRadius: 30,
                          shadowOpacity: 0.29,
                          shadowRadius: 4.65,
                          elevation: 2,
                          padding: 10,
                          width: 150,
                          height: 35,
                          color: '#FFFFFF',
                          backgroundColor: '#FFFFFF',
                        }
                    }
                    // onPress will call the function when button is clicked
                    onPress={() => this.incrementIsActive(item.id)}><Text style={styles.custom}>{item.label}</Text>
                  </TouchableOpacity>
                } />
            </View>
        </View>
      </View>
    );
    console.log(item.id) 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    // padding: 0,
    // margin: 10,
    width: width,
    height: height
  },
  top: {
    flex: 0.5,
    width: width,
    height: height
    // backgroundColor: "white",
    // borderWidth: 2,
  },
  middle: {
    flex: 5,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    flexDirection: "row",
    // width: width,
    // height: height
  },
  bottom: {
    flex: 1,
    // flexDirection: "row",
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 8,
    marginTop: 2,
    width: width,
    height: height
  },
  // container1: {
  //   flex: 5,
  //   justifyContent: 'center',
  //   alignItems: "center",
  //   flexDirection: "row"
  // },
  image0: {
    resizeMode: 'contain',
    height: 192.46,
    width: 120.6,
    },
  image1: {
    resizeMode: 'contain',
    height: 195.33,
    width: 162.66,
    },
    image2: {
      resizeMode: 'contain',
      height: 160.06,
      width: 92.86,
      
      },
    image3: {
      resizeMode: 'contain',
      height: 140.86,
      width: 58.73,
      },
      image4: {
        resizeMode: 'contain',
        height: 107,
        width: 88.86,
        },
      image5: {
        resizeMode: 'contain',
        height: 94.13,
        width: 70.8,
        },
      image6: {
        resizeMode: 'contain',
        height: 116.33,
        width: 99.26,
        },
      image7: {
        resizeMode: 'contain',
        height: 61.06,
        width: 86.53,
        },
      image8: {
        resizeMode: 'contain',
        height: 52.33,
        width: 67.26,
        },
      image9: {
        resizeMode: 'contain',
        height: 44.86,
        width: 61.93,
        },
      image10: {
        resizeMode: 'contain',
        height: 56.6,
        width: 91.93,
        },
      image11: {
        resizeMode: 'contain',
        height: 5.13,
        width: 5.13,
        },
      image12: {
        resizeMode: 'contain',
        height: 93.93,
        width: 85.53,
        },
      image13: {
        resizeMode: 'contain',
        height: 63,
        width: 91.8,
        },
      image14: {
        resizeMode: 'contain',
        height: 76.86,
        width: 74.93,
        },
      image15: {
        resizeMode: 'contain',
        height: 75.8,
        width: 76.2,
        },
      image16: {
        resizeMode: 'contain',
        height: 88.8,
        width: 104.66,
        },
      image17: {
        resizeMode: 'contain',
        height: 58.06,
        width: 44.86,
        },
      image18: {
        resizeMode: 'contain',
        height: 37.86,
        width: 63,
        },
      image19: {
        resizeMode: 'contain',
        height: 53.46,
        width: 34.26,
        },
      image20: {
        resizeMode: 'contain',
        height: 45.46,
        width: 42.73,
        },
      image21: {
        resizeMode: 'contain',
        height: 29.93,
        width: 39.53,
        },
      image22: {
        resizeMode: 'contain',
        height: 51.26,
        width: 59.8,
      },
      FlatListContainer: {
      width:"100%",
      height: 500,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      },
      listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      row: {
        flex: 1,
        justifyContent: "space-around",
        
      },
      custom: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 12,
        textAlign: 'center',
      }
});

export default Profile2;