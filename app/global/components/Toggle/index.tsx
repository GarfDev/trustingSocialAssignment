import React from 'react';
import Styles from './styles';

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const Toggle = ({isDark, toggleTheme}: Props) => {
  return (
    <Styles.ToggleContainer lightTheme={!isDark} onClick={toggleTheme}>
      <Styles.LightText center={!isDark}>Light</Styles.LightText>
      <Styles.DarkText center={isDark}>Dark</Styles.DarkText>
    </Styles.ToggleContainer>
  );
};

export default Toggle;
