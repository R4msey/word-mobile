import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeModules } from "react-native";

import { Title } from '../components/common/title'
import { icons } from '../components/common/icons'
import { ButtonIcon } from '../components/ui/button/button.icon'
import { BtnView } from '../components/ui/typography/styles'
import { Button } from '../components/ui/button/button'
import { ModalScreen } from '../components/game/modal/modal'

import I18n from '../i18n/index'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { deleteSaves } from '../redux/storage/thunks'

export const Settings = () => {

  const { locale } = useAppSelector(state => state.language)
  const dispatch = useAppDispatch()

  const navigation = useNavigation()

  const [language, setLanguage] = useState(I18n.locale)
  const [visible, setVisible] = useState(false)

  const saveLanguage = async () => {
    if (locale == I18n.locale) {
      navigation.goBack()
    } else {
      await AsyncStorage.setItem('language', JSON.stringify(language))
      setVisible(true)
    }
  }
  const changeLanguage = async () => {
    if (language === 'en') setLanguage(I18n.locale = 'ua')
    if (language === 'ru') setLanguage(I18n.locale = 'en')
    if (language === 'ua') setLanguage(I18n.locale = 'ru')
  }

  const deleteSave = async () => {
    const storage = await AsyncStorage.getItem('Items')
    if (storage !== null) (dispatch(deleteSaves()), setVisible(true))
  }

  return (
    <View style={{ flex: 1 }}>
      <BtnView >
        <ButtonIcon
          onPress={saveLanguage}
          name={icons.arrow}
        />
      </BtnView>
      <View style={{ marginVertical: 20 }}>
        <Title name={I18n.t('Settings')} />
      </View>
      <Button
        name={I18n.t('language')}
        onPress={changeLanguage}
      />
      <Button
        name={I18n.t('delete')}
        onPress={deleteSave}
      />
      <ModalScreen
        visible={visible}
        name=''
        nameWord='Restart Game'
        nameButton='Restart'
        onPress={() => NativeModules.DevSettings.reload()}
      />
    </View>
  )
}