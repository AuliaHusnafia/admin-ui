import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const defaultTheme = { name: "theme-green", color: "#299D91" };
const defaultMode = "light";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("appMode") || defaultMode;
  });

  const toggleMode = () => {
    setMode((prev) => {
      const nextMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("appMode", nextMode);
      return nextMode;
    });
  };

  useEffect(() => {
    localStorage.setItem("appMode", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};