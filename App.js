import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationNavigator from './Navigation/main';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    );
  }
}
export default App;