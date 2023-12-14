'use client'

import { createContext, useState } from "react";

const initialValue = {
  token: "",
  authLogin: (token: string) => {},
  authLogout: () => {},
};

export const AuthContext = createContext(initialValue);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authValue, setAuthValue] = useState(initialValue);

  const authLogin = (token: string) => {
    setAuthValue((prevVal) => ({ ...prevVal, token }));
  };
  const authLogout = () => {
    setAuthValue((prevVal) => ({ ...prevVal, token: '' }));
  };

  return (
    <AuthContext.Provider value={{ ...authValue, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
