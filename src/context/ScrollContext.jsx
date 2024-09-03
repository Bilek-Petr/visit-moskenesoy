import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const bannerTextRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ bannerTextRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
