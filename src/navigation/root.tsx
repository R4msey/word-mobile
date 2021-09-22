import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Start } from '../screen/Start'
import { Settings } from '../screen/Settings'

import { GameStackScreen } from '../navigation/stacks/game.stack'
import { MenuStackScreen } from '../navigation/stacks/menu.stack'


const Stack = createStackNavigator()

export const Root = () => (

  <Stack.Navigator
    initialRouteName='root'
    mode="modal"
    headerMode="none"
  >
    <Stack.Screen
      name='root'
      component={Start}
    />
    <Stack.Screen
      name='RootSettings'
      component={Settings}
    />
    <Stack.Screen
      name='RootGame'
      component={GameStackScreen}
    />
    <Stack.Screen
      name='RootMenu'
      component={MenuStackScreen}
    />
  </Stack.Navigator>
)