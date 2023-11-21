import React from 'react'
import img from '../../../assets/sneaker.jpg'
import {Link} from 'react-router-dom';
import './style.css'

const VendorLoginDefault = () => {
  return (
    <section>
    <div className='vendor-registeration-form'>
      <div className='coln-1 box'>
        <h2 className='vendorHeading'>Vendor Login</h2>
        <span id='text'>
         Please fill out your valid credentials to get login!
        </span>
        <form id='vendorForm' className='flex flex-col'>
          {/* <input  type='text' placeholder='Type your Full Name' /> */}
      <input  type='text' required placeholder='Enter your Email' />
     <input  type='password' required placeholder='Enter your Password'  />
     <i class="fa-regular fa-eye eye-icon3"></i>
      
        <button className='btn' type='submit'>
        Click to Log in
        </button>
        <p>Don't have an Account? <Link to="/vendorSignUp" className='link'> Register</Link></p>
        </form>
        

       
      </div>
      <div className='col-2 box'>
        <img src={img} alt=""/>
      </div>
    </div>
  </section>
  )
}

export default VendorLoginDefault