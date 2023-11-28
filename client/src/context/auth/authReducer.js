import {
  CLEAR_ERROR,
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
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        isLoading: false,
      };

    case SIGNUP_FAIL:
    case SIGNIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action?.payload ?? null,
      };

    case CLEAR_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
