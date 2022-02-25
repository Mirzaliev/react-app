import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import { ThemeModes, ThemeProviderFCProps } from './types';
import { DEFAULT_THEME_MODE } from './constants';
import { background as bg } from './colors';
import Theme from './utils/useThemeContext';

type GetMode = () => { mode: ThemeModes, s: Dispatch<SetStateAction<ThemeModes>> };

const themeFnMap: Record<ThemeModes, GetMode> = {
  dark: () => ({ mode: 'dark' , s: () => {} }),
  light: () => ({ mode: 'light', s: () => {}  }),
};

const ThemeProvider: FC<ThemeProviderFCProps> = memo<ThemeProviderFCProps>(
  ({ mode = DEFAULT_THEME_MODE, background = bg,s, children }) => {

    const themeObj = {  theme: { mode, s } };
    const backgroundColor = background(themeObj);


    return <Theme.Provider value={themeFnMap[mode]}>
      <div className={`${mode}-`}>
        {children}
      </div>

    </Theme.Provider>;
  }
);

export { ThemeProvider };
