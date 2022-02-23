import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
export const { width, height} = Dimensions.get('window');
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import SetPage from '../screens/SetPage'

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      selectedFruits: [],
      images: [
        {
          id: 0,
          region: '../assets2/0.png',
          ville: 'Tiberti'
          },
          {
          id: 1,
          region: '../assets2/1.png',
          ville: 'Borkou'
          },
          {
          id: 2,
          region: '../assets2/2.png',
          ville: 'Ennedi-Ouest'
          },
          {
          id: 3,
          region: '../assets2/3.png',
          ville: 'Ennedi-Est'
          },
          {
          id: 4,
          region: '../assets2/4.png',
          ville: 'Kanem'
          },
          {
          id: 5,
          region: '../assets2/5.png',
          ville: 'Barh El Gazel'
          },
          {
          id: 6,
          region: '../assets2/6.png',
          ville: 'Bartha'
          },
          {
          id: 7,
          region: '../assets2/7.png',
          ville: 'Ouaddaï'
          },
          {
          id: 8,
          region: '../assets2/8.png',
          ville: 'Lac'
          },
          {
          id: 9,
          region:'../assets2/9.png',
          ville: 'Hadjer-Lamis'
          },
        
          {
          id: 10,
          region: '../assets2/10.png',
          ville: 'Djamena'
          },
          {
          id: 11,
          region: '../assets2/12.png',
          ville: 'Guéra'
          },
          {
          id: 12,
          region: '../assets2/13.png',
          ville: 'Sila'
          },
          {
          id: 13,
          region: '../assets2/14.png',
          ville: 'Chari-Baguirmi'
          },
          {
          id: 14,
          region: '../assets2/15.png',
          ville: 'Moyen-Chari'
          },
          {
          id: 15,
          region: '../assets2/16.png',
          ville: 'Salamat'
          },
        ],
        image0: require('../assets2/0.png'),
        image1: require('../assets2/1.png'),
        image2: require('../assets2/2.png'),
        image3: require('../assets2/3.png'),
        image4: require('../assets2/4.png'),
        image5: require('../assets2/5.png'),
        image6: require('../assets2/6.png'),
        image7: require('../assets2/7.png'),
        image8: require('../assets2/8.png'),
        image9: require('../assets2/9.png'),
        image10: require('../assets2/10.png'),
        image11: require('../assets2/11.png'),
        
        image12: require('../assets2/12.png'),
        image13: require('../assets2/13.png'),
        image14: require('../assets2/14.png'),
        image15: require('../assets2/15.png'),
        image16: require('../assets2/16.png'),
        
        image17: require('../assets2/17.png'),
        image18: require('../assets2/18.png'),
        image19: require('../assets2/19.png'),
        image20: require('../assets2/20.png'),
        image21: require('../assets2/21.png'),
        image22: require('../assets2/22.png'),   
        
    }
    
  }

onPressHandler(id) {
    let images = [...this.state.images];           // making copy of renderData data locally
    let selectedFruits = [...this.state.selectedFruits];   // making copy of selectedFruits data locally

    for (let data of images) {
      if (data.id == id) {

        data.selected = (data.selected == null) ? true : !data.selected; // making button selcted or not using boolen

        if (data.selected) {        
          selectedFruits.push(data.ville);  // push selected fruit value to array
        } else {
          selectedFruits = this.arrayRemove(this.state.selectedFruits, data.ville)  // remove unselected fruit from array
        }
        break;
      }
      // console.log(renderData.length)
      console.log(selectedFruits.length)
    }

    this.setState({ images });  // updating current selected button data to state
    this.setState({ selectedFruits });  // updating current selected Fruits data to state
  }


  // function which remove value from array and return  
  arrayRemove(arr, value) {

    return arr.filter(function (geeks) {
      return geeks != value;

    });
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
 

componentDidMount(){
  this.getData();
  
}
 
componentWillUnmount() {
  this.getData();
  
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}><Text style={{flexDirection: 'row-reverse'}}></Text></View>
        <View style={styles.middle}>
        <View 
        style={{
          right: -76,
          bottom: -27,
        }}
        >
        <TouchableOpacity onPress={this.region0Alert} >
            <Image source={this.state.image0} style={styles.image0}/>
        </TouchableOpacity>
        </View>

        <View style={{
          top: 74,
          left: -30, 
          }}>
        <TouchableOpacity onPress={this.region1Alert}>
            <Image source={this.state.image1} style={styles.image1}/>
        </TouchableOpacity>
        </View>

        <View style={{
          left: -85,
          bottom: -101.9,

          }}>
        <TouchableOpacity
          onPress={this.region2Alert} >
            <Image source={this.state.image2} style={styles.image2}/>
        </TouchableOpacity> 
        </View>

        <View style={{
          left: -95.3,
          bottom: -121.9
          }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image3} style={styles.image3} />
          </TouchableOpacity>
         </View>

         <View style={{
          left: -397,
          bottom: -224.9

           }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image4} style={styles.image4} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -429,
         bottom: -241.5

           }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image5} style={styles.image5} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -460,
         bottom: -245

           }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image6} style={styles.image6} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -469.9,
         bottom: -248.4
          
         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image7} style={styles.image7} />
          </TouchableOpacity>
         </View>

         <View style={{
          left: -557.5,
          bottom: -294

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image8} style={styles.image8} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -815,
            bottom: -290

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image9} style={styles.image9} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -845.8,
            bottom: -323.6
         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image10} style={styles.image10} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -950,
            bottom: -335.4         
            }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image11} style={styles.image11} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -862,
            bottom: -333.6

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image12} style={styles.image12} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -873.6,
            bottom: -333

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image13} style={styles.image13} />
          </TouchableOpacity>
         </View>
         
         <View style={{
            left: -1107,
            bottom: -351

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image14} style={styles.image14} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1112.3,
            bottom: -404.5

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image15} style={styles.image15} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1144.9,
           bottom: -360.9

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image16} style={styles.image16} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1369.9,
           bottom: -387

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image17} style={styles.image17} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1394.8,
           bottom: -414.5

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image18} style={styles.image18} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1410.9,
           bottom: -432

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image19} style={styles.image19} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1530.9,
           bottom: -421

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image20} style={styles.image20} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1539,
           bottom: -443
           
         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image21} style={styles.image21} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1579.9,
           bottom: -445

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image22} style={styles.image22} />
          </TouchableOpacity>
         </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.FlatListContainer}>
              <FlatList
                data={this.state.images} // set render data in flatlist
                numColumns={2} 
                columnWrapperStyle={styles.row}
                keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string 
                renderItem={({ item }) =>
                  <TouchableOpacity
                    color={item.selected == true ? '#ffffff' : '#e1601f'} // color of TouchableOpacity will change according to selection

                    style={
                      item.selected == true
                        // style when button is selected
                        ? {
                          margin: 5, borderRadius: 5,backgroundColor: '#e1601f',
                        }
                        // style when button is unSelected
                        : {
                          margin: 5, borderRadius: 2, backgroundColor: '#e1601f',
                        }
                    }
                    // onPress will call the function when button is clicked
                    onPress={() => this.onPressHandler(item.id)}><Text>{item.ville}</Text>
                  </TouchableOpacity>

                } />
            </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 0,
    margin: 10,
  },
  top: {
    flex: 0.5,
    // backgroundColor: "white",
    // borderWidth: 2,
  },
  middle: {
    flex: 5,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    flexDirection: "row",
  },
  bottom: {
    flex: 1,
    // flexDirection: "row",
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
      flex: 1
      },
      listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      row: {
        flex: 1,
        justifyContent: "space-around"
      }
});

export default Profil;