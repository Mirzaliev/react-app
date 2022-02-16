import type { Theme, ThemeProps } from '../types';
import { DEFAULT_THEME_MODE, THEME_MODES } from "../constants";


export default function currentTheme(props?: ThemeProps): Theme {
  if(props && props.theme) {
    if ('mode' in props.theme && THEME_MODES.includes(props.theme.mode)) {
      return props.theme as Theme;
    }
  }
  return { mode: DEFAULT_THEME_MODE };
}