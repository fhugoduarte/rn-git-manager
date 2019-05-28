import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../../src/screens/LoginScreen';

jest.mock('NativeAnimatedHelper');
jest.useFakeTimers();

describe('Render LoginScreen', (): void => {
  it('should renders correctly', (): void => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
