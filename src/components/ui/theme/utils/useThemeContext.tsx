import { createTheme } from './createTheme';
import { GlobalThemeTokens } from '../types';
const { Provider, useTheme } = createTheme<GlobalThemeTokens, void>(
    () => ({ mode: "light" })
);
export { useTheme };
export default { Provider };