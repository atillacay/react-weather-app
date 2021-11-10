/**
 * defualt theme set to dark
 * @param {*} param0 
 * @returns 
 */
import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
