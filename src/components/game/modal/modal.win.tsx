import React, { FC, useState } from 'react'
import { Modal, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import I18n from '../../../i18n'

import { modalStyles } from '../../styles/style.modal'

import { Button } from '../../ui/button/button'
import { Heading, UpperCaseTitle } from '../../ui/typography/styles'
import { getWordLocalization } from '../../../redux/storage/thunks'
import { useAppDispatch } from '../../../hooks/useRedux'
import { IWordInformation } from '../../../interfaces/menu'


interface IModalWinScreen {
  visible: boolean
  name: string
  nameWord: string
  iHeight?: number
  onPress?: () => void
  nameButton?: string
  information: IWordInformation
}


export const ModalWinScreen: FC<IModalWinScreen> = ({
  visible,
  name,
  nameWord,
  iHeight,
  onPress,
  nameButton,
  information
}) => {

  const dispatch = useAppDispatch()

  const object = {
    id: information.id,
    round: information.round
  }
  const [state] = useState([object])

  const saveWord = async () => {

    const jsonValue = await AsyncStorage.getItem('Items')
    const obj = jsonValue != null ? JSON.parse(jsonValue) : null
    AsyncStorage.setItem('Items', obj !== null ? JSON.stringify(obj.concat(state)) : JSON.stringify(state))
    dispatch(getWordLocalization())
  }
  if (visible) {
    saveWord()
  }

  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent={true}
    >
      <View style={modalStyles.wrapper}>
        <View style={{ ...modalStyles.container, height: iHeight || 400 }}>
          <Heading>{name}</Heading>
          <UpperCaseTitle
            fontSize='25px'
          >
            {nameWord}
          </UpperCaseTitle>
          <Button
            name={nameButton || I18n.t('menu')}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  )
}