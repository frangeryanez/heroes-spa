import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Collapsible } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Test on file <Collapsible />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'ABC',
      name: 'Matt Matts'
    },
    logout: jest.fn()
  };

  beforeEach(() => jest.clearAllMocks() );
  
  test('It should show the username', () => {
    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Collapsible />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Matt Matts') ).toBeTruthy();
  });

  test('Should call logout and navigate when the logout button is clicked', () => {
    render(
      <AuthContext.Provider value={ contextValue}>
        <MemoryRouter>
          <Collapsible />
        </MemoryRouter> 
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button', { name: 'btn-logout' });
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { 'replace': true })
  });
});