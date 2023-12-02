import React, { useState } from 'react';
import { DefaultLayout } from '../../layout';
import shoesSide from '../../../assets/shoe2Side.jpg';
import './style.css';
const ForgetPasswordDefault = () => {
  const [email, setEmail] = useState('');
  const changeHandler = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <DefaultLayout>
      <div className="flex">
        <div className="side1">
          <img src={shoesSide} alt="shoesside" className="image" />
        </div>
        <div className="side2">
          <div className="side2Content">
            <h2 className="heading">Reset Your Password</h2>
            <p className="parag">
              Enter your email and we'll send you a link to reset your password.
              Please check it.
            </p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={submitHandler}>
                <label htmlFor="password">Email</label>

                <input
                  type="email"
                  name="newPassword"
                  id="newPassword"
                  value={email}
                  onChange={changeHandler}
                />

                <button className="button">Send</button>
                <a href="#" className="loginback">
                  Back to Login
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ForgetPasswordDefault;
