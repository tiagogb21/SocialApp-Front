import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from '../auth/ProtectedRoute';
import { Signin } from "../components/Signin";
import Loading from '../components/Loading';
import { Signup } from '../components/Signup';

export const RouterPath: React.FC = () => {
  const { isLoading, user } = useAuth0();

  console.log(user)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        {/*  */}
      </Route>
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={ <Signup /> } />
    </Routes>
  );
};
