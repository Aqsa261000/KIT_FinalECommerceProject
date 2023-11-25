import React, { useContext, useState } from 'react';
import img from '../../../../assets/sneaker.jpg';
import { Link } from 'react-router-dom';
import './style.css';
import AuthContext from '../../../../context/auth/authContext';
import AlertContext from '../../../../context/alert/alertContext';
import { BasicAlert } from '../../../common';

const LoginDefault = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { email, password } = login;
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { SignInUserHandler } = authContext;
  const { AlertHandler } = alertContext;

  const onChangeHandler = (e) => {
    setLogin((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    console.log(login);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      AlertHandler('Please fill all the required fields', 'error');
    } else {
      try {
        const response = await SignInUserHandler(login);
        console.log(response);

        const tokenExist = response?.data?.token;
        console.log('te', tokenExist);
        if (!tokenExist) {
          AlertHandler('Please write the correct credentials', 'error');
        }

        // SignInUserExists();
        else {
          SignInUserHandler(login);
        }  
      } catch (error) {
        console.log('error occured', error);
      }
    }
  };
  return (
    <section className="fullcontainer">
      <BasicAlert />
      <div className="sigin-registeration-form">
        <div className="column-1">
          <h2 className="signinHeader">Log In</h2>
          <h4 className="signinsubHeading">Welcome back!</h4>
          <form
            id="signinForm"
            className="flex flex-col"
            onSubmit={onSubmitHandler}
          >
            {/* <input  type='text' placeholder='Type your Full Name' /> */}
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              id="email"
              value={login.email}
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              id="password"
              value={login.password}
              onChange={onChangeHandler}
            />
            {/* <i className="fa-regular fa-eye eye-icon2"></i> */}

            <button className="btn" type="submit">
              Login
            </button>
          </form>
          <p className="flex2">
            Don't have an Account?{' '}
            <Link to="/signup" className="link">
              {' '}
              Register
            </Link>
          </p>
        </div>
        <div className="col-2">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LoginDefault;
