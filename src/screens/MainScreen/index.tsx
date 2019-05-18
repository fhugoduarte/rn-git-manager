import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import themes from '../../utils/themes';
import {
  Container,
  Title,
  TitleContainer,
  BannerContainer,
  ButtonsContainer,
  ButtonsContainerTitle,
  SignBitBucketButton,
  SignGitButton,
  SkipButton,
  SignButtonTitle,
} from './styles';

function mainScreen(): JSX.Element {
  let animatedValue = new Animated.Value(0);

  useEffect((): void => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Container
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
        }),
      }}
    >
      <BannerContainer
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [-100, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <MCIcon name="git" size={100} color={themes.gitColor} />
        <TitleContainer>
          <Title>Git</Title>
          <Title>Manager</Title>
        </TitleContainer>
      </BannerContainer>
      <ButtonsContainer
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [100, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      >
        <ButtonsContainerTitle>Entrar com:</ButtonsContainerTitle>
        <SignGitButton>
          <FWIcon name="github" size={40} color="#FFF" />
          <SignButtonTitle>GitHub</SignButtonTitle>
        </SignGitButton>
        <SignBitBucketButton>
          <FWIcon name="bitbucket" size={40} color="#FFF" />
          <SignButtonTitle>BitBucket</SignButtonTitle>
        </SignBitBucketButton>
      </ButtonsContainer>
      <SkipButton>
        <SignButtonTitle>Continuar sem Logar</SignButtonTitle>
      </SkipButton>
    </Container>
  );
}

export default mainScreen;
