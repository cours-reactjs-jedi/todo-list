import { createContext } from "react";

export const myTheme = {
  light: {
    background: "#fff",
    color: " #000",
    itemColor: "#eee",
    buttonColor: "#fff"
  },
  dark: {
    background: "#000",
    color: "#fff",
    itemColor: "#555",
    buttonColor: "#999"
  },
};

export const ThemeContext = createContext(myTheme);
