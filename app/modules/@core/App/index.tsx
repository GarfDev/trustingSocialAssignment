import React from 'react';
import {useRecoilValue} from 'recoil';
import {hot} from 'react-hot-loader/root';
import {ThemeProvider} from 'styled-components';
import {themeSelector} from './atoms';
import {BaseStyle} from '@/global/Theme';
// Import Resources
import LandingPage from '../LandingPage';

function App() {
  const themeValue = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={themeValue}>
      <LandingPage />
      <BaseStyle />
    </ThemeProvider>
  );
}

export default hot(App);
