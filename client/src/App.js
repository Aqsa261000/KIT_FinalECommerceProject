import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import LogIn from './views/login';

import { BrowserRouter } from 'react-router-dom';

// import { AdminHome } from './views';
// import { DefaultLayout } from './components/layout';
import { SignUp } from './views';
import { DefaultLayout } from './components/layout';
import { Login } from './views';
import AlertState from './context/alert/alertState';
// import BasicAlert from './components/common/Alert';
const App = () => {
  return (
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
  );
};

export default App;
