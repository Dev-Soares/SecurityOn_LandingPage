import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { createElement } from "react";

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  dark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return createElement(ThemeContext.Provider, { value: { dark, toggleTheme } }, children);
}

export function useTheme() {
  return useContext(ThemeContext);
}
