import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router';

describe('Test on file <PrivateRoute />', () => {
  test('Must show the login if it is not authenticated', () => {
    const contextValue = {
      logged: false
    };
    const loginPage = 'Login Page';

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={  <h1>{ loginPage }</h1> } /> 
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(loginPage)).toBeTruthy();
  });

  test('Must show the children if it is authenticated', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
        user: {
          id: 'ABC',
          name: 'Matt Matts'
        }
    };
    const privateRoute = 'Private Route';
    const loginPage = 'Login Page';
    
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='marvel' element={ 
              <PrivateRoute>
                <h1>{ privateRoute }</h1>
              </PrivateRoute>
            } />
            <Route path='login' element={ <h1>{ loginPage }</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(privateRoute)).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });


});