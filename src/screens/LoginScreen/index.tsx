import React, { useEffect, useState, Fragment } from 'react';
import { Animated } from 'react-native';
import {
  NavigationScreenProps,
  NavigationScreenComponent,
} from 'react-navigation';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import ModalLogin from '../../components/UI/ModalLogin';
import themes from '../../utils/themes';
import { gitType } from '../../utils/types';
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

interface State {
  open: boolean;
  git?: gitType;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends NavigationScreenProps {}

const loginScreen: NavigationScreenComponent<Props> = ({
  navigation,
}: Props) => {
  let animatedValue = new Animated.Value(0);

  const [modalLoginState, changeModalLoginState] = useState<State>({
    open: false,
    git: gitType.gitHub,
  });

  useEffect((): void => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const openLoginModal = (git: gitType): void => {
    changeModalLoginState({ open: true, git });
  };

  const closeLoginModal = (): void => {
    changeModalLoginState({ ...modalLoginState, open: false });
  };

  const onSubmit = (username: string, git?: gitType): void => {
    navigation.navigate('ProfileScreen', { username, git });
  };

  return (
    <Fragment>
      <ModalLogin
        visible={modalLoginState.open}
        git={modalLoginState.git}
        onSubmit={onSubmit}
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
          <MCIcon name="git" size={60} color={themes.gitColor} />
          <TitleContainer>
            <Title text="Git" translate={false} />
            <Title text="Manager" translate={false} />
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
          <ButtonsContainerTitle text="loginTitle" />
          <SignGitButton onPress={(): void => openLoginModal(gitType.gitHub)}>
            <FWIcon name="github" size={30} color="#FFF" />
            <SignButtonTitle text="gitHub" />
          </SignGitButton>
          <SignBitBucketButton
            onPress={(): void => openLoginModal(gitType.bitBucket)}
          >
            <FWIcon name="bitbucket" size={30} color="#FFF" />
            <SignButtonTitle text="bitBucket" />
          </SignBitBucketButton>
        </ButtonsContainer>
        <SkipButton>
          <SignButtonTitle text="continueWidthoutSignIn" />
        </SkipButton>
      </Container>
    </Fragment>
  );
};

export default loginScreen;
