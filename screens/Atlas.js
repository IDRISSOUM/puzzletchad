import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Alert, useWindowDimensions, SafeAreaView } from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const { width, height } = Dimensions.get('screen');
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
  region15Alert = () =>
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
  region17Alert = () =>
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
  region18Alert = () =>
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
  region19Alert = () =>
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
  region20Alert = () =>
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
  region21Alert = () =>
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
  this.getData;
  console.log({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  })
}

componentWillUnmount() {
  this.getData;
  
}

ccomponentDidUpdate(){
  this.getData;
}

  render() {
    
    return(
      <SafeAreaView style={{backgroundColor: '#22427CFF'}}>
        <Text style={{fontSize: 13, fontWeight: '500', color: 'white', margin: 10}}> Carte interactive pour l'apprentissage des provinces du Tchad {'\n'} Appuyez sur une province pour en savoir plus </Text>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1, marginTop: '5%', marginLeft: '5%'}} >
        <TouchableOpacity onPress={this.region0Alert}  style={{
          right: -60,
          bottom: -30,
         
        }}>
            <Image source={this.state.image0} style={styles.image0}/>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={this.region1Alert} style={{
          top: 78,
          left: -62,
          
          }}>
            <Image source={this.state.image1} style={styles.image1}/>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={this.region2Alert} style={{
            left: -125.8,
            bottom: -110,
  
            }}>
            <Image source={this.state.image2} style={styles.image2}/>
        </TouchableOpacity>

        
          <TouchableOpacity
          style={{
            left: -136.5,
            bottom: -133
            }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image3} style={styles.image3} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -485,
            bottom: -251
  
             }}
            onPress={this.region3Alert} >
              <Image source={this.state.image4} style={styles.image4} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -520.5,
            bottom: -270
   
              }}
            onPress={this.region4Alert} >
              <Image source={this.state.image5} style={styles.image5} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -556,
            bottom: -275
   
              }}
            onPress={this.region5Alert} >
              <Image source={this.state.image6} style={styles.image6} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -566.8,
            bottom: -279
             
            }}
            onPress={this.region6Alert} >
              <Image source={this.state.image7} style={styles.image7} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -667.7,
            bottom: -331
  
           }}
            onPress={this.region7Alert} >
              <Image source={this.state.image8} style={styles.image8} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -963.7,
            bottom: -327.5

         }}
            onPress={this.region8Alert} >
              <Image source={this.state.image9} style={styles.image9} />
          </TouchableOpacity>

        
          <TouchableOpacity
          style={{
            left: -999.5,
            bottom: -364.99
         }}
            onPress={this.region9Alert} >
              <Image source={this.state.image10} style={styles.image10} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1111,
            bottom: -375         
            }}
            onPress={this.inconnu} >
              <Image source={this.state.image11} style={styles.image11} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1020,
            bottom: -376

         }}
            onPress={this.region10Alert} >
              <Image source={this.state.image12} style={styles.image12} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1033,
            bottom: -376.9

         }}
            onPress={this.region12Alert} >
              <Image source={this.state.image13} style={styles.image13} />
          </TouchableOpacity>
         
         
          <TouchableOpacity
          style={{
            left: -1300.2,
            bottom: -396.9

         }}
            onPress={this.region13Alert} >
              <Image source={this.state.image14} style={styles.image14} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1307,
            bottom: -458

         }}
            onPress={this.region12Alert} >
              <Image source={this.state.image15} style={styles.image15} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1343.4,
            bottom: -408
 
          }}
            onPress={this.region11Alert} >
              <Image source={this.state.image16} style={styles.image16} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1602,
            bottom: -438
 
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image17} style={styles.image17} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1629.7,
            bottom: -469.5
 
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image18} style={styles.image18} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1648,
            bottom: -489.6
 
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image19} style={styles.image19} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1788,
            bottom: -479
 
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image20} style={styles.image20} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1794,
            bottom: -503
            
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image21} style={styles.image21} />
          </TouchableOpacity>

         
          <TouchableOpacity
          style={{
            left: -1840,
            bottom: -505
 
          }}
            onPress={this.createTwoButtonAlert} >
              <Image source={this.state.image22} style={styles.image22} />
          </TouchableOpacity>
          </View>
         </View>
      </SafeAreaView>
    ) 
  }
  }

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: 'red',
    width: width,
    height: height,

    },
  image0: {
    resizeMode: 'contain',
    height: 210.53,
    width: 139.15,
    },
  image1: {
    resizeMode: 'contain',
    height: 225,
    width: 187,
    },
image2: {
  resizeMode: 'contain',
  height: 184,
  width: 107,
  
  },
image3: {
  resizeMode: 'contain',
  height: 162,
  width: 67,
  },
  image4: {
    resizeMode: 'contain',
    height: 123,
    width: 102,
    },
  image5: {
    resizeMode: 'contain',
    height: 108,
    width: 81,
    },
  image6: {
    resizeMode: 'contain',
    height: 134,
    width: 114,
    },
  image7: {
    resizeMode: 'contain',
    height: 70,
    width: 99,
    },
  image8: {
    resizeMode: 'contain',
    height: 60,
    width: 77,
    },
  image9: {
    resizeMode: 'contain',
    height: 51,
    width: 71,
    },
  image10: {
    resizeMode: 'contain',
    height: 65,
    width: 106,
    },
  image11: {
    resizeMode: 'contain',
    height: 8,
    width: 8,
    },
  image12: {
    resizeMode: 'contain',
    height: 108,
    width: 98,
    },
  image13: {
    resizeMode: 'contain',
    height: 72,
    width: 105,
    },
  image14: {
    resizeMode: 'contain',
    height: 88,
    width: 86,
    },
  image15: {
    resizeMode: 'contain',
    height: 87,
    width: 87,
    },
  image16: {
    resizeMode: 'contain',
    height: 102,
    width: 120,
    },
  image17: {
    resizeMode: 'contain',
    height: 67,
    width: 51,
    },
  image18: {
    resizeMode: 'contain',
    height: 43,
    width: 72,
    },
  image19: {
    resizeMode: 'contain',
    height: 61,
    width: 39,
    },
  image20: {
    resizeMode: 'contain',
    height: 52,
    width: 49,
    },
  image21: {
    resizeMode: 'contain',
    height: 34,
    width: 45,
    },
  image22: {
    resizeMode: 'contain',
    height: 59,
    width: 69,
  }

});