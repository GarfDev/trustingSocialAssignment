import React from 'react';
import LandingPage from '.';
import {shallowWithTheme} from '@/global/theme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('LandingPage module', () => {
  it('Smoke test', () => {
    expect(shallowWithTheme(<LandingPage />).html()).toMatchSnapshot();
  });
});
