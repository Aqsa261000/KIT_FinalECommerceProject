import React, { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import { SignUp, Home, Login } from './views';
import { AdminHome, AdminLogin } from './views';
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
            <AppRouter />
            {/* <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/vendorsignup" element={<VendorSignUp />} />
              <Route path="/vendorlogin" element={<VendorLogin />} />
              <Route path="/vendorhome" element={<VendorHome />} />
            </Routes> */}
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
