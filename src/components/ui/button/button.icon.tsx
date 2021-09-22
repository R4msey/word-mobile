import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { COLORS } from '../../common/colors'

interface IButtonIcon {
  onPress?: any
  name: string
  size?: number
}

export const ButtonIcon: FC<IButtonIcon> = ({
  onPress,
  name,
  size
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={name}
        size={size || 45}
        color={COLORS.background}
      />
    </TouchableOpacity>
  )
}