import React, {Suspense} from 'react';
import {useRecoilValue} from 'recoil';
import {hot} from 'react-hot-loader/root';
import {ThemeProvider} from 'styled-components';
import {themeSelector} from './atoms';
import {BaseStyle} from '@/global/theme';
// Import Resources
import NavigationBar from '../Navigation';
import LandingPage from '../LandingPage';

function App() {
  const themeValue = useRecoilValue(themeSelector);

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={themeValue}>
        <NavigationBar />
        <LandingPage />
        <BaseStyle />
      </ThemeProvider>
    </Suspense>
  );
}

export default hot(App);
