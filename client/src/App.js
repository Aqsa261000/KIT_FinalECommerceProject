import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SignUp from './views/signUp';
import LogIn from './views/login';
import VendorSignUp from './views/vendorSignUp';
import { BrowserRouter } from 'react-router-dom';
import VendorLogin from './views/vendorLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* Yahan par routes aayeghe */}
        <Routes>
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/vendorsignup" element={<VendorSignUp />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
