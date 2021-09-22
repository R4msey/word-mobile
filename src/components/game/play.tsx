import React, { FC, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { ModalScreen } from './modal/modal'
import { ModalPause } from './modal/modal.pause'
import { ModalWinScreen } from './modal/modal.win'

import { Title } from '../common/title'
import { icons } from '../common/icons'

import { ButtonIcon } from '../ui/button/button.icon'
import { BtnView, Heading, UpperCaseTitle } from '../ui/typography/styles'

import { Keyboard } from './keyboard'
import { LifeCycle } from './lifecycle'
import { IWordInformation } from '../../interfaces/menu'
import I18n from '../../i18n'

interface IPlay {
  word: string
  information: string
  genre: string
  wordInfo: IWordInformation
}

export const Play: FC<IPlay> = ({
  word,
  information,
  genre,
  wordInfo
}) => {

  const navigation = useNavigation()

  const [button, setButton] = useState('')
  const [counter, setCounter] = useState(false)
  const [pause, setPause] = useState(false)

  const lose = useRef(1)
  const win = useRef(false)

  const [collectedWord] = useState(word.split('').map(i => i = '_'))

  const gameCycle = () => {

    let lost: number = 0

    word.split('').forEach((_, index: number) => {
      if (lose.current == 0) throw 'lose'

      if (word[index] == button) collectedWord[index] = button

      else if (collectedWord[index] !== button) lost++
    })

    if (lost == word.length) lose.current = lose.current + 1
    setButton('')
  }

  if (button !== '') {
    gameCycle()
    if (lose.current >= 6) Boolean(lose.current = 0)
    if (collectedWord.join('') == word) win.current = true
  }

  return (
    <>
      <BtnView>
        <View style={styles.containerTitle}>
          <ButtonIcon
            onPress={() => setPause(!pause)}
            name={icons.arrow}
          />
          <Heading
            fontSize='25px'
            style={{ marginLeft: 10 }}
          >{genre}
          </Heading>
        </View>
        <ButtonIcon
          onPress={() => setCounter(!counter)}
          name={icons.hint}
          size={30}
        />
      </BtnView>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View>
          <View style={{ marginVertical: 30 }}>
            <Title name={`${I18n.t('gameTitleOne')} ${word.length} ${I18n.t('gameTitleTwo')}`} />
          </View>
          <View style={styles.container}>
            {collectedWord.map((i, index) =>
              <UpperCaseTitle
                key={index}
                fontSize='50px'
                style={{ marginHorizontal: 10 }}
              >
                {i}
              </UpperCaseTitle>
            )}
          </View>
          <ModalPause
            visible={pause}
            setVisible={setPause}
          />
          <ModalWinScreen
            visible={win.current}
            name={I18n.t('win')}
            nameWord={`${I18n.t('word')}: ${word}`}
            onPress={() => navigation.navigate('RootMenu')}
            information={wordInfo}
          />
          <ModalScreen
            visible={!lose.current}
            name={I18n.t('lose')}
            nameWord={`${I18n.t('word')}: ${word}`}
            onPress={() => navigation.navigate('root')}
          />
          <ModalScreen
            visible={counter}
            name={I18n.t('hint')}
            nameWord={information}
            onPress={() => setCounter(!counter)}
            iHeight={450}
            nameButton={I18n.t('back')}
          />
        </View>
        <View>
          <LifeCycle lifeCycle={lose.current} />
          <Keyboard setButton={setButton} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})