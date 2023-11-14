import React, { useState, useContext, useEffect, createContext } from "react";

const AppContext = createContext(null);

const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => { 
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <AppContext.Provider value={{toggleTheme, theme}}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, ThemeProvider };