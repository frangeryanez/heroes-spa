import { types } from '../../../src/auth';

describe('Test on file types.js', () => {
  test('Should return types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });
  });
});