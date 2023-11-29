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

const AuthReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      // console.log('Setting token:', action.payload.token);
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    }
    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
    case AUTH_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        isAuthenticated: false,
        isLoading: false,
        error: action?.payload ?? null,
        user: null,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
