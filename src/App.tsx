import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Root } from './navigation/root'

import { Provider } from 'react-redux'
import store from './redux/store'

export const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}

export default App