import React, { useReducer } from 'react';
import axios from 'axios';
import useId from '@mui/material/utils/useId';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {
  CLEAR_ERROR,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../type';

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
  const SignUpUserExists = async () => {
    try {
      const response = await axios.get('/api/users');
      console.log(response);
      return response;
    } catch (error) {
      console.log('error', error.message);
    }
  };
  const SignUpUserHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', data, config);
      console.log('signup successful', response);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.msg);
      dispatch({ type: SIGNUP_FAIL, payload: error.response.data.msg });
    }
  };

  let token;
  const SignInUserHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      console.log('signin successful', response);
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      return response;
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({ type: SIGNIN_FAIL, payload: error.response.data.msg });
    }
  };
  // const SignInUserExists = async () => {
  //   try {
  //     const config = {
  //       headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
  //     };
  //     const response = await axios.get('/api/auth', config);
  //     console.log('get response', response);
  //     // return response;
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  const clearErrorHandler = () => {
    dispatch({ type: CLEAR_ERROR });
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
        SignUpUserExists,
        SignInUserHandler,
        clearErrorHandler,
        // SignInUserExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
