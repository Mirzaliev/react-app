import { MEDIA } from '../constants';

export const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA);
  const isDark = e.matches;
  return isDark ? 'dark' : 'light';
};
