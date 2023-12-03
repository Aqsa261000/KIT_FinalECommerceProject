import React, { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import {
  SignUp,
  Home,
  Login,
  VendorProducts,
  VendorProfile,
  VendorOrders,
  VendorInventory,
} from './views';
import { AdminHome, AdminLogin } from './views';
import { ForgetPassword, Verification, CheckEmail, NewPassword } from './views';
import { VendorHome, VendorLogin, VendorSignUp } from './views';
import AppRouter from './router';

// import BasicAlert from './components/common/Alert';
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <CssBaseline />
            {/* Yahan par routes aayeghe */}
            {/* <AppRouter /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/vendorsignup" element={<VendorSignUp />} />
              <Route path="/vendorlogin" element={<VendorLogin />} />
              <Route path="/vendorhome" element={<VendorHome />} />
              <Route path="/vendorproducts" element={<VendorProducts />} />
              <Route path="/vendorprofile" element={<VendorProfile />} />
              <Route path="/vendororders" element={<VendorOrders />} />
              <Route path="/vendorinventory" element={<VendorInventory />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/checkemail" element={<CheckEmail />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/newpassword" element={<NewPassword />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
