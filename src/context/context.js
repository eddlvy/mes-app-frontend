import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);


  return (
    <Context.Provider value={{ logged, setLogged, token, setToken }}>{children}</Context.Provider>
  )
}