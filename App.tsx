import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20;
  font-weight: 400;
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const app = (): JSX.Element => (
  <Container>
    <Text>Welcome To</Text>
    <Title>GitManager :)</Title>
  </Container>
);

export default app;
