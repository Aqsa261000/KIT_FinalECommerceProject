import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/sneaker.jpg';
import './style.css';
import AlertContext from '../../../../context/alert/alertContext';
import BasicAlert from '../../../common/Alert';
import AuthContext from '../../../../context/auth/authContext';

const SignUpDefault = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { SignUpUserHandler } = authContext;
  const { AlertHandler } = alertContext;
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    gender: '',
    phone: '',
  });
  const { name, email, password, confirmPassword, city, gender, phone } =
    signup;
  const onChangeHandler = (e) => {
    setSignup((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    // console.log(signup);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(signup);

    if (
      !email ||
      !password ||
      !name ||
      !confirmPassword ||
      !city ||
      !gender ||
      !phone
    ) {
      AlertHandler('Please fill all the required fields', 'error');
    } else if (password !== confirmPassword) {
      AlertHandler('Password does not match', 'error');
    } else if (password.length < 6) {
      AlertHandler('Password should be more than 6 characters', 'error');
    } else {
      console.log('User is signed up', signup);
      SignUpUserHandler(signup);
    }
  };
  return (
    <section>
      <BasicAlert />
      <div className="signup-registeration-form">
        <div className="col-1">
          <h2 className="signupHeading">SignUp</h2>
          <h4 className="signupsubHeading">Sign Up for free!</h4>
          <form
            id="signupForm"
            className="flex flex-col"
            onSubmit={onSubmitHandler}
          >
            <input
              type="text"
              name="name"
              value={signup.name}
              placeholder="Type your Full Name"
              id="name"
              onChange={onChangeHandler}
            />
            <input
              type="email"
              name="email"
              value={signup.email}
              placeholder="Type your Email"
              id="email"
              onChange={onChangeHandler}
            />
            <input
              type="password"
              placeholder="Type your Password"
              name="password"
              value={signup.password}
              id="password1"
              onChange={onChangeHandler}
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signup.confirmPassword}
              id="password2"
              onChange={onChangeHandler}
              // minLength={6}
            />
            <input
              type="text"
              name="city"
              value={signup.city}
              placeholder="Enter City"
              id="city"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="gender"
              value={signup.gender}
              placeholder="Enter Gender"
              id="gender"
              onChange={onChangeHandler}
            />
            <input
              type="number"
              name="phone"
              value={signup.phone}
              placeholder="Enter your Contact Number"
              id="phone"
              onChange={onChangeHandler}
              minLength={11}
              maxLength={11}
            />
            {/* <i class="fa-regular fa-eye .eye-icon-1"></i> */}

            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>
          <p className="flex2">
            Already Have an Account?{' '}
            <Link to="/login" className="link">
              Login
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

export default SignUpDefault;
