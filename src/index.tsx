import React, { useEffect, useState } from 'react';
import * as RNLocalize from 'react-native-localize';
import { setI18nConfig } from './i18n';

import MainScreen from './screens/MainScreen';

const app = (): JSX.Element => {
  const [, updateState] = useState();

  const handleLocalizationChange = (): void => {
    setI18nConfig();
    updateState('');
  };

  useEffect((): void => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
  }, []);

  useEffect(
    (): (() => void) => (): void => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    },
    [],
  );

  return <MainScreen />;
};

export default app;
