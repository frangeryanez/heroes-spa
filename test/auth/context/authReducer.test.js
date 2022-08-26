import { authReducer, types } from '../../../src/auth';

describe('Test on file authReducer.js', () => {
  const initialState = {
    logged: false,
    user: {}
  };

  test('should return the default state', () => {
    const state = authReducer(initialState, {});
    expect(state).toBe(initialState);
    expect(state.logged).toBeFalsy();
  });

  test('Must call login, authenticate and set the user', () => {
    const user = {
      id: 'ABC',
      name: 'Matt Matts'
    }
    const action = {
      type: types.login,
      payload: user
    };

    const state = authReducer(initialState, action);
    expect(state.logged).toBeTruthy();
    expect(state.user.name).toEqual(user.name);
  });

  test('Must delete the user name and logged in false', () => {
    const state = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Matt Matts'
      }
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState.logged).toBeFalsy();
  });
});