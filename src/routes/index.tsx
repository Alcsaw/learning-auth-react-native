import React from 'react';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const { loggedIn, loading } = useAuth();


  if (loading) {
    return <Loading />;
  }

  return loggedIn ? (
    <AppRoutes />
  )
  : (
    <AuthRoutes />
  );
};

export default Routes;
