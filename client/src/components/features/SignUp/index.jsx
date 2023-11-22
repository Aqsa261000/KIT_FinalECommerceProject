import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/sneaker.jpg';
import './style.css';

const SignUpDefault = () => {
  return (
    <section>
      <div className="signup-registeration-form">
        <div className="col-1">
          <h2 className="signupHeading">SignUp</h2>
          <h4 className="signupsubHeading">Sign Up for free!</h4>
          <form id="signupForm" className="flex flex-col">
            <input type="text" required placeholder="Type your Full Name" />
            <input type="text" required placeholder="Type your Email" />
            <input
              type="password"
              required
              placeholder="Type Strong Password"
            />
            <input type="text" required placeholder="Enter City" />
            <input type="text" required placeholder="Enter Gender" />
            <input
              type="text"
              required
              placeholder="Enter your Contact Number"
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
