import React from "react";

export const generalContextProvider = React.createContext({});

export default function GeneralContextProvider({ children, value }) {
  return (
    <generalContextProvider.Provider value={value}>
      {children}
    </generalContextProvider.Provider>
  );
}
