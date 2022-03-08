/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


class Autre extends Component {
  render() {
    return (
      <ScrollView style={{
        maxWidth: 'auto',
         minWidth: 'auto',
        //  backgroundColor: 'red'
         }}>
        
      <View style={{
        flex: 1,
      }}>   
          <Text style={styles.innerText}>
            Une Plateforme Cartographique et Système d’Information Géographique (SIG), Géomatique, Collecte de Donnée Mobile (CDM), de la production de cartographies interactives, 
            l’analyse spatiale, de Développement des Applications web et mobile et de Conseils-Formation oriente dans le secteur de la Technologie d’information et de 
            Communication (TIC), de la santé, l’Eduction-Enseignement Supérieur, Géomarketing, Agriculture et Elevage, de la mine-Géologie, l’Environnement-Aménagement etc. :
          </Text>
      </View>
      <View style={{
        flex: 0.1,
      }}>
        <Image source={require('../assets/titre.png')} style={{ height: 190, width: 230, left: 40, resizeMode: 'cover',}}/>
      </View>
      <View style={{flex: 0.5,}}>
        <Text style={{fontStyle: "normal", fontSize: 20, flex: 3, fontFamily: "Cochin", fontWeight: "bold", textDecorationLine: 'underline', textAlign: 'center', }}>
              Notre mission
              {'\n'}
          </Text>
          <Text style={{flex: 1, fontSize: 16, fontStyle: "normal", padding: 10}}>
            Au sein de CARTOTCHAD nous faisons la promotion et vulgarisation de l’information géographique 
            et la rendre accessible au grand public. Particulièrement, est de :{'\n'}
          </Text>
      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Fournir aux utilisateurs des données cartographiques fiables et à jour</Text>
        </View>
      </View>
      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Offrez des produits et des services de qualité qui répondent aux besoins et aux attentes de nos clients afin d'obtenir une satisfaction globale des clients.</Text>
        </View>
      </View>

      <View style={{
        flex: 0.1,
      }}>
        <Image source={require('../assets/titre1.png')} style={{ height: 190, width: 230, left: 40, resizeMode: 'cover',}}/>
      </View>

          <Text style={{fontStyle: "normal", fontSize: 20, flex: 3, fontFamily: "Cochin", fontWeight: "bold", textDecorationLine: 'underline', textAlign: 'center', }}>
                  Nos Valeurs
              {'\n'}
          </Text>
          <Text style={{flex: 1, fontSize: 16, fontStyle: "normal", padding: 10}}>
            Les valeurs de la plateforme CARTOTCHAD s’articule autour de :{'\n'}
          </Text>

        <View style={ styles.row }>
          <View style={ styles.bullet }>
            <Text style={styles.puces}>{'\u2022' + " "}</Text>
          </View>
          <View style={ styles.bulletText }>
            <Text style={styles.font}>Professionalisme ;</Text>
          </View>
      </View>

      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={styles.puces}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>L’innovation ;</Text>
        </View>
      </View>

      <View style={ styles.row }>
          <View style={ styles.bullet }>
            <Text style={styles.puces}>{'\u2022' + " "}</Text>
          </View>
          <View style={ styles.bulletText }>
            <Text style={styles.font}>La Flexibilité ;</Text>
          </View>
      </View>

      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={styles.puces}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Travail d’équipe.</Text>
        </View>
      </View>

      </View>
        
      </ScrollView>
    );
  }
}
export default Autre;

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    color: 'red'
  },
  innerText: {
    flex: 1,
    fontFamily: "Cochin",
    fontSize: 17,
    fontStyle: "normal",
    textAlign: 'justify',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    marginVertical: 4
  },
  bullet: {
    width: 10
  },
  bulletText: {
    flex: 1,
    textAlign: 'justify',
    fontStyle: "normal",
    fontSize: 15,
    

  },
  font: {
    fontSize: 15,
    fontStyle: "normal",
    textAlign: 'justify',
    
  },
  puces: {
    fontSize: 15, 
    fontStyle: "normal"
  }
});