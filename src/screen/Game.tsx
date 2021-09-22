import React, { memo, useState } from 'react'
import { View } from 'react-native'

import { GameRouteProp } from '../navigation/stacks/game.stack'
import { Play } from '../components/game/play'
import { IWordInformation } from '../interfaces/menu'

interface IGame {
  route: GameRouteProp
}
export const Game = memo<IGame>(({
  route
}) => {

  const { genre, data } = route.params

  const [wordInfo] = useState(() => data.filter((i: { name: string }) => i.name === genre)[0])

  const word: IWordInformation = wordInfo.word[Math.floor(Math.random() * wordInfo.word.length)]

  return (
    <View style={{ flex: 1 }}>
      <Play
        wordInfo={word}
        word={word.nameWord}
        information={word.information}
        genre={genre}
      />
    </View>
  )
})
