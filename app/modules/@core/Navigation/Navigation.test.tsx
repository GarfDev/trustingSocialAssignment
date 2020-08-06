import React from 'react';
import Navigation from '.';
import {shallowWithTheme} from '@/global/theme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('Navigation component', () => {
  it('Smoke test', () => {
    expect(shallowWithTheme(<Navigation />).html()).toMatchSnapshot();
  });
});
