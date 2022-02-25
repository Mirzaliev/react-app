import React, { ComponentType, createContext, ReactNode, useCallback, useContext } from 'react';

type GetThemeTokenFn<ThemeTokens, ThemeProps>
    = (props: ThemeProps) => ThemeTokens;

export type ThemeProp<ThemeTokens, ThemeProps> = (
  getTokens: GetThemeTokenFn<ThemeTokens, ThemeProps>,
  themeProps: ThemeProps
) => ThemeTokens;

type CreateThemeReturnType<ThemeTokens,ThemeProps > = {
  Provider: ComponentType<{
    children: ReactNode;
    value?: ThemeProp<ThemeTokens, ThemeProps>;
  }>;
  useTheme: GetThemeTokenFn<ThemeTokens, ThemeProps>;
};

export function createTheme<ThemeTokens, ThemeProps>(
  defaultGetTokens: GetThemeTokenFn<ThemeTokens, ThemeProps>,
): CreateThemeReturnType<ThemeTokens,ThemeProps> {

  const noopThemeFn: ThemeProp<ThemeTokens, ThemeProps>
      = (getTokens, props) => getTokens(props);


  const ThemeContext = createContext(defaultGetTokens);

  function useTheme(themeProps: ThemeProps) {

    const context =  useContext(ThemeContext);
    const themeFn = context || noopThemeFn;
    return themeFn(themeProps);
  }


  function Provider(props: {
    children: ReactNode,
    value?: ThemeProp<ThemeTokens, ThemeProps>
  }) {
    const themeFn =  useContext(ThemeContext);
    const valueFn =  props.value || noopThemeFn;
    const mixedFn: GetThemeTokenFn<ThemeTokens, ThemeProps> = useCallback(
        (themeProps: ThemeProps) => valueFn(themeFn, themeProps),
        [themeFn, valueFn]
    );
    ThemeContext.displayName = 'Theme-Provider';
    return (
        <ThemeContext.Provider value={mixedFn}>
          { props.children }
        </ThemeContext.Provider>
    );
  }



  return { Provider, useTheme };

}
