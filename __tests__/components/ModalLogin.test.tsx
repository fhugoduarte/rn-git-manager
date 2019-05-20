import React from 'react';
import renderer from 'react-test-renderer';

import ModalLogin from '../../src/components/UI/ModalLogin';
import { gitType } from '../../src/utils/types';

jest.mock('NativeAnimatedHelper');
jest.useFakeTimers();

describe('Render ModalLogin', (): void => {
  it('should renders correctly with gitHub props', (): void => {
    const tree = renderer
      .create(
        <ModalLogin
          visible
          git={gitType.gitHub}
          onClose={(): void => {}}
          onSubmit={(): void => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should renders correctly with bitBucket props', (): void => {
    const tree = renderer
      .create(
        <ModalLogin
          visible
          git={gitType.bitBucket}
          onClose={(): void => {}}
          onSubmit={(): void => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
