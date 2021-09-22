import I18n, { getLanguages } from 'react-native-i18n'

import ua from './ua'
import en from './en'
import ru from './ru'

I18n.fallbacks = true

I18n.translations = {
  ua,
  en,
  ru
};

getLanguages()
  .then((languages) => {
    console.log('getLanguages', languages);
  })
  .catch((error) => {
    console.log('getLanguages error : ', error);
  });
export default I18n