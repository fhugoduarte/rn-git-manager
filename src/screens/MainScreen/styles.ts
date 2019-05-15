import styled from 'styled-components/native';

import themes from '../../utils/themes';

const Container = styled.View`
  flex: 1;
  background-color: ${themes.lightGray};
  align-items: center;
  justify-content: center;
`;

const BannerContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GitLogo = styled.Image`
  width: 50px;
  height: 50px;
`;

const TitleContainer = styled.View`
  padding: 0px 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 35px;
`;

const ButtonsContainer = styled.View`
  padding: 30px 20px;
  flex: 0.6;
`;

const ButtonsContainerTitle = styled.Text`
  font-weight: bold;
  font-size: 30;
  align-self: center;
  padding-bottom: 30px;
`;

const SignButton = styled.TouchableOpacity`
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px 40px;
  align-items: center;
  flex-direction: row;
`;

const SignGitButton = styled(SignButton)`
  background-color: ${themes.gitHub};
`;

const SignBitBucketButton = styled(SignButton)`
  background-color: ${themes.bitBucket};
`;

const SignButtonImage = styled.Image`
  width: 40px;
  height: 40px;
`;

const SignButtonTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  padding-left: 15px;
`;

export {
  Container,
  TitleContainer,
  Title,
  BannerContainer,
  GitLogo,
  ButtonsContainer,
  ButtonsContainerTitle,
  SignGitButton,
  SignBitBucketButton,
  SignButtonTitle,
  SignButtonImage,
};
