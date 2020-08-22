import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';
import api from '../services/api';

interface User {
  name: string;
  email: string;
};

interface AuthContextData {
  loggedIn: boolean;
  user: User | null;
  loading: boolean;
  login(): Promise<void>;
  logout(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@LearningAuth:user');
      const storageToken = await AsyncStorage.getItem('@LearningAuth:token');
      // TODO: change to https://reactnative.dev/docs/asyncstorage#multiget

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    };

    loadStorageData();
  }, []);

  async function login() {
    const response = await auth.login();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@LearningAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@LearningAuth:token', response.token);
  };

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider value={{loggedIn: !!user, user, loading, login, logout}} >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};
