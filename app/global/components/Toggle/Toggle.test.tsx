import React from 'react';
import Toggle from './';
import {shallowWithTheme} from '@/global/theme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('Toggle Global Component', () => {
  const mockFunction = jest.fn();

  it('Smoke test', () => {
    expect(
      shallowWithTheme(
        <Toggle isDark={false} toggleTheme={mockFunction} />,
      ).html(),
    ).toMatchSnapshot();
  });
});
