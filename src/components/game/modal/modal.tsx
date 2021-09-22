import React, { FC } from 'react'
import { Modal, View } from 'react-native'

import I18n from '../../../i18n';

import { modalStyles } from '../../styles/style.modal';

import { Button } from '../../ui/button/button';
import { Heading, UpperCaseTitle } from '../../ui/typography/styles';

interface IModalScreen {
  visible: boolean
  name: string
  nameWord: string
  iHeight?: number
  onPress?: any
  nameButton?: string
}

export const ModalScreen: FC<IModalScreen> = ({
  visible,
  name,
  nameWord,
  iHeight,
  onPress,
  nameButton
}) => {

  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent={true}
    >
      <View style={modalStyles.wrapper}>
        <View style={{ ...modalStyles.container, height: iHeight || 400 }}>
          <Heading>{name}</Heading>
          <UpperCaseTitle fontSize='25px'>{nameWord}</UpperCaseTitle>
          <Button
            name={nameButton || I18n.t('menu')}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  )
}