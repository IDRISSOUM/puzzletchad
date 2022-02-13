import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Puzzle');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.MainView}>
        <Text>React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;