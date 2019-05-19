import { Animated } from 'react-native';
import styled from 'styled-components/native';

import themes from '../../utils/themes';

const Container = styled(Animated.View)`
  flex: 1;
  background-color: ${themes.lightGray};
  align-items: center;
  justify-content: space-around;
`;

const BannerContainer = styled(Animated.View)`
  flex-direction: row;
  justify-content: center;
`;

const TitleContainer = styled.View`
  padding: 0px 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 23px;
`;

const ButtonsContainer = styled(Animated.View)`
  padding: 10px 20px;
`;

const ButtonsContainerTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  padding-bottom: 10px;
`;

const SignButton = styled.TouchableOpacity`
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px 20px;
  align-items: center;
  flex-direction: row;
`;

const SignGitButton = styled(SignButton)`
  background-color: ${themes.gitHub};
`;

const SignBitBucketButton = styled(SignButton)`
  background-color: ${themes.bitBucket};
`;

const SkipButton = styled(SignButton)`
  padding: 10px 20px;
  background-color: ${themes.lightGreen};
`;

const SignButtonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding-left: 15px;
`;

export {
  Container,
  TitleContainer,
  Title,
  BannerContainer,
  ButtonsContainer,
  ButtonsContainerTitle,
  SignGitButton,
  SignBitBucketButton,
  SkipButton,
  SignButtonTitle,
};
