import React from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { useRedirect } from '../hooks/useRedirect'

import { Title } from '../components/common/title'

import { Button } from '../components/ui/button/button'
import { ButtonIcon } from '../components/ui/button/button.icon'
import { BtnView } from '../components/ui/typography/styles'

import I18n from '../i18n/index'
import { icons } from '../components/common/icons'
import { useAppSelector } from '../hooks/useRedux'

export const Menu = () => {

  const { data } = useAppSelector(state => state.language)

  const navigation = useNavigation()

  const { redirectToGameScreen } = useRedirect()

  return (
    <View style={{ flex: 1 }}>
      <BtnView>
        <ButtonIcon
          onPress={() => navigation.goBack()}
          name={icons.arrow}
        />
        <ButtonIcon
          onPress={() => navigation.navigate('RootSettings')}
          name={icons.setting}
          size={30}
        />
      </BtnView>
      <View style={{ marginVertical: 20 }}>
        <Title name={I18n.t('menuTitle')} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Button
            name={item.name}
            onPress={() => redirectToGameScreen(item.name, data)}
            blocked={item.blocked}
          />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}