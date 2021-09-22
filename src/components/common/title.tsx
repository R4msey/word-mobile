import React, { FC } from 'react'
import { View } from 'react-native'

import { Heading } from '../ui/typography/styles'

interface ITitle {
  name: string
}

export const Title: FC<ITitle> = ({
  name
}) => {

  return (
    <View style={{ paddingHorizontal: 50 }}>
      <Heading>{name}</Heading>
    </View>
  )
}