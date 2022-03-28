import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const saveUserData = (data) => setUserData(data);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
