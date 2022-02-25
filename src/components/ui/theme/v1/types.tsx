import { Dispatch, SetStateAction } from "react";

export type ThemeModes = 'light' | 'dark';

export interface Theme {
  mode: ThemeModes;
  s?: Dispatch<SetStateAction<ThemeModes>>
}

export interface GlobalThemeTokens extends Theme {}


export type ThemeProps = CustomThemeProps;

type CustomThemeProps = {
  theme: Theme;
  [index: string]: unknown;
};

type NoThemeProps = {
  [index: string]: unknown;
};


export type DefaultValue = string | number;

export type ThemedValue<V = DefaultValue> = (props?: ThemeProps) => V | '';

export interface ThemeProviderFCProps {
  mode?: ThemeModes,
  background?: ThemedValue<string>,
  s: Dispatch<SetStateAction<ThemeModes>>
}

