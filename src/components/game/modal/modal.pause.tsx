import React, { FC } from 'react'
import { Modal, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Button } from '../../ui/button/button'

import I18n from '../../../i18n'

import { modalStyles } from '../../styles/style.modal'

interface IModalPause {
  visible: boolean
  setVisible: any
}

export const ModalPause: FC<IModalPause> = ({
  visible,
  setVisible
}) => {

  const navigation = useNavigation()

  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent={true}
    >
      <View style={modalStyles.wrapper}>
        <Button
          name={I18n.t('back')}
          onPress={() => setVisible(!visible)}
        />
        <Button
          name={I18n.t('Settings')}
          onPress={() => {
            navigation.navigate('RootSettings'),
              setVisible(!visible)
          }}
        />
        <Button
          name={I18n.t('menu')}
          onPress={() => navigation.navigate('RootMenu')}
        />
      </View>
    </Modal>
  )
}