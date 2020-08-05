import React from 'react';
import {useRecoilState} from 'recoil';
import {themeState} from '../App/atoms';
import Toggle from '@/global/components/Toggle';
import Link from './Link';
import Styles from './styles';

export default function Navigation() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const themeToggle = () => {
    const nextTheme = !currentTheme;
    setCurrentTheme(nextTheme);
  };

  return (
    <Styles.Container>
      <Toggle isDark={currentTheme} toggleTheme={themeToggle} />
      <Link url="">Become a ghost</Link>
      <Link url="">Help</Link>
      <Link url="">Sign Up</Link>
      <Link url="">Sign In</Link>
    </Styles.Container>
  );
}
