import React, { useEffect, useState, Fragment } from 'react';
import { Animated } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import ModalLogin from '../../components/UI/ModalLogin';
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

enum gitType {
  bitBucket = 'bitbucket',
  gitHub = 'github',
}

interface State {
  open: boolean;
  git?: gitType;
}

const mainScreen: React.FC<{}> = () => {
  let animatedValue = new Animated.Value(0);
  const [modalLoginState, changeModalLoginState] = useState<State>({
    open: false,
    git: gitType.gitHub,
  });

  const openLoginModal = (git: gitType): void => {
    changeModalLoginState({ open: true, git });
  };

  const closeLoginModal = (): void => {
    changeModalLoginState({ ...modalLoginState, open: false });
  };

  useEffect((): void => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Fragment>
      <ModalLogin
        visible={modalLoginState.open}
        git={modalLoginState.git}
        onClose={closeLoginModal}
      />
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
          <SignGitButton onPress={(): void => openLoginModal(gitType.gitHub)}>
            <FWIcon name="github" size={40} color="#FFF" />
            <SignButtonTitle>GitHub</SignButtonTitle>
          </SignGitButton>
          <SignBitBucketButton
            onPress={(): void => openLoginModal(gitType.bitBucket)}
          >
            <FWIcon name="bitbucket" size={40} color="#FFF" />
            <SignButtonTitle>BitBucket</SignButtonTitle>
          </SignBitBucketButton>
        </ButtonsContainer>
        <SkipButton>
          <SignButtonTitle>Continuar sem Logar</SignButtonTitle>
        </SkipButton>
      </Container>
    </Fragment>
  );
};

export default mainScreen;
