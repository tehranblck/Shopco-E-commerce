import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth } from '../Config/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
  
    const storedUser = localStorage.getItem('users');
    
    if (storedUser) {
      // const user = JSON.parse(storedUser);
      setUser(storedUser)
      dispatch(changeAuth(storedUser));
      
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
