import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {ThemeProvider} from 'styled-components';
import {DarkTheme} from '@/global/theme';
import {RecoilRoot} from 'recoil';

export function shallowWithTheme(component: React.ReactNode) {
  return shallow(
    <ThemeProvider theme={DarkTheme}>
      <RecoilRoot>{component}</RecoilRoot>
    </ThemeProvider>,
  );
}

export function mouthWithTheme(component: React.ReactNode) {
  return mount(
    <ThemeProvider theme={DarkTheme}>
      <RecoilRoot>{component}</RecoilRoot>
    </ThemeProvider>,
  );
}

export function renderWithTheme(component: React.ReactNode) {
  return render(
    <ThemeProvider theme={DarkTheme}>
      <RecoilRoot>{component}</RecoilRoot>
    </ThemeProvider>,
  );
}
