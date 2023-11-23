import React from 'react';
import img from '../../../../assets/sneaker.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const LoginDefault = () => {
  return (
    <section className="fullcontainer">
      <div className="sigin-registeration-form">
        <div className="column-1">
          <h2 className="signinHeader">Log In</h2>
          <h4 className="signinsubHeading">Welcome back!</h4>
          <form id="signinForm" className="flex flex-col">
            {/* <input  type='text' placeholder='Type your Full Name' /> */}
            <input type="text" required placeholder="Enter your Email" />
            <input type="password" required placeholder="Enter your Password" />
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
