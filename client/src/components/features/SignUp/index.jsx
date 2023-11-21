import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/sneaker.jpg'
import './style.css'

const SignUpDefault = () => {
  return (
    <section>
    <div className='signup-registeration-form'>
      <div className='col-1'>
        <h2 className='signupHeading'>Sign Up</h2>
        <span>
          Create an account to get Login
        </span>
        <form id='signupForm' className='flex flex-col'>
          <input  type='text' required placeholder='Type your Full Name' />
      <input  type='text' required placeholder='Type your Email' />
     <input  type='password' required placeholder='Type Strong Password'  />
     {/* <i class="fa-regular fa-eye .eye-icon-1"></i> */}

        <button className='btn' type='submit'>
        Create An Account
        </button>
 
        </form>
        <p>Already Have an Account? <Link to="/login" className='link'>LOGIN</Link></p>
      </div>
      <div className='col-2'>
        <img src={img} alt=""/>
      </div>
    </div>
  </section>
  );
};

export default SignUpDefault;