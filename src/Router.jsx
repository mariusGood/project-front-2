import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import AuthContext from './AuthContext';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFoud/404';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Navigate } from 'react-router-dom';

const Router = () => {
  const [isLogedIn, setisLogedIn] = useState(false);
  const { id } = useParams;

  const contextValue = {
    isLogedIn,
    login,
    logout,
  };

  function login() {
    setisLogedIn(true);
  }

  function logout() {
    setisLogedIn(false);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={`auth/cart:${id}`}
            element={<Navigate to='/auth/cart' />}
          />
          <Route
            path='/auth/cart'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
