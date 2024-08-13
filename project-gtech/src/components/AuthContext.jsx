import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);
  const login = () => {
    setAuthentication(true);
  };

  const logout = () => {
    setAuthentication(false);
  };
  return (
    <AuthContext.Provider value={{ authentication, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
