import React from 'react';
import renderer from 'react-test-renderer';

import MainScreen from '../../src/screens/MainScreen';

jest.mock('NativeAnimatedHelper');
jest.useFakeTimers();

describe('Render MainScreen', (): void => {
  it('should renders correctly', (): void => {
    const tree = renderer.create(<MainScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
