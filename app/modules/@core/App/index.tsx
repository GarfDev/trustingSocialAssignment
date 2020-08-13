import React, {Suspense} from 'react';
import {useRecoilValue} from 'recoil';
import {hot} from 'react-hot-loader/root';
import {ThemeProvider} from 'styled-components';
import {themeSelector} from './atoms';
import {BaseStyle} from '@/global/theme';
// Import Resources

function App() {
  const themeValue = useRecoilValue(themeSelector);

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={themeValue}>
        <BaseStyle />
      </ThemeProvider>
    </Suspense>
  );
}

export default hot(App);
