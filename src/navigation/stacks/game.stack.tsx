import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Game } from '../../screen/Game'

type StackParams = {
  RootGame: {
    genre: string,
    data: any
  }
}
const Stack = createStackNavigator<StackParams>()

export type GameRouteProp = RouteProp<StackParams, 'RootGame'>

export const GameStackScreen = () => (

  <Stack.Navigator
    initialRouteName='RootGame'
    mode="modal"
    headerMode="none"
  >
    <Stack.Screen
      name='RootGame'
      component={Game}
    />
  </Stack.Navigator>
)