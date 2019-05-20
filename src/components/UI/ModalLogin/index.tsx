import React, { useEffect, useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FWIcon from 'react-native-vector-icons/FontAwesome';

import themes from '../../../utils/themes';
import { gitType } from '../../../utils/types';
import {
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
} from './styles';

const visiblePrevios = (value: boolean): boolean => {
  const ref = useRef(false);
  useEffect(
    (): void => {
      ref.current = value;
    },
  );
  return ref.current;
};

interface Props {
  visible: boolean;
  git: gitType | undefined;
  onClose(): void;
  onSubmit(username: string, password: string, git?: gitType): void;
}

const modalLogin: React.FC<Props> = ({
  visible,
  git,
  onClose,
  onSubmit,
}: Props) => {
  let animatedValue = new Animated.Value(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardOpened, setKeyboardStatus] = useState(false);

  const modalRef = useRef<any>(null);
  const prevVisible = visiblePrevios(visible);

  const isBitBucket = git === gitType.bitBucket;
  let keyboardDidShowListener: any = null;
  let keyboardDidHideListener: any = null;

  useEffect((): void => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (): void => {
        setKeyboardStatus(true);
      },
    );

    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (): void => {
        setKeyboardStatus(false);
      },
    );
  }, []);

  useEffect(
    (): (() => void) => (): void => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    },
    [],
  );

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
        Keyboard.dismiss();
        setUsername('');
        setPassword('');
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

  const closeModal = (): void => {
    if (keyboardOpened) return Keyboard.dismiss();
    return onClose();
  };

  const submit = (): void => {
    Keyboard.dismiss();
    if (username !== '' && password !== '') onSubmit(username, password, git);
  };

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
      <TouchableWithoutFeedback onPress={closeModal}>
        <OverlayContainer />
      </TouchableWithoutFeedback>
      <ModalContainer behavior="padding">
        <ModalContent
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
          <Input value={username} onChangeText={setUsername} />
          <Label>Senha</Label>
          <Input value={password} onChangeText={setPassword} />
          <SignInButtonContainer>
            <SignInButton onPress={submit}>
              <SignInButtonTitle>Entrar</SignInButtonTitle>
            </SignInButton>
          </SignInButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
};

export default modalLogin;
