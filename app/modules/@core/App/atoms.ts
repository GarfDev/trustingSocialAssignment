import {atom, selector} from 'recoil';
import {DarkTheme, LightTheme} from '@/global/Theme';

export const themeState = atom({
  key: 'themeState', // unique ID (with respect to other atoms/selectors)
  default: (window.localStorage.getItem('theme') || '') === 'true', // default value (aka initial value)
});

export const themeSelector = selector({
  key: 'themeStateSelector',
  get: ({get}) => {
    const currentTheme = get(themeState);
    return currentTheme ? DarkTheme : LightTheme;
  },
});
