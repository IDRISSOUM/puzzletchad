import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Alert, useWindowDimensions } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = tutorial2Spec;
import { tutorial2Spec } from '../config/theme';


export default class Atlas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      window,
      screen,
      showAlert: false,
      images: [
        {
          id: "0",
          name: '../assets2/0.png',
          },
          {
          id: "1",
          name: '../assets2/1.png',
          },
          {
          id: "2",
          name: '../assets2/2.png',
          },
          {
          id: "3",
          name: '../assets2/3.png',
          },
          {
          id: "4",
          name: '../assets2/4.png',
          },
          {
          id: "5",
          name: '../assets2/5.png',
          },
          {
          id: "6",
          name: '../assets2/6.png',
          },
          {
          id: "7",
          name: '../assets2/7.png',
          },
          {
          id: "8",
          name: '../assets2/8.png',
          },
          {
          id: "9",
          name:'../assets2/9.png',
          },
        
          {
          id: "10",
          name: '../assets2/10.png',
          },
          {
          id: "11",
          name: '../assets2/12.png',
          },
          {
          id: "12",
          name: '../assets2/13.png',
          },
          {
          id: "13",
          name: '../assets2/14.png',
          },
          {
          id: "14",
          name: '../assets2/15.png',
          },
          {
          id: "15",
          name: '../assets2/16.png',
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

region1Alert = () =>
  Alert.alert(
    "Region de Borkou",
    "Le Borkou est une des 23 provinces du Tchad dont le chef-lieu est Faya-Largeau. Elle a été créée le 19 février 2008 par démembrement de l'ancienne région du Borkou-Ennedi-Tibesti. Entre 2002 et février 2008, le Borkou a été l'un des 4 départements composant la région du Borkou-Ennedi-Tibesti. Comptant une population de 97 251 habitants et une perficie de 241 000 km²",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region0Alert = () =>
  Alert.alert(
    "Region de Tibesti",
    "Le Tibesti est l'une des 23 régions du Tchad dont le chef-lieu est Bardaï. Elle a été créée le 19 février 2008 par démembrement de l'ancienne région du Borkou-Ennedi-Tibesti. Entre 2002 et février 2008, le Tibesti a été l'un des trois départements composant la région du Borkou-Ennedi-Tibesti. Comptant 21 970 habitants et une sperficie de 220 237 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region2Alert = () =>
  Alert.alert(
    "Region de Ennedi",
    "L'Ennedi est une ancienne région administrative du Tchad dont le chef-lieu est Fada. Elle a été créée le 19 février 2008 par démembrement de l'ancienne région du Borkou-Ennedi-Tibesti. La région Ennedi est elle-même, démembrée le 4 septembre 2012 en deux régions Ennedi Est et Ennedi Ouest. La region de Ennedi compte une population de 113 862 habitants avec une superficie de 85 491 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  region3Alert = () =>
  Alert.alert(
    "Region de Kanem",
    "Le Kanem est une des 23 provinces du Tchad dont le chef-lieu est Mao. Elle correspond à l'ancienne préfecture du Kanem. La region de Kanem compte une population 354 603 habitants avec une superficie de 73 665 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region4Alert = () =>
  Alert.alert(
    "Region de Barth El Gazel",
    "Le Barh el Gazel est une des vingt-trois régions administratives du Tchad. Son chef-lieu est Moussoro. Comptant 260 865 habitants et une sperficie de 50 860 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region5Alert = () =>
  Alert.alert(
    "Region de Batha",
    "Le Batha est une des 23 régions du Tchad dont le chef-lieu est Ati. Comptant 527 031 habitants et une sperficie de 88 800 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region6Alert = () =>
  Alert.alert(
    "Region de Wadi Fira",
    "Le Wadi Fira est une des 23 régions du Tchad dont le chef-lieu est Biltine. Le Wadi Fira est peuplé majoritairement des Mimi, Zaghawa et Tama. Elle correspond à l'ancienne préfecture de Biltine. Comptant 494 933 habitants et une sperficie de 54 310 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region7Alert = () =>
  Alert.alert(
    "Region de Ouaddaï",
    "Le Ouaddaï est une des 23 régions du Tchad, dont le chef-lieu est Abéché. Elle correspond à l'ancienne préfecture du Ouaddaï. Comptant 731 679 habitants et une sperficie de 29 980 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region8Alert = () =>
  Alert.alert(
    "Region de Lac",
    "Le lac Tchad est un grand lac peu profond d'Afrique dont les eaux sont douces, ce qui est rare pour un lac endoréique, c'est-à-dire dont les eaux ne rejoignent pas l'océan. Comptant 451 369 habitants et une sperficie de 19 915 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region9Alert = () =>
  Alert.alert(
    "Region de Hadjer-Lamis",
    "La Province du Hadjer-Lamis est une des 23 provinces du Tchad. Son chef-lieu est Massakory. Comptant 562 957 habitants et une sperficie de 31 426 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region10Alert = () =>
  Alert.alert(
    "Region de Guéra",
    "Le Guéra est l'une des 23 Provinces du Tchad et son chef-lieu est Mongo. Elle correspond à l'ancienne préfecture du Guéra. Comptant 553 795 habitants et une sperficie de 61 279 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region11Alert = () =>
  Alert.alert(
    "Region de Salamat",
    "Le Salamat est une des 23 régions du Tchad, elle a pour chef-lieu Am Timan. La région est traversée du nord-est vers le sud-ouest par le cours d'eau Bahr Azoum, appelé Bahr Salamat sur son cours inférieur. Comptant 308 605 habitants et une sperficie de 63 000 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region12Alert = () =>
  Alert.alert(
    "Region de Sila",
    "La région du Sila est une des 23 régions du Tchad. Son chef-lieu est Goz Beïda. Comptant 289 776 habitants et une sperficie de 35 890 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region13Alert = () =>
  Alert.alert(
    "Region de N'Djaména",
    "N'Djaména est la capitale administrative et la plus grande ville de la république du Tchad. Sa population compte plus de 1 243 994 habitants et une sperficie de 395 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  region14Alert = () =>
  Alert.alert(
    "Region de Moyen-Chari",
    "Le Moyen-Chari est une des 23 régions du Tchad créée à la suite du décret N° 419/PR/MAT/02 dont le chef-lieu est Sarh. Comptant 598 284 habitants et une sperficie de 41 460 km²",
    [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "retour"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

getData(){
   this.state.images.map((item, key) => {
    setTimeout(() => {
      this.setState({
        [item.id]:item.name
       
      })
      // console.log(item.name)
      // console.log(item.id)
    }, 5000)
   })
  
}

componentDidMount(){
  this.getData();
  console.log({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  })
}

componentWillUnmount() {
  this.getData();
  
}

  render() {
    return(
      <View style={styles.container}>

        <View 
        style={{
          right: -7,
          bottom: -3,
        }}
        >
        <TouchableOpacity onPress={this.region0Alert} >
            <Image source={this.state.image0} style={styles.image0}/>
        </TouchableOpacity>
        </View>

        <View style={{
          top: 65,
          left: -151.8, 
          }}>
        <TouchableOpacity onPress={this.region1Alert}>
            <Image source={this.state.image1} style={styles.image1}/>
        </TouchableOpacity>
        </View>

        <View style={{
          left: -234,
          bottom: -106.5,

          }}>
        <TouchableOpacity
          onPress={this.region2Alert} >
            <Image source={this.state.image2} style={styles.image2}/>
        </TouchableOpacity> 
        </View>

        <View style={{
          left: -249,
          bottom: -136
          }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image3} style={styles.image3} />
          </TouchableOpacity>
         </View>

         <View style={{
          left: -704,
          bottom: -291

           }}>
          <TouchableOpacity
            onPress={this.region3Alert} >
              <Image source={this.state.image4} style={styles.image4} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -752,
         bottom: -315.5

           }}>
          <TouchableOpacity
            onPress={this.region4Alert} >
              <Image source={this.state.image5} style={styles.image5} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -798,
         bottom: -323

           }}>
          <TouchableOpacity
            onPress={this.region5Alert} >
              <Image source={this.state.image6} style={styles.image6} />
          </TouchableOpacity>
         </View>

         <View style={{
         left: -813,
         bottom: -326.5
          
         }}>
          <TouchableOpacity
            onPress={this.region6Alert} >
              <Image source={this.state.image7} style={styles.image7} />
          </TouchableOpacity>
         </View>

         <View style={{
          left: -943.8,
          bottom: -395.2

         }}>
          <TouchableOpacity
            onPress={this.region7Alert} >
              <Image source={this.state.image8} style={styles.image8} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1330,
            bottom: -391

         }}>
          <TouchableOpacity
            onPress={this.region8Alert} >
              <Image source={this.state.image9} style={styles.image9} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1377.8,
            bottom: -440.1
         }}>
          <TouchableOpacity
            onPress={this.region9Alert} >
              <Image source={this.state.image10} style={styles.image10} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1480,
            bottom: -480.4         
            }}>
          <TouchableOpacity
            onPress={this.inconnu} >
              <Image source={this.state.image11} style={styles.image11} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1405,
            bottom: -454.3

         }}>
          <TouchableOpacity
            onPress={this.region10Alert} >
              <Image source={this.state.image12} style={styles.image12} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1422,
            bottom: -455

         }}>
          <TouchableOpacity
            onPress={this.region12Alert} >
              <Image source={this.state.image13} style={styles.image13} />
          </TouchableOpacity>
         </View>
         
         <View style={{
            left: -1772,
            bottom: -481

         }}>
          <TouchableOpacity
            onPress={this.region13Alert} >
              <Image source={this.state.image14} style={styles.image14} />
          </TouchableOpacity>
         </View>

         <View style={{
            left: -1781.5,
            bottom: -560.5

         }}>
          <TouchableOpacity
            onPress={this.region12Alert} >
              <Image source={this.state.image15} style={styles.image15} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -1831,
           bottom: -494.5

         }}>
          <TouchableOpacity
            onPress={this.region11Alert} >
              <Image source={this.state.image16} style={styles.image16} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -2181.9,
           bottom: -534

         }}>
          <TouchableOpacity
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image17} style={styles.image17} />
          </TouchableOpacity>
         </View>

         <View style={{
           left: -2218.8,
           bottom: -570.5

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
    ) 
  }
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    // width: ITEM_WIDTH ,
    // height: ITEM_HEIGHT,
    backgroundColor: 'red' 
    },
  image0: {
    resizeMode: 'contain',
    height: 273.7,
    width: 180.9,
    },
  image1: {
    resizeMode: 'contain',
    height: 293,
    width: 244,
    },
    image2: {
      resizeMode: 'contain',
      height: 240.1,
      width: 139.3,
      
      },
    image3: {
      resizeMode: 'contain',
      height: 211.3,
      width: 88.1,
      },
      image4: {
        resizeMode: 'contain',
        height: 160.5,
        width: 133.3,
        },
      image5: {
        resizeMode: 'contain',
        height: 141.2,
        width: 106.2,
        },
      image6: {
        resizeMode: 'contain',
        height: 174.5,
        width: 148.9,
        },
      image7: {
        resizeMode: 'contain',
        height: 91.6,
        width: 129.8,
        },
      image8: {
        resizeMode: 'contain',
        height: 78.5,
        width: 100.9,
        },
      image9: {
        resizeMode: 'contain',
        height: 67.3,
        width: 92.9,
        },
      image10: {
        resizeMode: 'contain',
        height: 84.9,
        width: 137.9,
        },
      image11: {
        resizeMode: 'contain',
        height: 11.3,
        width: 11.3,
        },
      image12: {
        resizeMode: 'contain',
        height: 140.9,
        width: 128.3,
        },
      image13: {
        resizeMode: 'contain',
        height: 94.5,
        width: 137.7,
        },
      image14: {
        resizeMode: 'contain',
        height: 115.3,
        width: 112.4,
        },
      image15: {
        resizeMode: 'contain',
        height: 113.7,
        width: 114.3,
        },
      image16: {
        resizeMode: 'contain',
        height: 133.2,
        width: 157,
        },
      image17: {
        resizeMode: 'contain',
        height: 87.1,
        width: 94.5,
        },
      image18: {
        resizeMode: 'contain',
        height: 56.8,
        width: 63,
        },
      image19: {
        resizeMode: 'contain',
        height: 80.2,
        width: 51.4,
        },
      image20: {
        resizeMode: 'contain',
        height: 68.2,
        width: 64.1,
        },
      image21: {
        resizeMode: 'contain',
        height: 44.9,
        width: 59.3,
        },
      image22: {
        resizeMode: 'contain',
        height: 76.9,
        width: 89.7,
      }

});