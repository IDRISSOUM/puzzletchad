import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

class Real extends Component {
  render() {
    return (
      <ScrollView style={{}}>
        <View style={{ }}>
            <Text style={styles.real}>Les Réalisations et les Expériences CartoTchad :</Text>
      </View>
      
      <View style={{
        flex: 1,
      }}>   
          <Text style={styles.innerText}>{'\n'}
            Une Plateforme Cartographique et Système d’Information Géographique (SIG), Géomatique, Collecte de Donnée Mobile (CDM), de la production de cartographies interactives, 
            l’analyse spatiale, de Développement des Applications web et mobile et de Conseils-Formation oriente dans le secteur de la Technologie d’information et de 
            Communication (TIC), de la santé, l’Eduction-Enseignement Supérieur, Géomarketing, Agriculture et Elevage, de la mine-Géologie, l’Environnement-Aménagement etc. :
          </Text>
      </View>
      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Le développement d’une base de données géographiques dénommée Cartothèque consultable à exploitable et à téléchargeable gratuitement.</Text>
        </View>
      </View>
      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Une mission de cartographie sur OpenStreetMap dans cadre du projet MOUHANA de wenaklabs à N’Djamena ;.</Text>
        </View>
      </View>

      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Une assistance en conception et réalisation des cartes thématiques au Cabinet Cyril Service dans le cadre du Project ** Elaboration du Plan de Développement Communal(PDC) de la Commune du 4ème Arrondissement de la Ville de N’Djamena ;.</Text>
        </View>
      </View>
      <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{fontSize: 15}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text style={styles.font}>Le développement d’une application web et mobile pour qui donne l’accès à des informations (sur la population, le Climat, l’Agriculture et l’Élevage, le mine-Géologie, Tourisme, la santé, l’Éducation…) des 23 provinces du Tchad. C’est dans cette optique que CartoTchad a remporté des prix dans diverses compétitions en Entreprenariat au Tchad, notamment :</Text>
        </View>
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  real: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgb(135, 206, 250)',
  },
  innerText: {
    textAlign: 'justify'
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
}) 

export default Real;