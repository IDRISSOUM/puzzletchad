import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Atlas from '../screens/Atlas';
import Puzzle from '../screens/Puzzle';
import Apropos from '../screens/Apropos';
import Autre from '../screens/Autre';
import Real from '../screens/Real';
import Site from '../screens/Site';
import ListScreenDetails from '../screens/ListScreenDetails';
import SetPage from '../screens/SetPage';
import imageTchad from '../screens/imageTchad';
import testModal from '../screens/testModal';
import ListScreen from '../screens/ListScreen';
import testVrai from '../screens/testVrai';
import rating from '../screens/rating'

const ListStack = createNativeStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
    <ListStack.Screen 
    name="Accueil" 
    component={ListScreen} 
    options={{
      header: () => null,
    }}
    />
    <ListStack.Screen 
    name="ListScreenDetail" 
    component={ListScreenDetails} 
    options={{
      header: () => null,
    }}
    />
  </ListStack.Navigator>
  );
}

const SetStack = createNativeStackNavigator();
function SetStackScreen() {
  return(
  <SetStack.Navigator>
    <SetStack.Screen 
    name="SetPage" 
    component={SetPage} 
    options={{
      header: () => null,
    }}
    />
    <SetStack.Screen 
    name="Puzzle" 
    component={Puzzle} 
    options={{
      header: () => null,
    }}
    />
    <SetStack.Screen 
    name="imageTchad" 
    component={imageTchad} 
    options={{
      header: () => null,
    }}
    />
    <SetStack.Screen  
    name="testVrai" 
    component={testVrai} 
    options={{
      header: () => null,
    }}
    />
   
  </SetStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="A propos" 
      component={Apropos} 
      options={{
        headerStyle: {
          backgroundColor: '#f4511e',
          flexDirection: 'row-reverse',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          

        },
        // header: () => null,
      }}
      />
      <HomeStack.Screen 
      name="Autre" 
      component={Autre} 
      options={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',

        },
        // header: () => null,
      }}
      />
      <HomeStack.Screen name="Real" component={Real} />
      <HomeStack.Screen name="Site" component={Site} />
      <HomeStack.Screen name="Atlas" component={Atlas} />
      <HomeStack.Screen 
      name="rating" 
      component={rating} 
      options={{
        header: () => null,
      }}
      />
      
    </HomeStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
      }}
    >
      <Tab.Screen
        name="Feed"
        component={ListStackScreen}
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
        name="SetPage"
        component={SetStackScreen}
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