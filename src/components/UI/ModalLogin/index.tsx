import React, { useEffect, useRef } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Animated } from 'react-native';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  OverlayContainer,
  ModalContainer,
  HeaderContainer,
  Label,
  Input,
  SignInButtonContainer,
  SignInButton,
  SignInButtonTitle,
} from './styles';
import themes from '../../../utils/themes';

const visiblePrevios = (value: boolean): boolean => {
  const ref = useRef<boolean>(false);
  useEffect(
    (): void => {
      ref.current = value;
    },
  );
  return ref.current;
};

enum gitType {
  bitBucket = 'bitbucket',
  gitHub = 'github',
}

interface Props {
  visible: boolean;
  git: gitType | undefined;
  onClose(): void;
}

const modalLogin: React.FC<Props> = ({ visible, git, onClose }: Props) => {
  let animatedValue = new Animated.Value(0);

  const modalRef = useRef(null);
  const prevVisible = visiblePrevios(visible);
  const isBitBucket = git === gitType.bitBucket;

  const showModal = (): void => {
    animatedValue.setValue(0);
    if (modalRef && modalRef.current) {
      modalRef.current.setNativeProps({ style: { zIndex: 5 } });
    }
    setTimeout((): void => {
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 100);
  };

  const hideModal = (): void => {
    animatedValue.setValue(100);
    Animated.timing(animatedValue, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start(
      (): void => {
        if (modalRef && modalRef.current) {
          modalRef.current.setNativeProps({ style: { zIndex: -1 } });
        }
      },
    );
  };

  useEffect((): void => {
    const hasOpened = !prevVisible && visible;
    const hasClosed = prevVisible && !visible;

    if (hasOpened) {
      showModal();
    } else if (hasClosed) {
      hideModal();
    }
  }, [visible]);

  return (
    <Container
      ref={modalRef}
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [0, 100, 200],
          outputRange: [0, 1, 0],
        }),
      }}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <OverlayContainer />
      </TouchableWithoutFeedback>
      <ModalContainer
        style={{
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 100, 200],
                outputRange: [100, 0, -100],
              }),
            },
          ],
        }}
      >
        <HeaderContainer>
          {isBitBucket ? (
            <FWIcon name="bitbucket" size={50} color={themes.bitBucket} />
          ) : (
            <FWIcon name="github" size={50} color={themes.gitHub} />
          )}
        </HeaderContainer>
        <Label>Usuário ou Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />
        <SignInButtonContainer>
          <SignInButton>
            <SignInButtonTitle>Entrar</SignInButtonTitle>
          </SignInButton>
        </SignInButtonContainer>
      </ModalContainer>
    </Container>
  );
};

export default modalLogin;
