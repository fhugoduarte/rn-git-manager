import React from 'react';
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
  SignButtonTitle,
} from './styles';

const mainScreen = (): JSX.Element => (
  <Container>
    <BannerContainer>
      <MCIcon name="git" size={100} color={themes.gitColor} />
      <TitleContainer>
        <Title>Git</Title>
        <Title>Manager</Title>
      </TitleContainer>
    </BannerContainer>
    <ButtonsContainer>
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

export default mainScreen;
