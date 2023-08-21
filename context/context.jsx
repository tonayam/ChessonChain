import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const baseURL = `  https://99ca-197-211-58-194.ngrok-free.app/api/v1`;
  const [showNavbar, setShowNavbar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <AppContext.Provider
      value={{ baseURL, showNavbar, setShowNavbar, lightMode, setLightMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
