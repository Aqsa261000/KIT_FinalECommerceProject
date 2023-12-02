import React, { useState } from 'react';
import { DefaultLayout } from '../../layout';
import shoesSide from '../../../assets/shoesSide.jpg';

import './style.css';

const VerificationDefault = () => {
  const [code, setCode] = useState('');
  const chnageHandler = (e) => {
    setCode(e.target.value);
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
            <h2 className="heading">Verification</h2>
            <p className="parag">Verify your code.</p>
            <div className="formContent">
              <form action="#" className="form" onSubmit={submitHandler}>
                <label htmlFor="verification">Verification Code</label>
                <input
                  type="text"
                  name="verifyId"
                  id="verifyId"
                  value={code}
                  onChange={chnageHandler}
                />
                <button className="button">Verify Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VerificationDefault;
