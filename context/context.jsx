import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <AppContext.Provider
      value={{ showNavbar, setShowNavbar, lightMode, setLightMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
