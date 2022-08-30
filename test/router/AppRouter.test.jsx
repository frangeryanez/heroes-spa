import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter, PublicRoute } from '../../src/router';

describe('Test on file <AppRouter />', () => {
  test('Must show the login if it is not authenticated', () => {
    const contextValue = {
      logged: false
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('Must show the marvel component if it is authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Matt Matts'
      }
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});