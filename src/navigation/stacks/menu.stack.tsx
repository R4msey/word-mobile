import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { Menu } from '../../screen/Menu'

type StackParams = {
  RootMenu: {
    storage: any
  }
}
const Stack = createStackNavigator<StackParams>()

export type MenuRouteProp = RouteProp<StackParams, 'RootMenu'>

export const MenuStackScreen = () => (

  <Stack.Navigator
    initialRouteName='RootMenu'
    mode="modal"
    headerMode="none"
  >
    <Stack.Screen
      name='RootMenu'
      component={Menu}
    />
  </Stack.Navigator>
)