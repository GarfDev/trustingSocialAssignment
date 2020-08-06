import React from 'react';
import Link from '.';
import {shallowWithTheme, renderWithTheme} from '@/global/theme';
import 'jest-enzyme';
import 'jest-styled-components';

describe('Link component', () => {
  it('Smoke test', () => {
    expect(
      shallowWithTheme(<Link url=".">Test</Link>).html(),
    ).toMatchSnapshot();
  });

  it('Render correctly childrents', () => {
    const component = renderWithTheme(<Link url=".">Test</Link>);
    expect(component.text()).toBe('Test');
  });
});
