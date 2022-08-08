import { Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Heroes } from '../heroes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Heroes />} />
      </Routes>
    </>
  );
};