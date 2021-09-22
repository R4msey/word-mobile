import React, { FC } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

import { COLORS } from '../../common/colors'

import { UpperCaseTitle } from '../typography/styles'

interface IButton {
  name: string
  onPress?: any
  blocked?: boolean
}

export const Button: FC<IButton> = ({
  name,
  onPress,
  blocked
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.wrapper}
      disabled={blocked}
    >
      <View style={blocked
        ? { ...styles.container, backgroundColor: COLORS.background } : styles.container}>
        <UpperCaseTitle
          color={blocked ? COLORS.white : COLORS.background}
        >
          {name}
        </UpperCaseTitle>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    alignItems: 'center'
  },
  container: {
    borderWidth: .5,
    borderColor: COLORS.background,
    paddingHorizontal: 40,
    borderRadius: 3
  }
})