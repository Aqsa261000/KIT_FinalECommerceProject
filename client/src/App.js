import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

// import { AdminHome } from './views';
// import { DefaultLayout } from './components/layout';
import { SignUp, Home, Login } from './views';
// import Home from './views';

import { DefaultLayout } from './components/layout';

import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
// import BasicAlert from './components/common/Alert';
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <CssBaseline />
            {/* Yahan par routes aayeghe */}

            <Routes>
              <Route path="/" element={<DefaultLayout />} />

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
