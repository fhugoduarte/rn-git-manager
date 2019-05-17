import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import themes from '../../utils/themes';
import {
  Container,
  AnimatedContainer,
  Title,
  TitleContainer,
  BannerContainer,
  ButtonsContainer,
  ButtonsContainerTitle,
  SignBitBucketButton,
  SignGitButton,
  SignButtonTitle,
} from './styles';

function mainScreen(): JSX.Element {
  let animatedValue = new Animated.Value(0);
  const [showAnimatedContainer, changeAnimatedContainer] = useState(true);

  useEffect((): void => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start(
      (): void => {
        changeAnimatedContainer(false);
      },
    );
  }, []);

  return (
    <Container>
      {showAnimatedContainer && (
        <AnimatedContainer
          style={{
            opacity: animatedValue.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
            }),
          }}
        />
      )}
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
        <ButtonsContainerTitle>Entrar</ButtonsContainerTitle>
        <SignGitButton>
          <FWIcon name="github" size={40} color="#FFF" />
          <SignButtonTitle>GitHub</SignButtonTitle>
        </SignGitButton>
        <SignBitBucketButton>
          <FWIcon name="bitbucket" size={40} color="#FFF" />
          <SignButtonTitle>BitBucket</SignButtonTitle>
        </SignBitBucketButton>
      </ButtonsContainer>
    </Container>
  );
}

export default mainScreen;
