import React from 'react';
import {ReactComponent as MoonIcon} from '@/assests/icons/moon.svg';
import {ReactComponent as SunIcon} from '@/assests/icons/sun.svg';
import Styles from './styles';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Toggle = ({theme, toggleTheme}: Props) => {
  const isLight = theme === 'light';
  return (
    <Styles.ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </Styles.ToggleContainer>
  );
};

export default Toggle;
