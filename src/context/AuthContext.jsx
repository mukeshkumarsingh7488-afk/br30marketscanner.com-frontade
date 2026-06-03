import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("br30ScannerUser") || "null"));

  const login = (token, userData) => {
    localStorage.setItem("br30ScannerToken", token);
    localStorage.setItem("br30ScannerUser", JSON.stringify(userData));
    setUser(userData);
  };

  const updateUser = (userData) => {
    localStorage.setItem("br30ScannerUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("br30ScannerToken");
    localStorage.removeItem("br30ScannerUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        updateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
