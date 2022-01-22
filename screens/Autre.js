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
      <ScrollView style={{}}>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 0.5,
            resizeMode: 'cover',
            alignSelf: 'center',
            borderRadius: 100,
            // maxWidth: 500,
            paddingVertical: 30,
            shadowColor: '#FFF',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          }}
          source={require('../assets/cato_logo.jpg')}
        />
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',
            fontWeight: 'bold',
            fontFamily: 'Cochin',
            marginEnd: 15,
            marginLeft: 15,
          }}>
          CartoTchad {}
          <Text style={styles.innerText}>
            est spécialisé dans la production de cartographies interactives,
            l’analyse spatiale, les SIG dans divers domaines :
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'justify',
            fontWeight: 'Light',
            fontFamily: 'Cochin',
            marginEnd: 15,
            marginLeft: 15,
          }}>
          {'\n'}
          Première étape dans toute évaluation, enquête ou étude est la collecte
          de données. Elle garantit des données de qualité pour une prise de
          décision appropriée. La collecte de données mobiles (Mobile Data
          Collection, MDC) utilise des smartphones/tablettes pour collecter des
          données primaires sur les besoins des bénéficiaires, les mouvements de
          population, la localisation des infrastructures et l'évaluation. Carto
          Tchad est une plateforme cartographique et d’études spécialisé dans
          les études statistique, de collecté de donnée et d’analyser, à ce
          titre, possède de multiples compétences pour vous accompagner,
          opérateurs publics ou privés, dans la réalisation de vos projets :
          {'\n'}
          {'\n'}- Conception des formulaires numérique {'\n'}- La mise en place
          un système de collecte de données mobile devient de plus en plus aisé,
          et de nombreux outils adaptés à tous vos besoins sont à votre
          disposition - Collecter d'information plus diversifiée et produire des
          résultats que vous pourrez analyser et partager en un instant.{'\n'} -
          Etc
          {'\n'}
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Formation</Text>
          {'\n'}
          <Text style={{fontSize: 15, }}>Nous proposons une offre de formation SIG aux principaux logiciels
          spécialisés en cartographie et SIG, en Géomatique de marché. Pour les
          débutants comme les utilisateurs expérimentés quelques soit votre
          domaine d’activité. Nous organisons des sessions et des évènements de
          formation pour groupe ou individuelles dans nos locaux, vos locaux ou
          en ligne. Notre originalité résidant également dans la mise en place
          de formations personnalisées et adaptées à votre contexte métier La
          formation sera articulée autour de 5 axes de travail:</Text>
        </Text>
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
    color: '#000'
  }
});