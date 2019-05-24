import { I18nManager } from 'react-native';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import pt from './locales/pt';
import en from './locales/en';

interface Translation {
  [key: string]: string;
}

interface Getters {
  [key: string]: () => Translation;
}

const translationGetters: Getters = {
  pt: (): Translation => pt,
  en: (): Translation => en,
};

export const setI18nConfig = (): void => {
  const fallback = { languageTag: 'pt', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  I18nManager.forceRTL(isRTL);

  i18n.translations = { [languageTag]: translationGetters[languageTag]() };

  i18n.locale = languageTag;
};

setI18nConfig();

export default i18n;
