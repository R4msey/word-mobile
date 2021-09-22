import React, { FC, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import { COLORS } from '../../common/colors'

import { UpperCaseTitle } from '../typography/styles'

interface IButtonK {
  name: string,
  setButton?: any
}

export const ButtonK: FC<IButtonK> = ({
  name,
  setButton
}) => {

  const [disabled, setDisabled] = useState('none')

  return (
    <TouchableOpacity
      onPress={() => { setButton(name), setDisabled('disabled') }}
      disabled={disabled == 'disabled'}
    >
      <View style={disabled == 'disabled'
        ? { ...styles.container, backgroundColor: COLORS.background } : styles.container}>
        <UpperCaseTitle
          fontSize='26px'
          {...disabled == 'disabled'
            ? { color: COLORS.snowy } : { color: COLORS.background }}
        >{name}
        </UpperCaseTitle>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: .5,
    borderColor: COLORS.background,
    paddingHorizontal: 5,
    borderRadius: 5,
    margin: 2
  }
})