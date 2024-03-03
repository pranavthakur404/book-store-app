import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [login, setIsLogin] = useState(false);
  return (
    <authContext.Provider
      value={{
        login,
        setIsLogin,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};

export default AuthProvider;
