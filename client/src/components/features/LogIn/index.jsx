import React from 'react'
import img from '../../../assets/sneaker.jpg'
import {Link} from 'react-router-dom';
import './style.css'

const LoginDefault = () => {
  return (
    <section>
    <div className='sigin-registeration-form'>
      <div className='column-1'>
        <h2 className='signinHeader'>Log In</h2>
        <span>
        Welcome back!
        </span>
        <form id='signinForm' className='flex flex-col'>
          {/* <input  type='text' placeholder='Type your Full Name' /> */}
      <input  type='text' required placeholder='Enter your Email' />
     <input  type='password' required placeholder='Enter your Password'  />
     <i class="fa-regular fa-eye eye-icon2"></i>
      
        <button className='btn' type='submit'>
        Click to Log in
        </button>
 
        </form>
        <p>Don't have an Account? <Link to="/signup" className='link'> Register</Link></p>
     
       
      </div>
      <div className='col-2'>
        <img src={img} alt=""/>
      </div>
    </div>
  </section>
  );
};
  
export default LoginDefault