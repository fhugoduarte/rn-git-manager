import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import themes from '../../../utils/themes';
const { width, height } = Dimensions.get('screen');

const Container = styled(Animated.View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: ${width};
  height: ${height};
`;

const OverlayContainer = styled(Animated.View)`
  position: absolute;
  background-color: #00000040;
  width: ${width};
  height: ${height};
`;

const ModalContainer = styled.KeyboardAvoidingView`
  flex: 1;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Animated.View)`
  width: ${width * 0.8};
  justify-content: center;
  background-color: white;
  border-radius: 6px;
  border-width: 2px;
  border-color: gray;
  padding: 20px;
`;

const HeaderContainer = styled.View`
  padding: 10px;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 15px 5px;
`;

const Input = styled.TextInput`
  border-radius: 3px;
  border-width: 1px;
  border-color: gray;
  font-size: 18px;
  padding: 10px;
`;

const SignInButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const SignInButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 20px;
  padding: 10px 40px;
  align-items: center;
  flex-direction: row;
  background-color: ${themes.darkGreen};
`;

const SignInButtonTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding-left: 15px;
`;

export {
  Container,
  OverlayContainer,
  ModalContainer,
  ModalContent,
  HeaderContainer,
  Label,
  Input,
  SignInButtonContainer,
  SignInButton,
  SignInButtonTitle,
};
