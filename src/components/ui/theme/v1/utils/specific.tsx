import getCurrentTheme from './currentTheme';
import { DefaultValue, ThemedValue, ThemeModes, ThemeProps } from '../types';

type Modes<V> = { [key in ThemeModes]?: V };
type VariantModes<V> = { [index: string]: Modes<V> };


// Unpack custom variants, and get correct value for the current theme
function themedVariants<V>(variantProp: string, variants?: VariantModes<V>) {
  return (props?: ThemeProps) => {
    const theme = getCurrentTheme(props);
    if (props && props[variantProp] && variants) {
      // @ts-ignore
      const modes = variants[props[variantProp]];
      if (modes && modes[theme.mode]) {
        const value = modes[theme.mode];
        if (value) {
          return value;
        } // TS believes value can be undefined
      }
    }
    return '';
  };
}

export default function specific<V = DefaultValue>(
  modesOrVariant: Modes<V> | string,
  variantModes?: VariantModes<V>
): ThemedValue<V> {
  if (typeof modesOrVariant === 'string') {
    return themedVariants<V>(modesOrVariant, variantModes);
  }
  const modes = modesOrVariant;

  return (props?: ThemeProps) => {
    const theme =  getCurrentTheme(props);

    if(theme.mode in modes){
      const value = modes[theme.mode];
      if(value) {
        return value;
      }
    }

    return '';
  };
}
