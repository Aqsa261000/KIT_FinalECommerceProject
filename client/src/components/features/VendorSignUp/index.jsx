import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';
import img from '../../../assets/sneaker.jpg'

const VendorSignUpDefault = () => {
    return (
        <section>
        <div className='vendor-registeration-form'>
          <div className='colm-1 box'>
            <h2 className='vendorHeading'>Vendor Registeration Form</h2>
            <span id='text'>
             Please fill out the form below to register as a vendor. We look forward to having you 
             on board!
            </span>
            <form id='form' className='flex flex-col'>
                <span className='input-boxes'>
              <input  type='text' required placeholder='Full Name' />
             <input  type='text' required placeholder='Gender' />   
    </span>

    <span className='input-boxes'>
    <input  type='text' required placeholder='City' />
    <input  type='number' required placeholder='Contact Info' />
    </span>

    <span className='input-boxes'>
          <input type='email' required placeholder='Type your Email' />
         <input  type='password' required placeholder='Type Strong Password'  />
         </span>
         {/* <i class="fa-regular fa-eye eye-icon"></i> */}
            <button className='btn' type='submit'>
            Register
            </button>
     
            <p>Already Have an Account? <Link to="login" className='link'>LOGIN</Link></p> 
            </form>
           
         
           
          </div>
          <div className='col-2 box'>
            <img src={img} alt=""/>
          </div>
        </div>
      </section>
      );
}

export default VendorSignUpDefault