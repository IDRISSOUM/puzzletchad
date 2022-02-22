import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

const Data = [
  {
    id: 1,
    first_name: 'Apple',
  },
  {
    id: 2,
    first_name: 'Mango',
  },
  {
    id: 3,
    first_name: 'Pappaya',
  },
  {
    id: 4,
    first_name: 'Orange',
  },
  // {
  //   id: 5,
  //   first_name: 'Banana',
  // },
  // {
  //   id: 6,
  //   first_name: 'Kiwi',
  // },


];

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      renderData: Data, // decelaring the fruits list data
      selectedFruits: []

    }
  }

  // function will call when Button clicked

  onPressHandler(id) {
    let renderData = [...this.state.renderData];           // making copy of renderData data locally
    let selectedFruits = [...this.state.selectedFruits];   // making copy of selectedFruits data locally

    for (let data of renderData) {
      if (data.id == id) {

        data.selected = (data.selected == null) ? true : !data.selected; // making button selcted or not using boolen

        if (data.selected) {
          selectedFruits.push(data.first_name);  // push selected fruit value to array
        } else {
          selectedFruits = this.arrayRemove(this.state.selectedFruits, data.first_name)  // remove unselected fruit from array
        }
        break;
      }
    }

    this.setState({ renderData });  // updating current selected button data to state
    this.setState({ selectedFruits });  // updating current selected Fruits data to state
  }


  // function which remove value from array and return  
  arrayRemove(arr, value) {

    return arr.filter(function (geeks) {
      return geeks != value;

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Text style={styles.titleStyle}>Select fruits</Text>
          <View style={styles.FlatListContainer}>
            <FlatList showsHorizontalScrollIndicator={true}
              data={this.state.renderData} // set render data in flatlist

              keyExtractor={item => item.id.toString()} // keyExtractor convert INT  'item.id' value to string 
              renderItem={({ item }) =>

                <Button mode="outlined"
                  color={item.selected == true ? '#ffffff' : '#e1601f'} // color of button will change according to selection

                  style={
                    item.selected == true
                      // style when button is selected
                      ? {
                        margin: 5, borderRadius: 2,backgroundColor: '#e1601f',
                      }
                      // style when button is unSelected
                      : {
                        margin: 5, borderRadius: 2, backgroundColor: '#ffffff',
                      }
                  }
                  // onPress will call the function when button is clicked
                  onPress={() => this.onPressHandler(item.id)} >{item.first_name}
                </Button>

              } />
          </View>
          <View>
          <Text >{this.state.selectedFruits}  </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "row"
  },
  titleStyle: {
    margin: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#161616",
    letterSpacing: 0.36,
    textAlign: "center",
    alignSelf: "stretch",
  },
  FlatListContainer: {
    width:"100%",
    height: 500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

// import React from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';

// import AwesomeAlert from 'react-native-awesome-alerts';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//         showAlert: false,
//         images: [
//             {
//               id: "0",
//               name: '../assets2/0.png',
//               },
//               {
//               id: "1",
//               name: '../assets2/1.png',
//               },
//               {
//               id: "2",
//               name: '../assets2/2.png',
//               },
//               {
//               id: "3",
//               name: '../assets2/3.png',
//               },
//               {
//               id: "4",
//               name: '../assets2/4.png',
//               },
//               {
//               id: "5",
//               name: '../assets2/5.png',
//               },
//               {
//               id: "6",
//               name: '../assets2/6.png',
//               },
//               {
//               id: "7",
//               name: '../assets2/7.png',
//               },
//               {
//               id: "8",
//               name: '../assets2/8.png',
//               },
//               {
//               id: "9",
//               name:'../assets2/9.png',
//               },
            
//               {
//               id: "10",
//               name: '../assets2/10.png',
//               },
//               {
//               id: "11",
//               name: '../assets2/12.png',
//               },
//               {
//               id: "12",
//               name: '../assets2/13.png',
//               },
//               {
//               id: "13",
//               name: '../assets2/14.png',
//               },
//               {
//               id: "14",
//               name: '../assets2/15.png',
//               },
//               {
//               id: "15",
//               name: '../assets2/16.png',
//               },
//             ],
//             image0: require('../assets2/0.png'),
//             image1: require('../assets2/1.png'),
//             image2: require('../assets2/2.png'),
//             image3: require('../assets2/3.png'),
//             image4: require('../assets2/4.png'),
//             image5: require('../assets2/5.png'),
//             image6: require('../assets2/6.png'),
//             image7: require('../assets2/7.png'),
//             image8: require('../assets2/8.png'),
//             image9: require('../assets2/9.png'),
//             image10: require('../assets2/10.png'),
//             image11: require('../assets2/11.png'),
            
//             image12: require('../assets2/12.png'),
//             image13: require('../assets2/13.png'),
//             image14: require('../assets2/14.png'),
//             image15: require('../assets2/15.png'),
//             image16: require('../assets2/16.png'),
            
//             image17: require('../assets2/17.png'),
//             image18: require('../assets2/18.png'),
//             image19: require('../assets2/19.png'),
//             image20: require('../assets2/20.png'),
//             image21: require('../assets2/21.png'),
//             image22: require('../assets2/22.png'),
          
             
//     };
//   };

//   getData(){
//     this.state.images.map((item, key) => {
//      setTimeout(() => {
//        this.setState({
//          [item.id]:item.name
        
//        })
//        // console.log(item.name)
//        // console.log(item.id)
//      }, 5000)
//     })
   
//  }
 
//  componentDidMount(){
//    this.getData();
//    console.log({
//      width: Dimensions.get('window').width,
//      height: Dimensions.get('window').height
//    })
//  }
 
//  componentWillUnmount() {
//    this.getData();
   
//  }
 
//   showAlert = () => {
//     this.setState({
//       showAlert: true
//     });
//   };

//   hideAlert = () => {
//     this.setState({
//       showAlert: false
//     });
//   };

//   render() {
//     const {showAlert} = this.state;

//     return (
//       <View style={styles.container}>

            
//         <TouchableOpacity onPress={() => {
//           this.showAlert();
//         }}>
//           <View style={styles.button}>
//           <Image source={this.state.image0} style={styles.image0}/>
//           </View>
//         </TouchableOpacity>

//         <AwesomeAlert
//           show={showAlert}
//           showProgress={false}
//           title="Region de Hadjer-Lamis"
//           message="La Province du Hadjer-Lamis est une des 23 provinces du Tchad. Son chef-lieu est Massakory. Comptant 562 957 habitants et une sperficie de 31 426 km²"
//           closeOnTouchOutside={true}
//           closeOnHardwareBackPress={false}
//           showCancelButton={false}
//           showConfirmButton={true}
//           cancelText="Retour"
//           confirmText="Ok"
//           confirmButtonColor="#DD6B55"
//           onCancelPressed={() => {
//             this.hideAlert();
//           }}
//           onConfirmPressed={() => {
//             this.hideAlert();
//           }}
//         />
//       </View>
//     );
//   };
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     flex: 1,
//     // flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // backgroundColor: '#fff',
//   },
//   button: {
//     margin: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 7,
//     borderRadius: 5,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 15
//   },
//   image0: {
//     resizeMode: 'contain',
//     height: 192.46,
//     width: 120.6,
//     },
// });