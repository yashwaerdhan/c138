import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from './screens/home';
import DetailScreen from './screens/details';

export default function App(){
  <AppContainer />
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen : HomeScreen,
      navigationOptions:{
        headShown:false
      },
      Details:{
        screen : DetailScreen
      }
    }
   
  },
  {
    initialRouteName : "Home"
  }
)

const AppContainer = createAppContainer(appStackNavigator)