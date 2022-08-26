import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Heroes } from '../heroes';
import { PrivateRoute, PublicRoute } from '.';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <Heroes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  );
};