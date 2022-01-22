import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tempo from '../screens/Tempo';
import {AppNavigator} from '../Navigation/navigations';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{headerShown: false}}
        component={Tempo}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={AppNavigator}
      />
    </Stack.Navigator>
  );
};

export default ApplicationNavigator;
