import React, { useState, useEffect } from 'react';
import {
  NavigationScreenProps,
  NavigationScreenComponent,
} from 'react-navigation';
import axios from 'axios';

import { Container, Title } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends NavigationScreenProps {}

const profileScreen: NavigationScreenComponent<Props> = ({
  navigation,
}: Props) => {
  const [user, setUser] = useState();

  useEffect((): void => {
    const getUser = async (): void => {
      const { data } = await axios.get('https://api.github.com/search/users', {
        params: {
          q: navigation.getParam('username'),
        },
      });
      setUser(data.items[0]);
    };

    getUser();
  }, []);
  return (
    <Container>
      <Title>Profile Screen</Title>
      {user && <Title>{user.id}</Title>}
    </Container>
  );
};

export default profileScreen;
