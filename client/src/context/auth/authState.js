import React, { useReducer } from 'react';
import axios from 'axios';
import useId from '@mui/material/utils/useId';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  };
  const alertId = useId();

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const SignUpUserHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', data, config);
      console.log('hh', response);
    } catch (error) {
      console.log('error', error.message);
      console.log('error', error.response);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        SignUpUserHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
