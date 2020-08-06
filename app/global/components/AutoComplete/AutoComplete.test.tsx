import React from 'react';
import AutoComplete from './';
import {shallowWithTheme, renderWithTheme} from '@/global/theme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('AutoComplete Global Component', () => {
  it('Smoke test', () => {
    expect(
      shallowWithTheme(<AutoComplete suggestions={[]} />).html(),
    ).toMatchSnapshot();
  });

  it('Input rendered', () => {
    expect(
      renderWithTheme(<AutoComplete suggestions={[]} />).find('input').length,
    ).toEqual(1);
  });

  it('No suggestion render when suggestions length is zero', () => {
    const suggestionComponent = renderWithTheme(
      <AutoComplete suggestions={[]} />,
    ).find('span');

    expect(suggestionComponent.text()).toBe('Nothing found 😞');
  });
});
