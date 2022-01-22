import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Atlas from '../screens/Atlas';
import Puzzle from '../screens/Puzzle';
import Apropos from '../screens/Apropos';
import Autre from '../screens/Autre';
import Real from '../screens/Real';
import Site from '../screens/Site';
import Location from '../screens/Location';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="A propos" component={Apropos} />
      <HomeStack.Screen name="Autre" component={Autre} />
      <HomeStack.Screen name="Real" component={Real} />
      <HomeStack.Screen name="Site" component={Site} />
      <HomeStack.Screen name="Atlas" component={Atlas} />
      <HomeStack.Screen name="puzzle" component={Puzzle} />
      <HomeStack.Screen name="Location" component={Location} />
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        // tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          header: () => null,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#000080'} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Atlas"
        component={Atlas}
        options={{
          header: () => null,
          tabBarLabel: 'Atlas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="atom" color={'#000080'} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Puzzle"
        component={Puzzle}
        options={{
          header: () => null,
          tabBarLabel: 'Puzzle',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="puzzle-minus" color={'#000080'} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Apropos"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="apps" color={'#000080'} size={40} />
          ),
        }}
      />
    </Tab.Navigator>

  );
}