import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SearchHymn from './src/screens/SearchHymn';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { View, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Remote debugger']);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ResultsShow: ResultsShowScreen,
    Tabs: SearchHymn
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

