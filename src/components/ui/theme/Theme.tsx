import React, { createContext, useCallback, useContext, useEffect, useState, memo, FC } from 'react';
import { ThemeProviderProps, UseThemeProps } from "./types";
import currentTheme from "./utils/currentTheme";
import { getSystemTheme } from "./utils/getSystemTheme";
import { MEDIA } from "./constants";


const ThemeContext = createContext<UseThemeProps>(
    { setTheme: () => {}, themes: []
    });

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider: FC<ThemeProviderProps> = ({
  forcedTheme,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = 'theme',
  themes = ['light', 'dark'],
  defaultTheme = enableSystem ? 'system' : 'light',
  attribute = 'data-theme',
  value,
  children,
  nonce
}) => {
  const [theme, setThemeState] = useState(
      () => currentTheme(storageKey, defaultTheme));
  
  const [resolvedTheme, setResolvedTheme] = useState(
      () => currentTheme(storageKey));
  
  const setTheme = useCallback(mode => {
    setThemeState(mode);
    try {
      localStorage.setItem(storageKey, mode);
    } catch (e) {
      // Unsupported
    }
  }, [forcedTheme]);

  const applyTheme = useCallback(mode =>  console.log('Сработал applyTheme ', mode) , []);

  const handleMediaQuery = useCallback(
      (e: MediaQueryListEvent | MediaQueryList) => {
        const resolved = getSystemTheme(e);
        setResolvedTheme(resolved);
        console.log('Сработал handleMediaQuery');
        if (theme === 'system' && enableSystem && !forcedTheme) {
          applyTheme('system');
        }
      },
      [theme, forcedTheme]
  );

  // Always listen to System preference
  useEffect(() => {
    console.log('useEffect -> handleMediaQuery');
    const media = window.matchMedia(MEDIA);
    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);
    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const mode = e.newValue || defaultTheme;
      setTheme(mode);
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setTheme]);
  
  useEffect(() => {
    applyTheme(forcedTheme ?? theme);
  }, [forcedTheme, theme]);

  ThemeContext.displayName = 'My-Theme-Provider';

  return (
      <ThemeContext.Provider value={{
        theme,
        setTheme,
        forcedTheme,
        resolvedTheme: theme === 'system' ? resolvedTheme: theme,
        themes: enableSystem ? [...themes, 'system']: themes,
        systemTheme: (enableSystem ? resolvedTheme : undefined) as 'light' | 'dark' | undefined
      }}>
        { console.log('Рендер') }
        {children}
      </ThemeContext.Provider>
  );
};