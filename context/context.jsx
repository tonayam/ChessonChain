import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const baseURL = `https://chessonchain-waitlist-api.onrender.com/api/v1`;
  const [showNavbar, setShowNavbar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
  }, [showNavbar]);

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
