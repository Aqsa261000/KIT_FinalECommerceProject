import React, { useReducer } from 'react';
import axios from 'axios';
import useId from '@mui/material/utils/useId';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  CLEAR_ERROR,
  LOGOUT,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from '../type';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = ({ children }) => {
  const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const getUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const response = await axios.get('/api/auth');
      console.log(response);
      // dispatch({ type: 'AUTH_SUCCESS', payload: response.data });
      dispatch({
        type: AUTH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log('error', error);
      dispatch({
        type: AUTH_FAIL,
        // payload: error.response.data.msg,
      });
    }
  };
  const SignUpUserHandler = async (data) => {
    try {
      const apidata = {
        ...data,
        role: 0,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', apidata, config);
      console.log('signup successful', response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (localStorage.token) {
        getUser();
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.errors);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };

  const SignUpVendorHandler = async (data) => {
    try {
      const apidata = {
        ...data,
        role: 2,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/users', apidata, config);
      console.log('signup successful', response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      if (localStorage.token) {
        getUser();
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error.response.data.errors);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInUserHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === 0) {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInAdminHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === 1) {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
      return response;
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
    }
  };
  const SignInVendorHandler = async (data) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await axios.post('/api/auth', data, config);
      // token = await response.data.token;
      if (response.data.role === 2) {
        console.log('signin successful', response);
        dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
      } else {
        dispatch({
          type: SIGNIN_FAIL,
          payload: 'User not exist',
        });
      }
      return response;
    } catch (error) {
      // console.log('error', error.message);
      console.log('error', error);
      dispatch({
        type: SIGNIN_FAIL,
        payload:
          error.response.data.msg ||
          error.response.data.errors.map((errorObject, index) => (
            <span key={index}>{errorObject.msg}</span>
          )),
      });
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

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };
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
        SignUpVendorHandler,
        SignInUserHandler,
        clearErrorHandler,
        SignInAdminHandler,
        SignInVendorHandler,
        getUser,
        logoutHandler,
        // SignInUserExists,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
