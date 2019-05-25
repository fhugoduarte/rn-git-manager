import React from 'react';
import { Text } from 'react-native';

import i18n from '../../../i18n';

interface Props {
  translate?: boolean;
  text: string;
  captalize?: boolean;
}

const text: React.FC<Props> = ({
  translate = true,
  text,
  captalize,
  ...rest
}: Props) => {
  const translatedText: string = translate ? i18n.t(text) : text;
  const finalText: string = captalize
    ? translatedText.toUpperCase()
    : translatedText;

  return <Text {...rest}>{finalText}</Text>;
};

export default text;
