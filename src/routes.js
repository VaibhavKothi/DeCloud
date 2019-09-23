import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import joinScreen from './Screens/joinScreen'
import chatScreen from './Screens/chatScreen'

const AppStack = createStackNavigator(
  {
    Join: joinScreen,
    Chat: chatScreen
  },
  {
    initialRouteName: 'Join'
  });

export default createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack
      },
      {
        initialRouteName: 'App',
      }
    )
  );
