import { DEFAULT_THEME_MODE } from "../constants";


export default function currentTheme(key: string, fallback: string = DEFAULT_THEME_MODE) {
  let theme;
  try {
    theme = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return theme || fallback;
}