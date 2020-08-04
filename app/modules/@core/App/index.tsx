import React from 'react';
import {useRecoilValue} from 'recoil';
import {hot} from 'react-hot-loader/root';
import {ThemeProvider} from 'styled-components';
import RootRouter from './route';
import {themeSelector} from './atoms';
import {BaseStyle} from '@/global/Theme';

function App() {
  const themeValue = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={themeValue}>
      <RootRouter />
      <BaseStyle />
    </ThemeProvider>
  );
}

export default hot(App);
