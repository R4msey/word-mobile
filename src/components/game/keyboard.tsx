import React, { FC, useRef } from 'react'
import { View, StyleSheet } from 'react-native'

import I18n from '../../i18n'

import { keyboard } from '../../utils/keyboard'
import { ButtonK } from '../ui/button/button.keyboard'

interface IKeyboard {
  setButton?: any
}

export const Keyboard: FC<IKeyboard> = ({
  setButton
}) => {

  const counter = useRef(0)

  if (I18n.locale == 'ua') counter.current = 1
  if (I18n.locale == 'ru') counter.current = 2

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {keyboard[counter.current].keyboard.top.map((i, index) =>
          <ButtonK
            setButton={setButton}
            key={index}
            name={i.btn}
          />
        )}
      </View>
      <View style={styles.container}>
        {keyboard[counter.current].keyboard.mid.map((i, index) =>
          <ButtonK
            setButton={setButton}
            key={index}
            name={i.btn}
          />
        )}
      </View>
      <View style={styles.container}>
        {keyboard[counter.current].keyboard.bottom.map((i, index) =>
          <ButtonK
            setButton={setButton}
            key={index}
            name={i.btn}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 30
  },
  container: {
    flexDirection: "row"
  }
})