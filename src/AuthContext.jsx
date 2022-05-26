import { createContext } from 'react';

const AuthContext = createContext({
  isLogedIn: false,
  login() {},
  logout() {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
