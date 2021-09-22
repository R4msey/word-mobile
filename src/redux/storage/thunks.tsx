import { createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage'
import I18n from '../../i18n/index';
import { menuEnglish, menuRussian, menuUkrainian } from '../../utils/menu'


export const getWordLocalization = createAsyncThunk('', async () => {

  const response = await AsyncStorage.getItem('language')
  I18n.locale = response != null ? JSON.parse(response) : 'en'
  let data = menuEnglish

  if (I18n.locale == 'ua') data = menuUkrainian
  if (I18n.locale == 'ru') data = menuRussian

  const storage = JSON.parse(JSON.stringify(data))

  try {
    const jsonValue = await AsyncStorage.getItem('Items')
    const words = jsonValue != null ? JSON.parse(jsonValue) : null

    for (const round in words) {
      for (const mark in storage[words[round].round].word) {
        if (storage[words[round].round].word[mark].id == words[round].id) {
          storage[words[round].round].word.splice(mark, 1)
        }
        if (storage[words[round].round].word.length == 0) {
          storage[words[round].round].blocked = true
        }
      }
    }
  } catch (err) {
    console.log(err)
  }

  return { storage, locale: I18n.locale }
})

export const deleteSaves = createAsyncThunk('', async (_, thunk) => {
  await AsyncStorage.removeItem('Items')
  thunk.dispatch(getWordLocalization)
})