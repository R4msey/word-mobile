import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '../common/colors'
import { icons } from '../common/icons'

interface ILifeCycle {
  lifeCycle: number
}

export const LifeCycle: FC<ILifeCycle> = ({
  lifeCycle
}) => {

  const arrow = [
    { boolean: false },
    { boolean: false },
    { boolean: false },
    { boolean: false },
    { boolean: false },
  ]

  if (lifeCycle !== 0) {
    for (let i = 5; i >= lifeCycle; i--) {
      arrow[i - 1].boolean = true
    }
  }

  return (
    <View style={styles.wrapper}>
      {arrow.map((i, index) =>
        <Icon
          key={index}
          name={i.boolean
            ? icons.heart
            : icons.heartOutline}
          size={30}
          color={COLORS.background}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  }
})