import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router';

describe('Test on file <PublicRoute />', () => {
  test('Must show the children if it is not authenticated', () => {
    const contextValue = {
      logged: false
    };
    const publicRoute = 'Public Route';

    render(
      <AuthContext.Provider value={ contextValue }>
        {/* As it is not authenticated it is expected to show any children */}
        <PublicRoute>
          <h1>{ publicRoute }</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText(publicRoute)).toBeTruthy();
  });

  test('Must navigate if authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Matt Matts'
      }
    };
    const publicRoute = 'Public Route';
    const marvelPage = 'Marvel Page';

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={           
              <PublicRoute>
                <h1>{ publicRoute }</h1>
              </PublicRoute>
            } />
            <Route path='marvel' element={ <h1>{ marvelPage }</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(marvelPage)).toBeTruthy();
  });
});