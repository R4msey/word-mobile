import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { Button } from '../components/ui/button/button'
import { Title } from '../components/common/title'

import { useAppDispatch } from '../hooks/useRedux'
import { getWordLocalization } from "../redux/storage/thunks"
import { useNavigation } from '@react-navigation/core'

export const Start = () => {

  const dispatch = useAppDispatch()

  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getWordLocalization())
  }, [])

  return (
    <View style={styles.wrapper}>
      <Title name='Hi, R4msey' />
      <View style={styles.container}>
        <Button
          name='Play'
          onPress={() => navigation.navigate('RootMenu')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  container: {
    alignItems: 'center'
  }
})

