import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Heroes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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