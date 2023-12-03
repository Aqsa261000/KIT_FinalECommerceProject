import React, { useState } from 'react';
import { DefaultLayout } from '../../../layout';
import shoesSide from '../../../../assets/shoe1Side.jpg';
import hide from '../../../../assets/hide.png';
import './style.css';

const NewPasswordDefault = () => {
  const [password, setPassword] = useState('');
  const changeHandler = (e) => {
    setPassword(e.target.value);
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
            <h2 className="heading">Create New Password</h2>
            <p className="parag">
              Your new password must be different from previous used passwords.
            </p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={submitHandler}>
                <label htmlFor="password">Password</label>
                <div className="newPass">
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={password}
                    onChange={changeHandler}
                  />
                  <button className="hideBtn">
                    <img src={hide} alt="hide" className="hide" />
                  </button>
                </div>

                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <p className="paraRed hidden">
                  New password and comfirm new password do not match
                </p>

                <button className="button">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewPasswordDefault;
